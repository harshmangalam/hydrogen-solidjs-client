import Navbar from "../components/header/Navbar";
import { Outlet } from "solid-app-router";
export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="py-14">
        <Outlet />
      </main>
    </div>
  );
}
