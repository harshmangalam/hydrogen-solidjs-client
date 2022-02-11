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
          <img src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/p640x640/273486721_138322552001823_3316399084013311694_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ZgMbwJx8DNsAX91hLKK&_nc_ht=scontent-ccu1-1.xx&oh=00_AT-YU-ufOLek9ZakPEuYdnt6Kk5SgbHFkTBNwJAIDk8xQQ&oe=620B0256" className="absolute inset-0 w-full h-full aspect-video object-cover" />
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
