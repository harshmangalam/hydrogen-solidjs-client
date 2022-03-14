import { FaSolidPlus, FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { Outlet } from "solid-app-router";
import { RiMapCompass3Fill } from "solid-icons/ri";
import { IoNotifications } from "solid-icons/io";
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
    name: "Groups Feed",
    href: "",
    icon: () => <BsFilePost />,
    end: true,
  },
  {
    name: "Created Groups",
    href: "groups_created",
    icon: () => <FaSolidUsers />,
    end: false,
  },
  {
    name: "Created Group Posts",
    href: "created_group_posts",
    icon: () => <FaSolidUsers />,
    end: false,
  },

  {
    name: "Groups Invited",
    href: "invites",
    icon: () => <FaSolidUsers />,
    end: false,
  },

  {
    name: "Groups Joined",
    href: "joined",
    icon: () => <FaSolidUsers />,
    end: false,
  },

  {
    name: "Suggestions",
    href: "suggestions",
    icon: () => <RiMapCompass3Fill />,
    end: false,
  },
  {
    name: "Notifications",
    href: "notifications",
    icon: () => <IoNotifications />,
    end: false,
  },
  {
    name: "Create Group Post",
    href: "create_group_post",
    icon: () => <FaSolidPlus />,
    end: false,
  },
  {
    name: "Create Group",
    href: "group_create",
    icon: () => <FaSolidPlus />,
    end: false,
  },
];
