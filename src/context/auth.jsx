import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
  currentUser: null,
};
export default function AuthProvider(props) {
  const [store, setStore] = createStore(initialState);

  const setCurrentUser = (user) => {
    setStore("currentUser", user);
  };
  const removeCurrentUser = () => {
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
