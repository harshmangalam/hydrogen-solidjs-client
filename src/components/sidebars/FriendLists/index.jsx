import { Link } from "solid-app-router";
import { For, Match, Switch } from "solid-js";
export default function FriendLists() {
  return (
    <ul className="flex flex-col space-y-2">
      <For each={friends}>
        {(friend) => (
          <li>
            <Link
              href={`/messenger/${friend.id}`}
              className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded-lg dark:text-gray-200"
            >
              <div className="w-8 h-8 rounded-full relative">
                <img
                  className="w-full h-full rounded-full"
                  src="https://avatars.githubusercontent.com/u/57381638?v=4"
                  alt={friend.name}
                />
                <div className="absolute bottom-0 -right-1">
                  <Switch>
                    <Match when={friend.active}>
                        <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                    </Match>
                    <Match when={friend.lastSeen}>
                      <div className="border-2 bg-green-200 dark:border-black text-green-600 font-semibold rounded-xl dark:bg-gray-800 w-6 grid place-items-center">
                          <p className="text-[10px]">{friend.lastSeen}</p>
                      </div>
                    </Match>
                  </Switch>
                </div>
              </div>

              <h6>{friend.name}</h6>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
}

const friends = [
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: true,
  },
  {
    id: 1,
    name: "Harsh Mangalam",
    mutualFriends: 30,
    lastSeen: "2 h",
    active: false,
  },

];
