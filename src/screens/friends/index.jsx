import MainLayout from "../../components/layouts/MainLayout";
import { FaSolidUserFriends } from "solid-icons/fa";
import { RiUserUserReceived2Fill, RiUserUserShared2Fill } from "solid-icons/ri";

import { Link, Outlet, useMatch } from "solid-app-router";
import { For } from "solid-js";
export default function Friends() {
  function isActive(href) {
    const match = useMatch(() => href);

    return Boolean(match());
  }
  return (
    <MainLayout>
      <ul className="px-2 sm:px-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 md:hidden">
        <For each={tabs}>
          {(tab) => (
            <li>
              <Link
                href={tab.href}
                className={`flex items-center justify-between  py-2 px-2 rounded-lg ${
                  isActive(tab.href) ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                    {tab.icon()}
                  </div>
                  <p>{tab.name}</p>
                </div>
              </Link>
            </li>
          )}
        </For>
      </ul>

      <div
        className={`h-screen fixed top-14 md:w-1/4 xl:w-1/5 hidden py-4 md:block left-0 bg-white shadow border-r px-2`}
      >
        <h2 class="font-semibold text-2xl">Friends</h2>

        <ul className="mt-4">
          <For each={tabs}>
            {(tab) => (
              <li>
                <Link
                  href={tab.href}
                  className={`flex items-center justify-between  py-2 px-2 rounded-lg ${
                    isActive(tab.href) ? "bg-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                      {tab.icon()}
                    </div>
                    <p>{tab.name}</p>
                  </div>
                </Link>
              </li>
            )}
          </For>
        </ul>
      </div>

      <div className="w-full md:w-3/4 xl:w-4/5 ml-auto">
        <Outlet />
      </div>
    </MainLayout>
  );
}

const tabs = [
  {
    name: "All Friends",
    href: "/friends",
    icon: () => <FaSolidUserFriends />,
  },

  {
    name: "Requests Received",
    href: "/friends/requests-received",
    icon: () => <RiUserUserReceived2Fill />,
  },
  {
    name: "Requests Sent",
    href: "/friends/requests-sent",
    icon: () => <RiUserUserShared2Fill />,
  },

  {
    name: "Suggestions",
    href: "/friends/suggestions",
    icon: () => <FaSolidUserFriends />,
  },
];
