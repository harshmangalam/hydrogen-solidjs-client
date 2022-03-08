import { Link } from "solid-app-router";
import { TiHome } from "solid-icons/ti";
import DarkLightMode from "../../shared/DarkLightMode";

export default function MessengerHeader() {
  return (
    <header className="flex items-center justify-between h-[10%] px-4 dark:bg-gray-800">
      <h5 className="text-2xl font-semibold">Messenger</h5>
      <div className="flex space-x-2">
        <Link href="/">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white ">
            <TiHome className="text-xl" />
          </button>
        </Link>
        <DarkLightMode />
      </div>
    </header>
  );
}
