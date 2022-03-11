import { Link } from "solid-app-router";
import { BsArrowLeftCircle } from "solid-icons/bs";
export default function MainHeader(props) {
  return (
    <div className="divide-y-2 dark:divide-gray-600 h-screen">
      <div className="h-[10%] flex items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <Link
            href="/settings"
            title="back to settings"
            className="block md:hidden"
          >
            <BsArrowLeftCircle className="text-2xl" />
          </Link>
          <p className="text-2xl font-semibold">{props.title}</p>
        </div>
      </div>
      <div className="h-[90%] px-4 py-4 overflow-y-auto custom-scrollbar">{props.children}</div>
    </div>
  );
}
