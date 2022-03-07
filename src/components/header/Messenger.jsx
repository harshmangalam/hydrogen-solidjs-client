import { Link } from "solid-app-router";
import { SiMessenger } from "solid-icons/si";
import { createSignal, Show } from "solid-js";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
import DropdownMenu from "../ui/feedback/DropdownMenu";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs(relativeTime);
export default function Messenger() {
  const [open, setOpen] = createSignal(false);

  function toggle() {
    setOpen((o) => !o);
  }

  return (
    <>
      <button
        onClick={[toggle]}
        className="hidden md:block p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
      >
        <SiMessenger className="text-xl" />
      </button>
      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)} scrollY={true}>
          <div className="py-2 px-2">
            <div className="flex justify-between px-2">
              <h5 className="text-2xl font-semibold">
                Messenger
              </h5>
              <Link href="/messenger" className="text-blue-500 font-semibold">
                  See all
              </Link>
            </div>
            <ul className="flex flex-col space-y-2 my-4">
              <For each={Array(10)}>
                {(messenger) => (
                  <li
                    className="flex space-x-2  items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2"
                    onClick={() => setOpen(false)}
                  >
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
                      <h6 className="text-md">
                        <Link href={`/`} className="hover:underline">
                          Harsh Mangalam
                        </Link>
                      </h6>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Some message s sg y ygx qj su hwyg....{" "}
                      </p>
                      <span className="text-xs font-bold text-blue-500">
                        {dayjs(new Date()).fromNow()}
                      </span>
                    </div>
                  </li>
                )}
              </For>
            </ul>
            <div className="bg-gray-100 fixed bottom-0">
              <Link href="/messenger">Open in messenger</Link>
            </div>
          </div>
        </DropdownMenu>
      </Show>
    </>
  );
}
