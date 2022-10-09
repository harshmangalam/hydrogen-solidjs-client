import { FaSolidUserFriends, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import MenuLink from "./MenuLink";
import UserStatusAvatar from "../../ui/dataDisplay/UserStatusAvatar";
import { useAuthState } from "../../../context/auth";
import { Show } from "solid-js";

export default function MenuSidebar() {
  const authState = useAuthState();
  return (
    <div
      className={`h-screen fixed py-14 top-4 lg:block lg:w-3/12 hidden left-0 bg-gray-100 dark:bg-gray-900  px-2 text-gray-800 dark:text-gray-100 hover:overflow-y-scroll custom-scrollbar`}
    >
      <ul className="flex flex-col">
        <Show when={authState.isAuthenticated}>
          <MenuLink
            name={`${authState.currentUser.firstName} ${
              authState.currentUser.lastName || ""
            }`}
            icon={() => (
              <UserStatusAvatar
                status={authState.currentUser.status}
                profileImage={authState.currentUser.profileImage}
              />
            )}
            href={authState.currentUser.id}
          />
        </Show>
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
    icon: () => <BsFilePost className="text-purple-500" />,
  },

  {
    name: "Groups",
    href: "/groups",
    icon: () => <FaSolidUsers className="text-green-500" />,
  },
];
