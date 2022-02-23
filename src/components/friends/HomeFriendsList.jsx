import { Link } from "solid-app-router";
import { For, Match, Switch } from "solid-js";
import Avatar from "../ui/dataDisplay/Avatar";
export default function FriendLists(props) {
  return (
    <ul className="flex flex-col space-y-2">
      <For each={props.friends}>
        {(user) => (
          <li>
            <Link
              href={`/messenger/${user.id}`}
              className="flex items-center space-x-2 hover:bg-gray-300 dark:hover:bg-gray-800 py-2 px-4 rounded-lg dark:text-gray-200"
            >
              <Avatar src={user.profileImage} alt={user.firstName} />
              <div className="absolute bottom-0 -right-1">
                <Switch>
                  <Match when={user.status === "ACTIVE"}>
                    <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                  </Match>
                  <Match when={user.status === "IDLE"}>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full border-2 border-white dark:border-black"></div>
                  </Match>
                  <Match when={user.status === "LOGOUT"}>
                    <div className="border-2 bg-green-200 dark:border-black text-green-600 font-semibold rounded-xl dark:bg-gray-800 w-6 grid place-items-center">
                      <p className="text-[10px]">{user.lastSeen}</p>
                    </div>
                  </Match>
                </Switch>
              </div>

              <h6>{user.firstName}</h6>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
}
