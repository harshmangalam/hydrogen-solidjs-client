import { createContext, onMount, Show, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "solid-app-router";
import { fetchCurrentUser } from "../services/auth.service";

import { Manager } from "socket.io-client";
import AuthLoader from "../components/root/AuthLoader";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  currentUser: null,
  currentAccount: null,
  socket: null,
  manager: null,
};
export default function AuthProvider(props) {
  const [store, setStore] = createStore(initialState);
  const navigate = useNavigate();
  const location = useLocation();

  const loadCurrentUser = async () => {
    try {
      const { data } = await fetchCurrentUser();
      setStore("isAuthenticated", true);
      setStore("currentUser", data.data.user);
      setStore("currentAccount", data.data.currentAccount);
    } catch (error) {
      console.error(error);
    }
  };
  const initSocketManager = () => {
    const manager = new Manager(import.meta.env.VITE_ENDPOINT);
    const socket = manager.socket("/", {
      auth: {
        userId: store.currentUser.id,
      },
    });

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    setStore("socket", socket);
    setStore("manager", manager);
  };
  onMount(async () => {
    try {
      await loadCurrentUser();
      initSocketManager();
    } catch (error) {
      console.error(error);
      Cookies.remove("token");
      if (!location.pathname.includes("/auth")) {
        navigate("/auth/login");
      }
    } finally {
      setStore("isLoading", false);
    }
  });

  const setCurrentUser = (user) => {
    setStore("isAuthenticated", true);
    setStore("currentUser", user);
  };
  const removeCurrentUser = () => {
    setStore("isAuthenticated", false);
    setStore("currentUser", null);
  };

  const setCurrentAccount = (account) => {
    setStore("currentAccount", account);
  };

  const handleUserStatusChange = (isOnline) => {
    setStore(
      "currentUser",
      produce((currentUser) => {
        currentUser.status = isOnline ? "ACTIVE" : "IDLE";
      })
    );
  };

  const cleanupUserData = () => {
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <AuthStateContext.Provider value={store}>
      <AuthDispatchContext.Provider
        value={{
          setCurrentUser,
          removeCurrentUser,
          initSocketManager,
          setCurrentAccount,
          loadCurrentUser,
          handleUserStatusChange,
          cleanupUserData,
        }}
      >
        <Show when={!store.isLoading} fallback={<AuthLoader />}>
          {props.children}
        </Show>
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
