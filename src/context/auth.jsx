import { createContext, onMount, Show, useContext } from "solid-js";
import { createStore } from "solid-js/store";
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

  const initSocketManager = () => {
    const manager = new Manager(import.meta.env.VITE_ENDPOINT);
    const socket = manager.socket("/", {
      auth: {
        userId: store.currentUser.id,
      },
    });

    socket.on("connect_error", (err) => {
      console.log(err.message);
    });

    setStore("socket", socket);
    setStore("manager", manager);
  };
  onMount(async () => {
    try {
      const { data } = await fetchCurrentUser();
      setStore("isAuthenticated", true);
      setStore("currentUser", data.data.user);
      setStore("currentAccount", data.data.currentAccount);
      initSocketManager();
    } catch (error) {
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

  return (
    <AuthStateContext.Provider value={store}>
      <AuthDispatchContext.Provider
        value={{
          setCurrentUser,
          removeCurrentUser,
          initSocketManager,
          setCurrentAccount,
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
