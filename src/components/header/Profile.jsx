import { Link } from "solid-app-router";
import { createSignal, Show } from "solid-js";
import { useAuthState } from "../../context/auth";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
import DropdownMenu from "../ui/feedback/DropdownMenu";
import { RiSystemSettings4Line } from "solid-icons/ri";
import { RiSystemLogoutBoxRLine } from "solid-icons/ri";
import useLogout from "../../hooks/auth/useLogout";
export default function Profile() {
  const { currentUser } = useAuthState();
  const [open, setOpen] = createSignal(false);
  const { logoutUser } = useLogout();
  return (
    <>
      <button onClick={() => setOpen((o) => !o)}>
        <UserAvatar
          src={currentUser.profileImage}
          className="w-10 h-10 rounded-full"
          alt={currentUser.firstName}
        />
      </button>
      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)}>
          <Link href={`/${currentUser.id}`} onClick={() => setOpen(false)}>
            <button className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex space-x-4 items-center w-full">
              <UserAvatar
                src={currentUser.profileImage}
                className="w-16 h-16 rounded-full"
                alt={currentUser.firstName}
              />
              <div className="flex flex-col items-start">
                <h6 className="font-medium text-lg">
                  {currentUser.firstName + " " + currentUser.lastName}
                </h6>
                <p className="text-sm">{currentUser.email}</p>
              </div>
            </button>
          </Link>
          <hr className="border-gray-300 dark:border-gray-600 my-2" />
          <ul className="">
            <li>
              <Link
                href="/settings"
                className="py-2 px-4 hover:bg-gray-100 hover:dark:bg-gray-700 flex items-center space-x-4 rounded-md"
                onClick={()=>setOpen(false)}
              >
                <div className="grid place-items-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600">
                  <RiSystemSettings4Line className="text-2xl" />
                </div>

                <span>Settings &amp; Privacy</span>
              </Link>
            </li>
          </ul>

          <button
            className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-4 w-full rounded-md"
            onClick={[logoutUser]}
          >
            <div className="grid place-items-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600">
              <RiSystemLogoutBoxRLine class="text-2xl" />
            </div>
            <span>Logout</span>
          </button>
        </DropdownMenu>
      </Show>
    </>
  );
}
