import { NavLink } from "solid-app-router";
import { RiSystemSettings5Fill, RiLogoMessengerFill } from "solid-icons/ri";
import { FaSolidUserFriends } from "solid-icons/fa";
import { Si1password } from "solid-icons/si";
import { FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { BiCurrentLocation } from 'solid-icons/bi'

import { For } from "solid-js";
export default function SidebarMenus() {
  return (
    <ul className="h-[90%] px-2 py-4">
      <For each={menus}>
        {(menu) => (
          <li>
            <NavLink
              href={menu.href}
              className="flex items-center justify-between  py-2 px-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              end={menu.end}
              activeClass="bg-gray-100 dark:bg-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="flex place-items-center p-2 bg-purple-500 rounded-full text-white text-xl">
                  {menu.icon()}
                </div>
                <p>{menu.name}</p>
              </div>
            </NavLink>
          </li>
        )}
      </For>
    </ul>
  );
}

const menus = [
  {
    name: "General",
    icon: () => <RiSystemSettings5Fill />,
    href: "general",
    end: true,
  },
  {
    name: "Change Password",
    icon: () => <Si1password />,
    href: "change_password",
    end: false,
  },
  {
    name: "Your Informations",
    icon: () => <RiSystemSettings5Fill />,
    href: "information",
    end: false,
  },
  {
    name: "Posts Settings",
    icon: () => <BsFilePost />,
    href: "post",
    end: false,
  },
  {
    name: "Groups Settings",
    icon: () => <FaSolidUsers />,
    href: "group",
    end: false,
  },
  {
    name: "Friends Settings",
    icon: () => <FaSolidUserFriends />,
    href: "friend",
    end: false,
  },
  {
    name: "Messenger Settings",
    icon: () => <RiLogoMessengerFill />,
    href: "messenger",
    end: true,
  },
  {
    name: "Location",
    icon: () => <BiCurrentLocation />,
    href: "location",
    end: true,
  },
];
