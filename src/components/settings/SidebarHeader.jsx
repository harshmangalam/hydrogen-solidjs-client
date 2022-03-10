import { Link } from "solid-app-router";
import { BsArrowLeftCircle } from "solid-icons/bs";
import DarkLightMode from "../shared/DarkLightMode";
export default function SettingsHeader() {
  return (
    <div className="h-[10%] bg-white dark:bg-gray-800 px-2 md:px-4">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center space-x-4">
          <Link href="/" title="back to home">
            <BsArrowLeftCircle className="text-2xl" />
          </Link>
          <p className="text-2xl font-semibold">Settings</p>
        </div>

        <DarkLightMode />
      </div>
    </div>
  );
}
