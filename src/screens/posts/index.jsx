import { FaSolidPlus } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { RiMapCompass3Fill } from "solid-icons/ri";
import { FaSolidUserFriends } from "solid-icons/fa";
import { Outlet } from "solid-app-router";
import { FaSolidUserCircle } from 'solid-icons/fa'
import AppShell from "../../components/ui/surfaces/AppShell";
export default function GroupsLayout() {
  return (
    <div>
      <AppShell drawerTitle="Groups" drawerItems={tabs}>
        <Outlet />
      </AppShell>
    </div>
  );
}

const tabs = [
  {
    name: "Home",
    href: "",
    icon: () => <BsFilePost />,
    end: true,
  },

  {
    name: "Trending Posts",
    href: "trending",
    icon: () => <RiMapCompass3Fill />,
    end: false,
  },
  {
    name: "Friends Posts",
    href: "friends_posts",
    icon: () => <FaSolidUserFriends />,
    end: false,
  },

  {
    name: "My Posts",
    href: "my_posts",
    icon: () => <FaSolidUserCircle />,
    end: false,
  },

  {
    name: "Create Post",
    href: "create",
    icon: () => <FaSolidPlus />,
    end: false,
  },

];
