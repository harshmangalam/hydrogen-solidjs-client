import { Outlet, useNavigate } from "solid-app-router";
import { onMount } from "solid-js";
import Footer from "../../components/Footer";
import DarkLightMode from "../../components/shared/DarkLightMode";
import Logo from "../../components/shared/Logo";
import { useAuthState } from "../../context/auth";
export default function AuthLayout() {
  const authState = useAuthState();
  const navigate = useNavigate();
  onMount(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  });
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

      <Footer />
    </div>
  );
}
