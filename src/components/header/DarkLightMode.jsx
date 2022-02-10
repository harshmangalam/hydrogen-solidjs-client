import { BiSolidSun, BiSolidMoon } from "solid-icons/bi";
import { Show } from "solid-js";
import useDarkMode from "../../hooks/useDarkMode";

export default function DarkLightMode() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
      onClick={[toggleDarkMode]}
    >
      <Show when={darkMode()} fallback={<BiSolidSun className="text-xl" />}>
        <BiSolidMoon className="text-xl" />
      </Show>
    </button>
  );
}
