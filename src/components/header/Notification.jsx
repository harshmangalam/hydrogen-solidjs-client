import { IoNotifications } from "solid-icons/io";
import { createSignal, For, Show } from "solid-js";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
import DropdownMenu from "../ui/feedback/DropdownMenu";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "solid-app-router";
import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import {
  useNotificationDispatch,
  useNotificationState,
} from "../../context/notifications";

dayjs.extend(relativeTime);
export default function Notification() {
  const [open, setOpen] = createSignal(false);
  const notificationState = useNotificationState();
  const { removeAllNotifications } = useNotificationDispatch();

  function toggle() {
    setOpen((o) => !o);
  }
  return (
    <>
      <button
        onClick={[toggle]}
        className="p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white relative"
      >
        <IoNotifications className="text-xl" />

        <Show when={notificationState?.count}>
          <div className="absolute -top-1 bg-rose-500 place-items-center grid w-5 h-5 rounded-full right-0 text-white text-xs">
            {notificationState.count}
          </div>
        </Show>
      </button>

      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)}>
          <div className="px-2 py-2">
            <div className="flex justify-between px-2">
              <h5 className="text-2xl font-semibold">Notifications</h5>
            </div>
            <Show
              when={notificationState?.count}
              fallback={
                <div className="my-4">
                  <p className="px-2 text-gray-500 dark:text-gray-400 text-lg">
                    No Notification
                  </p>
                </div>
              }
            >
              <div className="flex space-x-2 mt-2">
                <button
                  className="rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white py-1 px-4 shadow hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={[removeAllNotifications]}
                >
                  Clear
                </button>
                <Link
                  className="rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white py-1 px-4 shadow hover:bg-blue-200 dark:hover:bg-blue-500"
                  onClick={() => setOpen(false)}
                  href="/notifications"
                >
                  See all
                </Link>
              </div>

              <ul className="flex flex-col space-y-2 my-4 overflow-y-scroll max-h-[70vh] modal-scrollbar">
                <For each={notificationState?.notifications}>
                  {(notif) => (
                    <li
                      className="flex space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2"
                      onClick={() => setOpen(false)}
                    >
                      <div className="relative  flex-none">
                        <UserAvatar
                          src={notif.fromUser.profileImage}
                          className="w-14 h-14 rounded-full flex-none"
                          alt={notif.fromUser.firstName}
                        />
                        <div className="absolute bottom-0 right-0 w-6 h-6 grid place-items-center rounded-full bg-purple-500 text-white">
                          <Show when={notif.type === "FRIEND"}>
                            <FaSolidUserFriends />
                          </Show>
                          <Show when={notif.type === "POST"}>
                            <BsFilePost />
                          </Show>
                          <Show when={notif.type === "GROUP"}>
                            <FaSolidUsers />
                          </Show>
                        </div>
                      </div>
                      <div className="flex flex-col items-start space-y-1">
                        <p>
                          <Link
                            href={`/${notif.fromUser.id}`}
                            className="hover:underline"
                          >
                            <span className="font-bold mr-1">
                              {notif.fromUser.firstName}
                            </span>
                          </Link>
                          <span>{notif.content}</span>
                        </p>

                        <span className="text-xs font-bold text-blue-500">
                          {dayjs(notif.createdAt).fromNow()}
                        </span>
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </div>
        </DropdownMenu>
      </Show>
    </>
  );
}
