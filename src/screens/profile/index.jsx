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
          <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/p180x540/269889628_1645601845807047_6820765661481909406_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=wE1B8NptjAsAX9AiN08&_nc_ht=scontent.fpat3-2.fna&oh=00_AT8scaplgT6wIXeJnE8OPUFedYrJY7qFprnNcBBBRTEzNw&oe=62077CD7" className="absolute inset-0 w-full h-full aspect-video object-cover" />
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
