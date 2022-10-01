import FriendCard from "../../../components/profile/friends/FriendCard";
import { createResource, For, Match, Show, Switch } from "solid-js";
import { useParams } from "solid-app-router";
import { fetchUserAllFriends } from "../../../services/user.service";
import HydrogenLoader from "../../../components/shared/HydrogenLoader";
import Error from "../../../components/shared/Error";
import Empty from "../../../components/shared/Empty";
import useFriendRequest from "../../../hooks/useFriendRequest";
import FriendBtn from "../../../components/friends/FriendBtn";

export default function AllFriends() {
  const params = useParams();
  const [resource, { refetch }] = createResource(() => params.userId, fetchUserAllFriends);
  const { handleRemoveFromFriendsList, loading } = useFriendRequest(refetch);
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
                    <FriendCard {...user}>
                      <FriendBtn
                        text="Unfriend"
                        color="danger"
                        onClick={() => handleRemoveFromFriendsList(user.id)}
                        loading={loading}
                      >
                        <FaSolidUserMinus size={18} />
                      </FriendBtn>
                    </FriendCard>
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
