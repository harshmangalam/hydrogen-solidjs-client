import { Outlet } from "solid-app-router";
import FriendsInterface from "../../components/messenger/friends";
import MessengerProvider from "../../context/messenger";

export default function MessengerLayout() {
  return (
    <MessengerProvider>
      {/* desktop  */}
      <div className="md:flex divide-x-2  bg-white dark:bg-gray-900 hidden dark:divide-gray-600">
        <FriendsInterface />
        <div className="md:w-3/5 xl:w-3/4 relative">
          <Outlet />
        </div>
      </div>

      {/* mobile  */}
      <div className="block md:hidden bg-white dark:bg-gray-900">
        <Outlet />
      </div>
    </MessengerProvider>
  );
}
