import Navbar from "../components/header/Navbar";
import { Outlet } from "solid-app-router";
import BottomSheet from "../components/bottomSheet";
export default function MainLayout() {
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
