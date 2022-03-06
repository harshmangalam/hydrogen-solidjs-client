import { createContext, createEffect, onMount, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { fetchNotifications } from "../services/notifications.service";
import { useAuthState } from "./auth";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
  count: 0,
  notifications: [],
};
export default function NotificationProvider(props) {
  const [store, setStore] = createStore(initialState);
  const authState = useAuthState();

  onMount(async () => {
    try {
      const { data } = await fetchNotifications();
      setInitialState(data.data);
    } catch (error) {
      console.log(error);
    }
  });

  createEffect(() => {
    const socket = authState?.defaultSocketNs;
    if (socket) {
      socket.on("notification", ({ notification, count }) => {
        addNotification(notification);
        setStore("count", count);
      });
    }
  });

  function setInitialState(data) {
    setStore("notifications", data.notifications);
    setStore("count", data.count);
  }

  function addNotification(notification) {
    setStore(
      "notifications",
      produce((notifications) => {
        notifications.push(notification);
      })
    );
  }

  const removeNotification = (id) => {
    setStore(
      "notifications",
      produce((notifications) => {
        const index = notifications.findIndex((s) => s.id === id);
        if (index > -1) {
          notifications.splice(index, 1);
        }
      })
    );

    setStore(
      "count",
      produce((count) => {
        count--;
      })
    );
  };

  const removeAllNotifications = () => {
    setStore("notifications", []);
  };

  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider
        value={{
          removeNotification,
          removeAllNotifications,
        }}
      >
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useNotificationState = () => useContext(StateContext);
export const useNotificationDispatch = () => useContext(DispatchContext);
