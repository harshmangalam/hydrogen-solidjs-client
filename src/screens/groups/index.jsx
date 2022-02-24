import { FaSolidPlus, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { NavLink, Outlet } from "solid-app-router";
import { For } from "solid-js";
import { RiMapCompass3Fill } from "solid-icons/ri";
import { IoNotifications } from "solid-icons/io";
export default function GroupsLayout() {
  return (
    <div>
      <ul className="px-2 sm:px-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 md:hidden">
        <For each={tabs}>
          {(tab) => (
            <li>
              <NavLink
                href={tab.href}
                className="flex items-center justify-between  py-2 px-2 rounded-lg dark:text-white"
                end={tab.end}
                activeClass="bg-blue-200 dark:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                    {tab.icon()}
                  </div>
                  <p>{tab.name}</p>
                </div>
              </NavLink>
            </li>
          )}
        </For>
      </ul>

      <div
        className={`h-screen fixed top-14 md:w-1/4 xl:w-1/5 hidden py-4 md:block left-0 bg-white dark:bg-gray-800 shadow border-r dark:border-gray-700 dark:text-white px-2`}
      >
        <h2 class="font-semibold text-2xl">Groups</h2>

        <ul className="mt-4">
          <For each={tabs}>
            {(tab) => (
              <li>
                <NavLink
                  href={tab.href}
                  className="flex items-center justify-between  py-2 px-2 rounded-lg"
                  end={tab.end}
                  activeClass="bg-blue-100 dark:bg-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                      {tab.icon()}
                    </div>
                    <p>{tab.name}</p>
                  </div>
                </NavLink>
              </li>
            )}
          </For>
        </ul>
      </div>

      <div className="w-full md:w-3/4 xl:w-4/5 ml-auto dark:text-white pt-4 md:px-8">
        <Outlet />
      </div>
    </div>
  );
}

const tabs = [
  {
    name: "Groups Feed",
    href: "",
    icon: () => <BsFilePost />,
    end: true,
  },
  {
    name: "My Groups",
    href: "my",
    icon: () => <FaSolidUsers />,
    end: false,
  },

  {
    name: "Groups Invited",
    href: "invites",
    icon: () => <FaSolidUsers />,
    end: false,
  },

  {
    name: "Groups Joined",
    href: "joined",
    icon: () => <FaSolidUsers />,
    end: false,
  },

  {
    name: "Suggestions",
    href: "suggestions",
    icon: () => <RiMapCompass3Fill />,
    end: false,
  },
  {
    name: "Notifications",
    href: "notifications",
    icon: () => <IoNotifications />,
    end: false,
  },
  {
    name: "Create Group Post",
    href: "post_create",
    icon: () => <FaSolidPlus />,
    end: false,
  },
  {
    name: "Create Group",
    href: "create",
    icon: () => <FaSolidPlus />,
    end: false,
  },
];
