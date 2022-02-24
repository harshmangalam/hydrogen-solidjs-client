import { NavLink, Outlet, useParams } from "solid-app-router";
import { For } from "solid-js";

export default function GroupDetails() {
  const { groupId } = useParams();
  return (
    <div>
      <div className="h-[80vh] bg-white shadow dark:bg-gray-800 flex flex-col justify-between">
        <div className="bg-gray-100 dark:bg-gray-900 h-3/6 md:h-4/6 rounded-b-lg w-full max-w-4xl mx-auto relative">
          <img
            src="https://images.unsplash.com/photo-1640622302588-aefc0da2b58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            className="absolute inset-0 w-full h-full aspect-video object-cover"
          />
        </div>

        <div className="max-w-4xl w-full mx-auto py-3">
          <hr className="dark:border-gray-700 border-gray-300" />
          <ul className="flex items-center space-x-4 mt-4">
            <For each={tabs}>
              {(tab) => (
                <li>
                  <NavLink
                    href={tab.href}
                    className="font-medium  hover:bg-gray-100 py-3 px-4 text-gray-600 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
                    activeClass="border-b-4 border-blue-500 text-blue-500 hover:bg-transparent dark:hover:bg-transparent rounded-none"
                    end={tab.end}
                  >
                    {tab.name}
                  </NavLink>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div className="max-w-4xl w-full mx-auto py-4 dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}

const tabs = [
  {
    name: "About",
    href: "",
    end: true,
  },
  {
    name: "Posts",
    href: "posts",
    end: false,
  },
  {
    name: "Members",
    href: "members",
    end: false,
  },
];
