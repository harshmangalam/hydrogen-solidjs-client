import { Link } from "solid-app-router";
import { For } from "solid-js";
import UserStatusAvatar from "../ui/dataDisplay/UserStatusAvatar";
export default function FriendLists(props) {
  return (
    <ul className="flex flex-col space-y-2">
      <For each={props.friends}>
        {(user) => (
          <li>
            <Link
              aria-label="Messenger"
              href={`/messenger/${user.id}`}
              className="flex items-center space-x-2 hover:bg-gray-300 dark:hover:bg-gray-800 py-2 px-4 rounded-lg dark:text-gray-200"
            >
              <UserStatusAvatar
                profileImage={user.profileImage}
                firstName={user.firstName}
                status={user.status}
                lastSeen={user.lastSeen}
              />

              <h6>{user.firstName}</h6>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
}
