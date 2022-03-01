import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { RiWeatherMoonCloudyFill } from "solid-icons/ri";
import { SiMessenger } from "solid-icons/si";

import MenuLink from "./MenuLink";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import { useAuthState } from "../../../context/auth";

export default function MenuSidebar() {
  const { currentUser } = useAuthState();
  return (
    <div
      className={`h-screen fixed py-14 top-4 lg:block lg:w-3/12 hidden left-0 bg-gray-100 dark:bg-gray-900  px-2 text-gray-800 dark:text-gray-100 hover:overflow-y-scroll custom-scrollbar`}
    >
      <ul className="flex flex-col">
        <MenuLink
          name={currentUser.firstName + " " + currentUser.lastName}
          icon={() => (
            <UserAvatar
              src={currentUser.profileImage}
              className="w-8 h-8 rounded-full"
            />
          )}
          href={currentUser.id}
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
    icon: () => <FaSolidUserFriends className="text-rose-500" />,
  },
  {
    name: "Posts",
    href: "/posts",
    icon: () => <BsFilePost  className="text-purple-500" />,
  },

  {
    name: "Groups",
    href: "/groups",
    icon: () => <FaSolidUsers  className="text-green-500" />,
  },

  {
    name: "Weather",
    href: "/weather",
    icon: () => <RiWeatherMoonCloudyFill  className="text-blue-500" />,
  },
];
