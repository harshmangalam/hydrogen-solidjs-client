import { For } from "solid-js";
import MessengerHeader from "./Header";
import { useMessengerState } from "../../../context/messenger";
import FriendItem from "./FriendItem";
export default function FriendsInterface() {
  const messengerState = useMessengerState();

  return (
    <div className="w-full md:w-2/5 xl:w-1/4 h-screen divide-y-2 dark:divide-gray-600">
      <MessengerHeader />
      <ul className="flex flex-col gap-2 py-4 h-[90%] overflow-y-hidden hover:overflow-y-auto chat-scrollbar px-2">
        <For each={messengerState?.friends}>
          {(friend) => (
            <li>
              <FriendItem
                {...friend}
                activeFriend={messengerState?.activeChat?.friend}
              />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
