import Logo from "../shared/Logo";
import Search from "./Search";
import Create from "./Create";
import Notification from "./Notification";
import Messenger from "./Messenger";
import Profile from "./Profile";
import { ImSpinner9 } from "solid-icons/im";
import { NavLink, useIsRouting } from "solid-app-router";

import { TiHome } from "solid-icons/ti";
import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";

import { For, Show } from "solid-js";
import DarkLightMode from "../shared/DarkLightMode";
export default function Navbar() {
  const isRouting = useIsRouting();
  return (
    <header className="bg-white shadow fixed w-full top-0 z-20 dark:bg-gray-800  text-white">
      <nav className="px-2 md:px-4 h-14 flex items-center justify-between relative">
        {/* left section  */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <Show
            when={!isRouting()}
            fallback={<ImSpinner9 className="animate-spin w-10 h-10 text-blue-500" />}
          >
            <Logo />
          </Show>
          <Search />
        </div>

        {/* middle section  */}

        <ul className="hidden md:flex items-center space-x-2">
          <For each={mainTabs}>
            {(tab) => (
              <li>
                <NavLink
                  href={tab.href}
                  activeClass="border-b-4 bg-gray-100 dark:bg-gray-700 border-blue-500 text-blue-500 dark:text-blue-500"
                  className="text-3xl px-4  lg:px-8 xl:px-10 h-14 grid place-items-center hover:bg-gray-100 dark:hover:bg-gray-700  text-gray-600 dark:text-white"
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
          <DarkLightMode />
          <Profile />
        </div>
      </nav>
    </header>
  );
}

const mainTabs = [
  {
    name: "Home",
    href: "",
    icon: () => <TiHome aria-label="Home" />,
    end: true,
  },
  {
    name: "Friends",
    href: "friends",
    icon: () => <FaSolidUserFriends aria-label="Friends" />,
    end: false,
  },
  {
    name: "Posts",
    href: "posts",
    icon: () => <BsFilePost aria-label="Posts" />,
    end: false,
  },

  {
    name: "Groups",
    href: "groups",
    icon: () => <FaSolidUsers aria-label="Groups" />,
    end: false,
  },
];
