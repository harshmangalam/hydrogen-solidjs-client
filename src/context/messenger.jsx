import { createContext, createEffect, onMount, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { fetchMessages, fetchMessenger } from "../services/messenger.service";
import { useAuthState } from "./auth";

const StateContext = createContext();
const DispatchContext = createContext();

export default function MessengerProvider(props) {
  const [store, setStore] = createStore({
    messages: [],
    friends: [],
    currentFriend: null,
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

  const handleFetchMessages = async (friendId) => {
    try {
      const { data } = await fetchMessages(friendId);
      setStore("messages", data.data.messages);
      setStore("currentFriend", data.data.friend);
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
      <DispatchContext.Provider value={{ handleFetchMessages }}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useMessengerState = () => useContext(StateContext);
export const useMessengerDispatch = () => useContext(DispatchContext);
