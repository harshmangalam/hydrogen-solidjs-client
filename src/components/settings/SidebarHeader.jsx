import { Link } from "solid-app-router";
import { BsArrowLeftCircle } from "solid-icons/bs";
import DarkLightMode from "../shared/DarkLightMode";
export default function SidebarHeader() {
  return (
    <div className="h-[10%] flex items-center justify-between px-2">
      <div className="flex items-center space-x-2">
        <Link href="/" title="back to home">
          <BsArrowLeftCircle className="text-2xl" />
        </Link>
        <p className="text-2xl font-semibold">Settings</p>
      </div>
      <DarkLightMode />
    </div>
  );
}
