import { IoNotifications } from "solid-icons/io";
import { createSignal, For, Show } from "solid-js";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
import DropdownMenu from "../ui/feedback/DropdownMenu";
export default function Notification() {
  const [open, setOpen] = createSignal(false);

  function toggle() {
    setOpen((o) => !o);
  }
  return (
    <>
      <button
        onClick={[toggle]}
        className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
      >
        <IoNotifications className="text-xl" />
      </button>

      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)} title="Notifications">
          <ul className="flex flex-col space-y-2 my-4">
            <For each={[...Array(10).keys()]}>
              {(notif) => (
                <li className="flex space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2">
                  <UserAvatar
                    src="https://images.unsplash.com/photo-1642442929134-7acaa8796c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Harsh mangalam"
                    className="w-12 h-12 rounded-full flex-none"
                  />
                  <div className="flex flex-col">
                    <p>
                      Sajan kumar sent you a friend request. Acept or reject
                    </p>
                    <span className="text-xs font-bold text-blue-500">
                      3 days ago
                    </span>
                  </div>
                </li>
              )}
            </For>
          </ul>
        </DropdownMenu>
      </Show>
    </>
  );
}
