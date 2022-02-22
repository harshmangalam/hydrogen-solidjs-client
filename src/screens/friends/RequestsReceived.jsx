import { For } from "solid-js";
import { FaSolidUserTimes } from "solid-icons/fa";
import { FaSolidUserPlus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";

export default function RequestsReceived() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">Requests Received</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <FriendCard title="" image="">
              <div className="flex flex-col space-y-2">
                <FriendBtn color="success" text="Accept">
                  <FaSolidUserPlus size={18} />
                </FriendBtn>
                <FriendBtn color="danger" text="Ignore">
                  <FaSolidUserTimes size={18} />
                </FriendBtn>
              </div>
            </FriendCard>
          )}
        </For>
      </div>
    </div>
  );
}
