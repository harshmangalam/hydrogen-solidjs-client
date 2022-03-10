import { Outlet } from "solid-app-router";
import SidebarMenus from "../../components/settings/SidebarMenus";
import SidebarHeader from "../../components/settings/SidebarHeader";
export default function SettingsLayout() {
  return (
    <>
      {/* desktop  */}
      <div className="md:flex divide-x-2  bg-white dark:bg-gray-900 hidden dark:divide-gray-600">
        <div className="w-full md:w-2/5 xl:w-1/4 h-screen divide-y-2 dark:divide-gray-600">
          <SidebarHeader />
          <SidebarMenus />
        </div>
        <div className="md:w-3/5 xl:w-3/4 relative">
          <Outlet />
        </div>
      </div>

      {/* mobile  */}
      <div className="block md:hidden bg-white dark:bg-gray-900">
        <Outlet />
      </div>
    </>
  );
}
