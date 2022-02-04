import Navbar from "../../components/header/Navbar";
import { Outlet } from "solid-app-router";
export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <main className="py-12 px-2 md:px-0">
        <Outlet />
      </main>
    </div>
  );
}
