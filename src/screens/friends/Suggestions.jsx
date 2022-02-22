import { FaSolidUserPlus } from "solid-icons/fa";
import { For } from "solid-js";
import FriendBtn from "../../components/friends/FriendBtn";
import FriendCard from "../../components/friends/FriendCard";

export default function Suggestions() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">Suggestions</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <FriendCard title="" image="">
              <FriendBtn text="Add friend" color="primary">
                <FaSolidUserPlus size={18} />
              </FriendBtn>
            </FriendCard>
          )}
        </For>
      </div>
    </div>
  );
}
