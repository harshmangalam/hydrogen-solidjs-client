import UserImage from "../ui/dataDisplay/UserImage";
import { For, Show } from "solid-js";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
export default function FriendCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <UserImage
        src={props.profileImage}
        className="w-full h-60 rounded-t-lg"
      />

      <div className="px-2 py-4 flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <h6 className="font-medium text-md">
            {props.firstName + " " + props.lastName}
          </h6>

          <div className="flex items-center space-x-2">
            <Show when={props._count.myFriends}>
              <ul className="flex items-center -space-x-2">
                <For each={props.myFriends}>
                  {(friend) => (
                    <li>
                      <UserAvatar
                        src={friend.profileImage}
                        className="w-6 h-6 rounded-full border-2 border-blue-500"
                      />
                    </li>
                  )}
                </For>
              </ul>
            </Show>
            <h6>{props._count.myFriends} <span className="text-sm">friends</span></h6>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </article>
  );
}
