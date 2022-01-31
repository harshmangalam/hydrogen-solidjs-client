import { FaSolidUserPlus } from "solid-icons/fa";
import { For } from "solid-js";
import FriendCard from "../../components/friends/FriendCard";

export default function Suggestions() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">Suggestions</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <FriendCard title="" image="">
              <button className="text-blue-500 hover:text-blue-600 font-semibold py-2 w-full flex items-center  bg-blue-100 justify-center space-x-2 hover:bg-blue-200 rounded-lg text-sm">
                <FaSolidUserPlus size={18} />
                <span>Add Friend</span>
              </button>
            </FriendCard>
          )}
        </For>
      </div>
    </div>
  );
}
