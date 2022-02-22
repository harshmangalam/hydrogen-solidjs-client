import { For } from "solid-js";
import { FaSolidUserMinus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";

export default function MyFriends() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">My Friends</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <FriendCard title="" image="">
              <FriendBtn text="Unfriend" color="danger">
                <FaSolidUserMinus size={18} />
              </FriendBtn>
            </FriendCard>
          )}
        </For>
      </div>
    </div>
  );
}
