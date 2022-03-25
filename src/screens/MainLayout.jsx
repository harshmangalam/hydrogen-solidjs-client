import Navbar from "../components/header/Navbar";
import { Outlet, useNavigate } from "solid-app-router";
import BottomSheet from "../components/bottomSheet";
import { onMount } from "solid-js";
import { useAuthState } from "../context/auth";
export default function MainLayout() {
  const navigate = useNavigate();
  const authState = useAuthState();

  onMount(() => {
    if (!authState.isAuthenticated) {
      navigate("/auth/login", { replace: true });
    }
  });

  return (
    <div>
      <Navbar />
      <main className="py-14">
        <Outlet />
      </main>
      <BottomSheet />
    </div>
  );
}
