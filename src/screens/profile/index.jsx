import { NavLink, Outlet, useParams } from "solid-app-router";
import { For } from "solid-js";
import AddCoverPhoto from "../../components/profile/AddCoverPhoto";
import AddProfilePhoto from "../../components/profile/AddProfilePhoto";
import ProfileInfo from "../../components/profile/ProfileInfo";

export default function Profile() {
  const { userId } = useParams();
  return (
    <div>
      <div className="h-[80vh] bg-white shadow dark:bg-gray-800 flex flex-col justify-between">
        <div className="bg-gray-100 dark:bg-gray-900 h-3/6 md:h-4/6 rounded-b-lg w-full max-w-4xl mx-auto relative">
          <AddProfilePhoto />
          <ProfileInfo />
          <AddCoverPhoto />
        </div>

        <div className="max-w-4xl w-full mx-auto py-3">
          <hr className="dark:border-gray-700 border-gray-300" />
          <ul className="flex items-center space-x-4 mt-4">
            <For each={tabs}>
              {(tab) => (
                <li>
                  <NavLink
                    href={`/${userId}/${tab.href}`}
                    className="font-medium  hover:bg-gray-100 py-3 px-4 text-gray-600 rounded dark:text-gray-300 dark:hover:bg-gray-700"
                    activeClass="border-b-4 border-blue-500 text-blue-500 hover:bg-transparent rounded-none dark:hover:bg-transparent"
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
    name: "Posts",
    href: "",
    end: true,
  },
  {
    name: "About",
    href: "about",
    end: false,
  },
  {
    name: "Friends",
    href: "friends",
    end: false,
  },
];
