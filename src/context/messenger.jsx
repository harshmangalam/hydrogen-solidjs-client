import { createContext, createEffect, onMount, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { fetchMessenger } from "../services/messenger.service";
import { useAuthState } from "./auth";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
  friends: [],
  chatNs: null,
};
export default function MessengerProvider(props) {
  const [store, setStore] = createStore(initialState);
  const authState = useAuthState();

  onMount(async () => {
    try {
      const { data } = await fetchMessenger();
      setStore("friends", data.data.messengers);
    } catch (error) {
      console.log(error);
    }
  });

  createEffect(() => {
    const manager = authState?.socketManager;
    if (manager) {
      console.log(manager);
    }
  });

  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider value={{}}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useMessengerState = () => useContext(StateContext);
export const useMessengerDispatch = () => useContext(DispatchContext);
