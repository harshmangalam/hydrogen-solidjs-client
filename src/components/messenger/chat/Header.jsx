import { Link } from "solid-app-router";
import { VscClose } from "solid-icons/vsc";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";

export default function ChatHeader(props) {
  return (
    <header className="flex items-center justify-between h-[10%]  px-4 bg-white dark:bg-gray-800">
      <div className="flex space-x-2 items-center">
        <UserAvatar
          src={props.profileImage}
          className="h-12 w-12 rounded-full"
          alt={props.firstName}
        />
        <div className="flex flex-col space-y-0">
          <h6 className="text-lg font-semibold">{props.firstName}</h6>
          <p className="text-sm">
            {props.status} {props.lastSeen}
          </p>
        </div>
      </div>
      <div>
        <Link href="/messenger">
          <button
            title="Close Chat"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
          >
            <VscClose className="text-xl" />
          </button>
        </Link>
      </div>
    </header>
  );
}
