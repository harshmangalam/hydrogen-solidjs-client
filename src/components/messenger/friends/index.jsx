import { getRelativeTime } from "../../../utils/dateTime";
import { For, Show } from "solid-js";
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
        <For each={messengerState?.friends}>
          {(friend) => (
            <li>
              <Link
                href={`/messenger/${friend.id}`}
                className="flex space-x-2  rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2"
              >
                <UserStatusAvatar
                  profileImage={friend?.profileImage}
                  firstName={friend?.firstName}
                  status={friend?.status}
                  lastSeen={friend?.lastSeen}
                  divClass="flex-none"
                  imgClass="w-16 h-16"
                  statusClass="top-0"
                />

                <div className="flex flex-col items-start space-y-0 w-full">
                  <h6 className="text-lg">{friend.firstName}</h6>
                  <Show
                    when={
                      friend.messagesReceived?.length ||
                      friend.messagesSent?.length
                    }
                  >
                    <div className="flex items-center justify-between w-full">
                      <p className="text-gray-600 dark:text-gray-400">
                        {friend.messagesReceived[0]?.content.slice(0, 30) ||
                          friend.messagesSent[0]?.content.slice(0, 30)}
                        <Show
                          when={
                            friend.messagesSent[0]?.content.length >= 30 ||
                            friend.messagesReceived[0]?.content.length >= 30
                          }
                        >
                          <span> ...</span>
                        </Show>
                      </p>
                      <p className="flex-none text-xs">
                        {getRelativeTime(
                          friend.messagesReceived[0]?.createdAt
                        ) || getRelativeTime(friend.messagesSent[0]?.createdAt)}
                      </p>
                    </div>
                  </Show>
                </div>
              </Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
