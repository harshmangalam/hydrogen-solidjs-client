import UserAvatar from "../../components/ui/dataDisplay/UserAvatar";
import {Link} from "solid-app-router"
import { VscClose } from 'solid-icons/vsc'
export default function Chat() {
  return (
    <div className="divide-y-2 absolute w-full h-full dark:divide-stone-600">
      <header className="flex items-center justify-between h-[10%]  px-4">
        <div className="flex space-x-2 items-center">
          <UserAvatar
            src={
              "https://images.unsplash.com/photo-1646564517732-6aa88a133dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            className="h-12 w-12 rounded-full"
            alt="Harsh Mangalam"
          />
          <div className="flex flex-col space-y-0">
            <h6 className="text-lg font-semibold">Harsh Mangalam</h6>
            <p className="text-sm">Active 2h ago</p>
          </div>
        </div>
        <div>
          <Link href="/messenger">
            <button title="Close Chat" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white ">
              <VscClose className="text-xl" />
            </button>
          </Link>
        </div>
      </header>
      <div className="h-[90%] relative"></div>
    </div>
  );
}
