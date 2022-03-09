import { Link } from "solid-app-router";
import { VscClose } from "solid-icons/vsc";
import { Show } from "solid-js";
import { useMessengerState } from "../../../context/messenger";
import UserStatusAvatar from "../../ui/dataDisplay/UserStatusAvatar";
import { getRelativeTime } from "../../../utils/dateTime";
export default function ChatHeader() {
  const messengerState = useMessengerState();
  return (
    <header className="flex items-center justify-between h-[10%]  px-4 bg-white dark:bg-gray-800">
      <div className="flex space-x-2 items-center">
        <UserStatusAvatar
          profileImage={messengerState.friend?.profileImage}
          firstName={messengerState.friend?.firstName}
          status={messengerState.friend?.status}
          lastSeen={messengerState.friend?.lastSeen}
        />
        <div className="flex flex-col space-y-0">
          <h6 className="text-lg font-semibold">
            {messengerState.friend?.firstName}
          </h6>
          <Show
            when={messengerState.friend?.status !== "ACTIVE"}
            fallback={
              <p className="text-sm"> {messengerState.friend?.status}</p>
            }
          >
            <p className="text-sm">
              last seen {getRelativeTime(messengerState.friend?.lastSeen)}
            </p>
          </Show>
        </div>
      </div>
      <div>
        <Link href="/messenger">
          <button
            title="Close Chat"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
          >
            <VscClose className="text-xl" />
          </button>
        </Link>
      </div>
    </header>
  );
}
