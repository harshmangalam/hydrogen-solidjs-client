import { For, Show } from "solid-js";
import profileImage from "../../assets/profile.svg";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
export default function ProfileInfo(props) {
  return (
    <div className="absolute w-full flex flex-col items-center md:w-auto md:left-1/4 -bottom-56 text-center md:-bottom-28 md:text-left md:items-start">
      <h3 className="text-3xl dark:text-white font-medium text-center w-full">
        {props.firstName + " " + props.lastName}
      </h3>

      <div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          {props.friendsCount} Friends
        </p>
      </div>

      <div class="-space-x-3 flex items-center">
        
        <For each={props.friends}>
          {(friend) => (
            <img
              class="relative  inline object-cover w-10 h-10 border-2 border-purple-500 rounded-full"
              src={friend.profileImage}
              alt={friend.firstName}
              title={friend.firstName}
            />
          )}
        </For>
        <Show when={props.friendsCount - props.friends.length > 0}>
          <div className="bg-gray-300 dark:bg-gray-900 w-10 h-10 rounded-full grid place-items-center font-bold">
            {props.friendsCount - props.friends.length}+
          </div>
        </Show>
      </div>
    </div>
  );
}
