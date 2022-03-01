import FriendCard from "../../../components/profile/friends/FriendCard";
import { createResource, For, Match, Switch } from "solid-js";
import { useParams } from "solid-app-router";
import { fetchUserAllFriends } from "../../../services/user.service";
export default function AllFriends() {
  const { userId } = useParams();
  const [resource] = createResource(userId, fetchUserAllFriends);
  return (
    <div>
      <Switch>
        <Match when={resource()}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <For each={resource().data.data.users}>
              {(user) => (
                <li>
                  <FriendCard {...user} />
                </li>
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </div>
  );
}
