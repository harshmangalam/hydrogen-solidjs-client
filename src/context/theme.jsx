import { createContext, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Cookies from "js-cookie";

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

const initialState = {
  darkMode: true,
};
export default function ThemeProvider(props) {
  const [store, setStore] = createStore(initialState);

  onMount(() => {
    const darkMode = Cookies.get("darkMode")
      ? JSON.parse(Cookies.get("darkMode"))
      : null;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      setStore("darkMode", true);
    } else {
      document.documentElement.classList.remove("dark");
      setStore("darkMode", false);
    }
  });

  function toggleDarkMode() {
    setStore("darkMode", (darkMode) => !darkMode);
    if (store.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    Cookies.set("darkMode", JSON.stringify(store.darkMode));
  }

  return (
    <ThemeStateContext.Provider value={store}>
      <ThemeDispatchContext.Provider value={{ toggleDarkMode }}>
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
