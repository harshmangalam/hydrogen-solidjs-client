import Logo from "../shared/Logo";
import Search from "./Search";
import Feature from "./Feature";
import Notification from "./Notification";
import Messenger from "./Messenger";
import Profile from "./Profile";

import { Link, useMatch } from "solid-app-router";

import { TiHome, TiGroup } from "solid-icons/ti";
import { FaSolidUserFriends } from "solid-icons/fa";

import { For } from "solid-js";
import DarkLightMode from "./DarkLightMode";
export default function Navbar() {
  function isActive(href) {
    const match = useMatch(() => href);
    return Boolean(match());
  }

  return (
    <header className="bg-white shadow border-b fixed w-full top-0 z-50">
      <nav className="px-2 md:px-4 h-14 flex items-center justify-between">
        {/* left section  */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <Logo />
          <Search />
        </div>

        {/* middle section  */}

        <ul className="hidden md:flex items-center space-x-2">
          <For each={mainTabs}>
            {(tab) => (
              <li>
                <Link
                  href={tab.href}
                  className={`text-3xl md:px-4 lg:px-10 xl:px-12 h-14 grid place-items-center ${
                    isActive(tab.href)
                      ? "rounded-none hover:bg-transparent border-b-4 border-blue-500 text-blue-500"
                      : "hover:bg-gray-100 rounded-lg border-b-4 border-transparent"
                  } `}
                >
                  {tab.icon}
                </Link>
              </li>
            )}
          </For>
        </ul>

        {/* right section  */}
        <div className="flex items-center space-x-2">
          <Profile />
          <Feature />
          <Messenger />
          <Notification />
          <DarkLightMode />
        </div>
      </nav>
    </header>
  );
}

const mainTabs = [
  {
    name: "Home",
    href: "/",
    icon: <TiHome />,
  },
  {
    name: "Friends",
    href: "/friends",
    icon: <FaSolidUserFriends />,
  },
  {
    name: "Groups",
    href: "/groups",
    icon: <TiGroup />,
  },
];
