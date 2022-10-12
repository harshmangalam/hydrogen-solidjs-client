import { NavLink, Outlet } from "solid-app-router";
import { For } from "solid-js";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="divide-y-2 dark:divide-gray-700 flex flex-col md:flex-row md:divide-x-2 md:divide-y-0">
        <div className="px-2 py-4 w-full md:w-1/3">
          <ul className="flex flex-col space-y-2">
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

        <div className="p-4 w-full md:w-2/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const tabs = [
  {
    name: "Overview",
    href: "",
    end: true,
  },
  {
    name: "Place",
    href: "place",
    end: false,
  },
  {
    name: "Contact",
    href: "contact",
    end: false,
  },

];
