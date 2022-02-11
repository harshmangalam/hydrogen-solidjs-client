import { NavLink, Outlet } from "solid-app-router";
import { For } from "solid-js";
export default function Friends() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="divide-y-2 dark:divide-gray-700 flex flex-col">
        <div className="px-2 py-4 w-full">
          <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <For each={tabs}>
              {(tab) => (
                <li>
                  <NavLink
                    href={tab.href}
                    end={tab.end}
                    className="font-medium  text-gray-600 py-2 px-2 hover:bg-gray-100 block w-full rounded-lg dark:text-gray-200 dark:hover:bg-gray-700"
                    activeClass="text-blue-500 dark:text-blue-500 bg-gray-100 dark:bg-gray-700"
                  >
                    {tab.name}
                  </NavLink>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const tabs = [
  {
    name: "All Friends",
    href: "",
    end: true,
  },
  {
    name: "Recently Added",
    href: "recently_added",
    end: false,
  },
  {
    name: "Birthdays",
    href: "birthdays",
    end: false,
  },
  {
    name: "Current City",
    href: "current_city",
    end: false,
  },
];
