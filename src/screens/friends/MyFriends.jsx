import { createResource, For, Show } from "solid-js";
import { FaSolidUserMinus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import { fetchFriends } from "../../services/friends.service";
import Error from "../../components/shared/Error";
import Empty from "../../components/shared/Empty";
import FriendsCardSkeleton from "../../components/friends/FriendsCardSkeleton";
import useFriendRequest from "../../hooks/useFriendRequest";
import FriendInterface from "../../components/friends/FriendInterface";
export default function MyFriends() {
  const [response, { refetch }] = createResource(fetchFriends);
  const { handleRemoveFromFriendsList, loading } = useFriendRequest(refetch);
  return (
    <Switch>
      <Match when={response.loading}>
        <FriendsCardSkeleton />
      </Match>
      <Match when={response.error}>
        <Error name="Error" />
      </Match>

      <Match when={response()}>
        <Show
          fallback={<Empty title="No Friends" />}
          when={response().data.data.users.length}
        >
          <h1 className="text-xl font-medium">My Friends</h1>
          <FriendInterface>
            <For each={response().data.data.users}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    aria-label="Unfriend"
                    text="Unfriend"
                    color="danger"
                    onClick={() => handleRemoveFromFriendsList(user.id)}
                    loading={loading}
                  >
                    <FaSolidUserMinus size={18} />
                  </FriendBtn>
                </FriendCard>
              )}
            </For>
          </FriendInterface>
        </Show>
      </Match>
    </Switch>
  );
}
