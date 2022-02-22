import { For } from "solid-js";

export default function HomeFriendsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="py-4">
        <ul className="flex flex-col space-y-4">
          <For each={Array(10)}>
            {(_) => (
              <li className="flex space-x-2 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="w-32 h-3 bg-gray-300 dark:bg-gray-600"></div>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}
