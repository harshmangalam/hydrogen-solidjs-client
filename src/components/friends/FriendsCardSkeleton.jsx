import { For } from "solid-js";
import FriendInterface from "./FriendInterface";

export default function FriendsCardSkeleton() {
  return (
    <FriendInterface>
      <For each={Array(4)}>
        {(i) => (
          <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white h-96 flex flex-col justify-between">
            <div className="flex flex-col space-y-4 h-full">
              <div className="bg-gray-200 dark:bg-gray-700 h-3/4 animate-pulse" />
              <div className="bg-gray-200 dark:bg-gray-700 w-2/5 animate-pulse h-3 mx-2" />
              <div className="bg-gray-200 dark:bg-gray-700 w-2/4 animate-pulse h-2 mx-2" />
            </div>
            <div className="px-2 py-4">
              <div className="bg-gray-200 rounded-md dark:bg-gray-700 w-full animate-pulse h-8" />
            </div>
          </article>
        )}
      </For>
    </FriendInterface>
  );
}
