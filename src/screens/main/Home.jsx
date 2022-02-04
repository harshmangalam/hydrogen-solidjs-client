import { createSignal, For, Show } from "solid-js";
import PostCard from "../../components/posts/PostCard";
import FriendLists from "../../components/sidebars/FriendLists";
import MenuSidebar from "../../components/sidebars/MenuSidebars";

export default function Home() {
  return (
    <div>
      {/* left section */}
      <MenuSidebar />

      {/* middle section */}
      <div className="w-full xl:w-3/5 py-6 mx-auto">
        {/* posts */}
        <div className="max-w-lg mx-auto">
          <ul className="grid grid-cols-1 gap-4">
            <For each={[...Array(3).keys()]}>
              {(post) => (
                <li>
                  <PostCard />
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>

      {/* right section  */}
      <div
        className={`h-screen fixed top-14 pt-4  hidden xl:block xl:w-1/5 right-0 bg-gray-100 dark:bg-gray-900 px-2  overflow-y-scroll no-scrollbar py-14 `}
      >
        <h5 className="font-semibold text-xl text-gray-600 dark:text-gray-200 px-4">
          Friends
        </h5>
        <div className="my-4">
          <FriendLists />
        </div>
      </div>
    </div>
  );
}
