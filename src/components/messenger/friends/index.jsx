import { SiMessenger } from "solid-icons/si";
import { For } from "solid-js";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import DarkLightMode from "../../shared/DarkLightMode";
import { TiHome } from "solid-icons/ti";
import { Link } from "solid-app-router";

export default function FriendsInterface() {
  return (
    <div className="w-full md:w-2/5 xl:w-1/4 h-screen divide-y-2 dark:divide-gray-600">
      {/* right header  */}
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

      <ul className="flex flex-col py-4 h-[90%] overflow-y-hidden hover:overflow-y-auto chat-scrollbar px-2">
        <For each={Array(10)}>
          {(messenger) => (
            <li className="flex space-x-2  items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2">
              <div className="relative w-16 h-16 rounded-full flex-none">
                <UserAvatar
                  src={
                    "https://images.unsplash.com/photo-1646564517732-6aa88a133dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  }
                  className="w-full h-full rounded-full"
                  alt="Harsh Mangalam"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 grid place-items-center rounded-full bg-blue-500 text-white">
                  <SiMessenger className="text-lg" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-0">
                <h6 className="text-md">Harsh Mangalam</h6>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
