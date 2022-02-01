import Logo from "../shared/Logo";
import Search from "./Search";
import Feature from "./Feature";
import Notification from "./Notification";
import Messenger from "./Messenger";
import Profile from "./Profile";

import { NavLink, useMatch } from "solid-app-router";

import { TiHome, TiGroup } from "solid-icons/ti";
import { FaSolidUserFriends } from "solid-icons/fa";

import { For } from "solid-js";
import DarkLightMode from "./DarkLightMode";
export default function Navbar() {
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
                <NavLink
                  href={tab.href}
                  className="text-3xl md:px-4 lg:px-10 xl:px-12 h-14 grid place-items-center"
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
    icon: () => <TiHome />,
    end: true,
  },
  {
    name: "Friends",
    href: "/friends",
    icon: () => <FaSolidUserFriends />,
    end: false,
  },
  {
    name: "Groups",
    href: "/groups",
    icon: () => <TiGroup />,
    end: false,
  },
];
