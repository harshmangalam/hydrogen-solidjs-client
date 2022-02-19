import { createContext, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Cookies from "js-cookie";
import { useNavigate } from "solid-app-router";
import { fetchCurrentUser } from "../services/auth.service";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
  isAuthenticated: false,
  currentUser: null,
};
export default function AuthProvider(props) {
  const [store, setStore] = createStore(initialState);
  const navigate = useNavigate();

  onMount(async () => {
    try {
      const { data } = await fetchCurrentUser();
      setStore("isAuthenticated", true);
      setStore("currentUser", data.data.user);
    } catch (error) {
      Cookies.remove("token");
      navigate("/auth/login", { replace: true });
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

  return (
    <AuthStateContext.Provider value={store}>
      <AuthDispatchContext.Provider
        value={{
          setCurrentUser,
          removeCurrentUser,
        }}
      >
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
