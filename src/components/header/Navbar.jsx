import Logo from "../shared/Logo";
import Search from "./Search";
import Account from "./Account";
import Menu from "./Menu";
import Notification from "./Notification";
import Messenger from "./Messenger";
import Profile from "./Profile";

import { Link, useMatch } from "solid-app-router";

import { TiHome, TiGroup } from "solid-icons/ti";
import { FaSolidUserFriends } from "solid-icons/fa";

import { For, Show } from "solid-js";
import DarkLightMode from "./DarkLightMode";
export default function Navbar() {
  function isActive(href) {
    const match = useMatch(() => href);
    return Boolean(match());
  }

  return (
    <header className="bg-white shadow border-b sticky top-0 z-50">
      <nav className="px-2 py-2 md:py-0">
        <div className="flex items-center justify-between">
          {/* left section  */}
          <div className="flex items-center space-x-2">
            <Logo />
            <Search />
          </div>

          {/* middle section  */}

          <div className="md:flex items-center space-x-2 hidden">
            <For each={mainTabs}>
              {(tab) => (
                <a
                  href={tab.href}
                  classList={{
                    "rounded-none hover:bg-transparent border-b-4 border-blue-500 text-blue-500":
                      isActive(tab.href),
                  }}
                  className={`text-3xl md:px-4 lg:px-10 xl:px-10 py-3 hover:bg-gray-100 rounded-lg `}
                >
                  {tab.icon}
                </a>
              )}
            </For>
          </div>

          {/* right section  */}
          <div className="flex items-center space-x-2">
            <Profile />
            <Menu />
            <Messenger />
            <Notification />
            <DarkLightMode />
          </div>
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
