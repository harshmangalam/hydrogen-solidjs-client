import { NavLink } from "solid-app-router";
import { BsFilePost } from "solid-icons/bs";
import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { TiHome } from "solid-icons/ti";
import { For } from "solid-js";

export default function BottomSheet() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-20 bg-gray-200 dark:bg-gray-800 py-2 px-4 h-16 flex flex-col justify-center">
      <ul className="grid grid-flow-col gap-2 text-2xl h-full">
        <For each={tabs}>
          {(tab) => (
            <li>
              <NavLink
                href={tab.href}
                activeClass="bg-blue-500 text-white"
                className="rounded-xl text-2xl h-full grid place-items-center hover:bg-blue-500 hover:text-white"
                end={tab.end}
              >
                {tab.icon()}
              </NavLink>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}

const tabs = [
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
