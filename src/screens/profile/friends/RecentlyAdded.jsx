import { For } from "solid-js";
import FriendCard from "../../../components/profile/friends/FriendCard";

export default function RecentlyAdded(){
    return (
        <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <li>
              <FriendCard />
            </li>
          )}
        </For>
      </ul>
    </div>
    )
}