import { createContext, createEffect, onMount, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import {
  fetchMessages,
  fetchMessenger,
  sendMessage,
} from "../services/messenger.service";
import { useAuthState } from "./auth";

const StateContext = createContext();
const DispatchContext = createContext();

export default function MessengerProvider(props) {
  const [store, setStore] = createStore({
    messages: [],
    friends: [],
    friend: null,
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
      "messages",
      produce((messages) => {
        messages.push(message);
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
      setStore("messages", data.data.messages);
      setStore("friend", data.data.friend);
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

  createEffect(() => {
    const manager = authState?.socketManager;
    if (manager) {
      console.log(manager);
    }
  });

  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider
        value={{ handleFetchMessages, handleSendMessage }}
      >
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useMessengerState = () => useContext(StateContext);
export const useMessengerDispatch = () => useContext(DispatchContext);
