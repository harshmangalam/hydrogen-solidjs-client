import { For } from "solid-js";

export default function GroupCardSkeleton() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6">
      <For each={Array(3)}>
        {(_) => (
          <li>
            <article className="animate-pulse bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white h-96">
              <div className="w-full h-3/4 bg-gray-200 dark:bg-gray-700" />

              <div className="py-4 px-4 flex flex-col space-y-2">
                <div className="bg-gray-200 dark:bg-gray-700 w-2/4 h-4 rounded" />
                <div className="bg-gray-200 dark:bg-gray-700 w-1/4 h-2 rounded" />
              </div>

              <div className="py-4 px-4 dark"></div>
            </article>
          </li>
        )}
      </For>
    </ul>
  );
}
