import { BiSolidSun, BiSolidMoon } from "solid-icons/bi";
import { useThemeState, useThemeDispatch } from "../../context/theme";

export default function DarkLightMode() {
  const { darkMode } = useThemeState();
  const { toggleDarkMode } = useThemeDispatch();

  return (
    <button
      className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
      onClick={[toggleDarkMode]}
    >
      {darkMode ? (
        <BiSolidMoon className="text-xl" />
      ) : (
        <BiSolidSun className="text-xl" />
      )}
    </button>
  );
}
