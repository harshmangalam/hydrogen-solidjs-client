import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { RiWeatherMoonCloudyFill } from "solid-icons/ri";
import { SiMessenger } from "solid-icons/si";

import MenuLink from "./MenuLink";
import Avatar from "../../ui/dataDisplay/Avatar";

export default function MenuSidebar() {
  return (
    <div
      className={`h-screen fixed py-14 top-4 lg:block lg:w-3/12 hidden left-0 bg-gray-100 dark:bg-gray-900  px-2 text-gray-800 dark:text-gray-100 hover:overflow-y-scroll custom-scrollbar`}
    >
      <ul className="flex flex-col space-y-2">
        <MenuLink
          name="Harsh Mangalam"
          icon={() => <Avatar className="w-6 h-6" />}
          href="/me"
        />
        <For each={links}>{(link) => <MenuLink {...link} />}</For>
      </ul>
    </div>
  );
}

const links = [
  {
    name: "Friends",
    href: "/friends",
    icon: () => <FaSolidUserFriends />,
  },
  {
    name: "Posts",
    href: "/posts",
    icon: () => <BsFilePost />,
  },

  {
    name: "Groups",
    href: "/groups",
    icon: () => <FaSolidUsers />,
  },

  {
    name: "Weather",
    href: "/weather",
    icon: () => <RiWeatherMoonCloudyFill />,
  },
  {
    name: "Messenger",
    href: "/messenger",
    icon: () => <SiMessenger />,
  },

];
