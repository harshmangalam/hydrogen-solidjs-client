import { For, Show } from "solid-js";
import profileImage from "../../assets/profile.svg";
export default function ProfileInfo(props) {
  return (
    <div className="absolute w-full flex flex-col items-center md:w-auto md:left-1/4 -bottom-56 text-center md:-bottom-28 md:text-left md:items-start">
      <h3 className="text-3xl dark:text-white font-medium text-center w-full">
        {props.name}
      </h3>

      <div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          {props.friendsCount} Friends
        </p>
      </div>

      <div class="-space-x-3">
        <For each={props.friends}>
          {(friend) => (
            <Show
              
              when={friend.ProfileImage}
              fallback={
                <img
                  class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
                  src={profileImage}
                  alt={friend.firstName}
                  title={friend.firstName}
                />
              }
            >
              <img
                class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
                src={friend.ProfileImage}
                alt={friend.firstName}
                title={friend.firstName}

              />
            </Show>
          )}
        </For>
      </div>
    </div>
  );
}
