import { FaSolidUserMinus } from 'solid-icons/fa'
import { For } from "solid-js";
import GroupCard from "../../components/groups/GroupCard";

export default function Suggestions() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">All Groups</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <GroupCard title="" image="">
              <button className="text-red-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-red-100 dark:bg-gray-700 justify-center space-x-2 hover:bg-red-200 dark:hover:bg-gray-600 rounded-lg text-sm">
                <FaSolidUserMinus size={18} />
                <span>Leave Group</span>
              </button>
            </GroupCard>
          )}
        </For>
      </div>
    </div>
  );
}
