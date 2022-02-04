import { FaSolidUser, FaSolidUserFriends } from "solid-icons/fa";
import { TiGroup, TiHome } from "solid-icons/ti";
import MenuLink from "./MenuLink";

export default function MenuSidebar() {
  return (
    <div
      className={`h-screen fixed py-14 top-4 xl:block xl:w-1/5 hidden left-0 bg-gray-100 dark:bg-gray-900  px-2 text-gray-800 dark:text-gray-100 overflow-y-scroll no-scrollbar`}
    >
      <ul className="flex flex-col space-y-2">
        <MenuLink
          name="Harsh Mangalam"
          icon={() => <FaSolidUser />}
          href="/me"
        />
        <For each={links}>{(link) => <MenuLink {...link} />}</For>
      </ul>
    </div>
  );
}

const links = [
  {
    name: "My Posts",
    href: "/my-posts",
    icon: () => <TiGroup />,
  },
  {
    name: "Trending Posts",
    href: "/trending-posts",
    icon: () => <TiGroup />,
  },

  {
    name: "Saved Posts",
    href: "/saved-posts",
    icon: () => <TiGroup />,
  },
  {
    name: "Liked Posts",
    href: "/liked-posts",
    icon: () => <TiGroup />,
  },
  {
    name: "Commented on Posts",
    href: "/commented-on-posts",
    icon: () => <TiGroup />,
  },
  {
    name: "Shared Posts",
    href: "/shared-posts",
    icon: () => <TiGroup />,
  },
  {
    name: "Weather",
    href: "/weather",
    icon: () => <TiGroup />,
  },

];
