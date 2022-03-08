import { SiMessenger } from "solid-icons/si";
import { createResource, For, Match, Switch } from "solid-js";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import MessengerHeader from "./Header";
import { fetchMessenger } from "../../../services/messenger.service";
import { Link } from "solid-app-router";
export default function FriendsInterface() {
  const [resource] = createResource(fetchMessenger);
  return (
    <div className="w-full md:w-2/5 xl:w-1/4 h-screen divide-y-2 dark:divide-gray-600">
      <MessengerHeader />

      <Switch>
        <Match when={resource()}>
          <ul className="flex flex-col py-4 h-[90%] overflow-y-hidden hover:overflow-y-auto chat-scrollbar px-2">
            <For each={resource().data.data.messengers}>
              {(friend) => (
                <li>
                  <Link
                    href={`/messenger/${friend.id}`}
                    className="flex space-x-2  items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2"
                  >
                    <div className="relative w-12 h-12 rounded-full flex-none">
                      <UserAvatar
                        src={friend.profileImage}
                        className="w-full h-full rounded-full"
                        alt="Harsh Mangalam"
                      />
                      <div className="absolute bottom-0 right-0 w-6 h-6 grid place-items-center rounded-full bg-blue-500 text-white">
                        <SiMessenger className="text-lg" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start space-y-0">
                      <h6 className="text-lg">{friend.firstName}</h6>
                    </div>
                  </Link>
                </li>
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </div>
  );
}
