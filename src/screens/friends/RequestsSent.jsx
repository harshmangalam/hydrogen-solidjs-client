import { createResource, For, Show } from "solid-js";
import { FaSolidUserTimes } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import Error from "../../components/shared/Error";
import { fetchFriendsRequestsSent } from "../../services/friends.service";
import useFriendRequest from "../../hooks/useFriendRequest";
import FriendInterface from "../../components/friends/FriendInterface";
import FriendsCardSkeleton from "../../components/friends/FriendsCardSkeleton";
import Empty from "../../components/shared/Empty";
export default function RequestsReceived() {
  const [response, { refetch }] = createResource(fetchFriendsRequestsSent);
  const { handleCancelSentRequest, loading } = useFriendRequest(refetch);
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
          fallback={<Empty title="No Requests Sent" />}
          when={response().data.data.users.length}
        >
          <h4 className="text-xl font-medium">Requests sent</h4>
          <FriendInterface>
            <For each={response().data.data.users}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    text="Cancel"
                    color="danger"
                    onClick={() => handleCancelSentRequest(user.id)}
                    loading={loading}
                  >
                    <FaSolidUserTimes size={18} />
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
