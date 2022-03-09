import { SiMessenger } from "solid-icons/si";
import { For } from "solid-js";
import MessengerHeader from "./Header";
import { Link } from "solid-app-router";
import { useMessengerState } from "../../../context/messenger";
import UserStatusAvatar from "../../ui/dataDisplay/UserStatusAvatar";
export default function FriendsInterface() {
  const messengerState = useMessengerState();

  return (
    <div className="w-full md:w-2/5 xl:w-1/4 h-screen divide-y-2 dark:divide-gray-600">
      <MessengerHeader />
      <ul className="flex flex-col py-4 h-[90%] overflow-y-hidden hover:overflow-y-auto chat-scrollbar px-2">
        <For each={messengerState.friends}>
          {(friend) => (
            <li>
              <Link
                href={`/messenger/${friend.id}`}
                className="flex space-x-2  items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2"
              >
                <UserStatusAvatar
                  profileImage={friend?.profileImage}
                  firstName={friend?.firstName}
                  status={friend?.status}
                  lastSeen={friend?.lastSeen}
                />

                <div className="flex flex-col items-start space-y-0">
                  <h6 className="text-lg">{friend.firstName}</h6>
                </div>
              </Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
