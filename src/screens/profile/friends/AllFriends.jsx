import FriendCard from "../../../components/profile/friends/FriendCard";
import { createResource, For, Match, Show, Switch } from "solid-js";
import { useParams } from "solid-app-router";
import { fetchUserAllFriends } from "../../../services/user.service";
import HydrogenLoader from "../../../components/shared/HydrogenLoader";
import Error from "../../../components/shared/Error";
import Empty from "../../../components/shared/Empty";
export default function AllFriends() {
  const params = useParams();
  const [resource] = createResource(() => params.userId, fetchUserAllFriends);
  return (
    <div className="relative py-4">
      <Switch>
        <Match when={resource.loading}>
          <HydrogenLoader />
        </Match>
        <Match when={resource.error}>
          <Error name="Error" />
        </Match>
        <Match when={resource()}>
          <Show
            when={resource().data.data.users.length}
            fallback={<Empty title="No Friends" />}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <For each={resource().data.data.users}>
                {(user) => (
                  <li>
                    <FriendCard {...user} />
                  </li>
                )}
              </For>
            </ul>
          </Show>
        </Match>
      </Switch>
    </div>
  );
}
