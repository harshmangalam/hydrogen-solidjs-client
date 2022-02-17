import { createContext, onMount, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import shortId from "shortid";
import Cookies from "js-cookie";

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

const initialState = {
  snackbars: [],
};
export default function UIProvider(props) {
  const [store, setStore] = createStore(initialState);

  function addSnackbar(msg) {
    setStore(
      "snackbars",
      produce((snackbars) => {
        const snackbar = {
          id: shortId(),
          msg,
        };
        snackbars.push(snackbar);
      })
    );
  }

  function removeSnackbar(id) {
    setStore(
      "snackbars",
      produce((snackbars) => {
        const index = snackbars.findIndex((s) => s.id === id);
        snackbars.splice(index, 1);
      })
    );
  }

  function emptySnackbar() {
    setStore("snackbars", []);
  }

  return (
    <ThemeStateContext.Provider value={store}>
      <ThemeDispatchContext.Provider
        value={{
          addSnackbar,
          removeSnackbar,
          emptySnackbar,
        }}
      >
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
