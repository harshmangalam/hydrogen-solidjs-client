import { Outlet } from "solid-app-router";
import DarkLightMode from "../../components/shared/DarkLightMode";
import Logo from "../../components/shared/Logo";
export default function AuthLayout() {
  return (
    <div>
      <header className="bg-white shadow border-b fixed w-full top-0 z-50 dark:bg-gray-800 dark:border-gray-700">
        <nav className="px-2 md:px-4 h-14 flex items-center justify-between">
          <Logo />
          <DarkLightMode />
        </nav>
      </header>
      <div className="py-14 dark:text-white">
        <Outlet />
       
      </div>

      <footer className="bg-white fixed w-full bottom-0 z-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white py-2">
       <p className="text-center">Hydrogen &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
