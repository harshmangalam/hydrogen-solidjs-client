import { SiMessenger } from "solid-icons/si";
export default function Messenger() {
  return (
    <button className="hidden md:block p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white ">
      <SiMessenger className="text-xl" />
    </button>
  );
}
