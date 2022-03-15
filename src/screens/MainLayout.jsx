import Navbar from "../components/header/Navbar";
import { Outlet, useIsRouting, useNavigate } from "solid-app-router";
import BottomSheet from "../components/bottomSheet";
import { createEffect, ErrorBoundary, onMount, Show } from "solid-js";
import { useAuthState } from "../context/auth";
import HydrogenLoader from "../components/shared/HydrogenLoader";
export default function MainLayout() {
  const navigate = useNavigate();
  const authState = useAuthState();
  const isRouting = useIsRouting();
  onMount(() => {
    if (!authState.isAuthenticated) {
      navigate("/auth/login", { replace: true });
    }
  });

  createEffect(() => console.log(isRouting()));
  return (
    <div>
      <Navbar />
      <main className="py-14">
        <ErrorBoundary fallback={(error) => error}>
          <Show when={!isRouting()} fallback={<HydrogenLoader />}>
            <Outlet />
          </Show>
        </ErrorBoundary>
      </main>
      <BottomSheet />
    </div>
  );
}
