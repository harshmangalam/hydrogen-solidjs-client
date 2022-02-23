import { FaSolidUserMinus } from 'solid-icons/fa'
import { For } from "solid-js";
import GroupCard from "../../components/groups/GroupCard";

export default function MyGroups() {
  return (
    <div>
      <h4 className="text-2xl font-bold">Groups You`ve Created</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-8">
        <For each={[...Array(6).keys()]}>
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
