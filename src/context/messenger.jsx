import { createContext, createEffect, onMount, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import {
  clearAllMessages,
  fetchMessages,
  fetchMessenger,
  sendMessage,
} from "../services/messenger.service";
import { useAuthState } from "./auth";

const StateContext = createContext();
const DispatchContext = createContext();

export default function MessengerProvider(props) {
  const [store, setStore] = createStore({
    friends: [],
    activeChat: {
      friend: null,
      messages: [],
      haveNewMsg: false,
    },
  });
  const authState = useAuthState();

  onMount(async () => {
    try {
      const { data } = await fetchMessenger();
      setStore("friends", data.data.messengers);
    } catch (error) {
      console.log(error);
    }
  });

  const addMessage = (message) => {
    setStore(
      "activeChat",
      produce((activeChat) => {
        activeChat.messages.push(message);
      })
    );
  };

  const handleFetchMessages = async ({ getFriendId, msgDivRef }) => {
    const friendId = getFriendId();
    if (!friendId) {
      return;
    }
    try {
      const { data } = await fetchMessages(friendId);
      setStore(
        "activeChat",
        produce((activeChat) => {
          activeChat.friend = data.data.friend;
          activeChat.messages = data.data.messages;
          activeChat.msgDivRef = msgDivRef;
        })
      );
      msgDivRef.scrollTop = msgDivRef.scrollHeight;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async ({ friendId, payload, msgDivRef }) => {
    try {
      const { data } = await sendMessage(friendId, payload);
      addMessage(data.data.message);
      msgDivRef.scrollTop = msgDivRef.scrollHeight;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearAllMessages = async () => {
    try {
      const { data } = await clearAllMessages(store.activeChat.friend.id);
      setStore(
        "activeChat",
        produce((activeChat) => {
          activeChat.messages = [];
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  createEffect(() => {
    const socket = authState?.socket;
    if (socket) {
      socket.on("chat:message-received", (message) => {
        if (message.receiverId === store.activeChat.friend?.id) {
          console.log("yes..");
        }
        addMessage(message);
        setStore(
          "activeChat",
          produce((activeChat) => {
            activeChat.haveNewMsg = true;
          })
        );
      });
    }
  });

  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider
        value={{
          handleFetchMessages,
          handleSendMessage,
          handleClearAllMessages,
        }}
      >
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useMessengerState = () => useContext(StateContext);
export const useMessengerDispatch = () => useContext(DispatchContext);
