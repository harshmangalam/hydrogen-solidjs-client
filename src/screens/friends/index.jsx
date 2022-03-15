import { Outlet } from "solid-app-router";
import { FaSolidUserFriends } from "solid-icons/fa";
import { RiUserUserReceived2Fill, RiUserUserShared2Fill } from "solid-icons/ri";
import { ErrorBoundary } from "solid-js";
import AppShell from "../../components/ui/surfaces/AppShell";
export default function FriendsLayout() {
  return (
    <div>
      <AppShell drawerTitle="Friends" drawerItems={tabs}>
        <ErrorBoundary fallback={<div>Error while loading friends</div>}>
          <Outlet />
        </ErrorBoundary>
      </AppShell>
    </div>
  );
}

const tabs = [
  {
    name: "My Friends",
    href: "",
    icon: () => <FaSolidUserFriends />,
    end: true,
  },

  {
    name: "Requests Received",
    href: "requests-received",
    icon: () => <RiUserUserReceived2Fill />,
    end: false,
  },
  {
    name: "Requests Sent",
    href: "requests-sent",
    icon: () => <RiUserUserShared2Fill />,
    end: false,
  },

  {
    name: "Suggestions",
    href: "suggestions",
    icon: () => <FaSolidUserFriends />,
    end: false,
  },
];
