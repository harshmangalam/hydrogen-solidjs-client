import { Link } from "solid-app-router";
import { createSignal, For, Show } from "solid-js";
import DropdownMenu from "../ui/feedback/DropdownMenu";

import { HiOutlinePlus } from "solid-icons/hi";
import { BsFilePost } from "solid-icons/bs";
import { FaSolidUsers } from "solid-icons/fa";
export default function Profile() {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <button
        className="p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
        onClick={() => setOpen((o) => !o)}
      >
        <HiOutlinePlus aria-label="Create" />
      </button>
      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)}>
          <div className="px-2 py-2">
            <div className="flex justify-between px-2">
              <h5 className="text-2xl font-semibold">Create</h5>
            </div>
            <ul className="my-4">
              <For each={menus}>
                {(menu) => (
                  <li>
                    <Link
                      href={menu.href}
                      className="py-2 px-4 hover:bg-gray-100 hover:dark:bg-gray-700 flex items-center space-x-4 rounded-md"
                      onClick={() => setOpen(false)}
                    >
                      <div className="grid place-items-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600">
                        {menu.icon()}
                      </div>

                      <span>{menu.name}</span>
                    </Link>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </DropdownMenu>
      </Show>
    </>
  );
}

const menus = [
  {
    name: "Posts",
    href: "posts/create",
    icon: () => <BsFilePost className="text-2xl" aria-label="create post" />,
  },

  {
    name: "Groups",
    href: "groups/group_create",
    icon: () => <FaSolidUsers className="text-2xl" aria-label="create group" />,
  },

  {
    name: "Group Posts",
    href: "groups/create_group_post",
    icon: () => <BsFilePost className="text-2xl" aria-label="create group post" />,
  },
];
