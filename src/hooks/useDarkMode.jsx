import { createSignal, onMount } from "solid-js";
import Cookies from "js-cookie";


export default function useDarkMode() {
  const [darkMode, setDarkMode] = createSignal(false);

  onMount(() => {
    const darkMode = Cookies.get("darkMode")
      ? JSON.parse(Cookies.get("darkMode"))
      : null;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  });

  function toggleDarkMode() {
    if (darkMode()) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
    Cookies.set("darkMode", JSON.stringify(darkMode()));
  }
  return {
    darkMode,
    toggleDarkMode,
  };
}
