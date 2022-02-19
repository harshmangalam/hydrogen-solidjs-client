import Logo from "../shared/Logo";
import Search from "./Search";
import Create from "./Create";
import Notification from "./Notification";
import Messenger from "./Messenger";
import Profile from "./Profile";

import { NavLink } from "solid-app-router";

import { TiHome } from "solid-icons/ti";
import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";

import { For } from "solid-js";
import DarkLightMode from "../shared/DarkLightMode";
export default function Navbar() {
  return (
    <header className="bg-white shadow border-b fixed w-full top-0 z-10 dark:bg-gray-800 dark:border-gray-700 text-white">
      <nav className="px-2 md:px-4 h-14 flex items-center justify-between">
        {/* left section  */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <Logo />
          <Search />
        </div>

        {/* middle section  */}

        <ul className="hidden lg:flex items-center space-x-2">
          <For each={mainTabs}>
            {(tab) => (
              <li>
                <NavLink
                  href={tab.href}
                  activeClass="border-b-4 border-blue-500 hover:bg-transparent text-blue-500 dark:text-blue-500  dark:hover:bg-transparent"
                  className="text-3xl  lg:px-8 xl:px-10 h-14 grid place-items-center hover:bg-gray-100 dark:hover:bg-gray-700  text-gray-600 dark:text-white"
                  end={tab.end}
                >
                  {tab.icon()}
                </NavLink>
              </li>
            )}
          </For>
        </ul>

        {/* right section  */}
        <div className="flex items-center space-x-2">
          <Create />
          <Notification />
          <Messenger />
          <Profile />
          <DarkLightMode />
        </div>
      </nav>
    </header>
  );
}

const mainTabs = [
  {
    name: "Home",
    href: "",
    icon: () => <TiHome />,
    end: true,
  },
  {
    name: "Friends",
    href: "friends",
    icon: () => <FaSolidUserFriends />,
    end: false,
  },
  {
    name: "Posts",
    href: "posts",
    icon: () => <BsFilePost />,
    end: false,
  },

  {
    name: "Groups",
    href: "groups",
    icon: () => <FaSolidUsers />,
    end: false,
  },
];
