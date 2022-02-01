import { For } from "solid-js";
import { FaSolidUserMinus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";

export default function AllFriends() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">All Friends</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <FriendCard title="" image="">
              <button className="text-red-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-red-100 dark:bg-gray-700 justify-center space-x-2 hover:bg-red-200 dark:hover:bg-gray-600 rounded-lg text-sm">
                <FaSolidUserMinus size={18} />
                <span>Unfriend</span>
              </button>
            </FriendCard>
          )}
        </For>
      </div>
    </div>
  );
}
