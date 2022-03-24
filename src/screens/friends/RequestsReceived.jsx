import { createResource, For, Show } from "solid-js";
import { FaSolidUserTimes } from "solid-icons/fa";
import { FaSolidUserPlus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import Error from "../../components/shared/Error";
import { fetchFriendsRequestsReceived } from "../../services/friends.service";
import useFriendRequest from "../../hooks/useFriendRequest";
import FriendInterface from "../../components/friends/FriendInterface";
import Empty from "../../components/shared/Empty";
import FriendsCardSkeleton from "../../components/friends/FriendsCardSkeleton";
export default function RequestsReceived() {
  const [response, { refetch }] = createResource(fetchFriendsRequestsReceived);
  const { handleAcceptFriendRequest, handleIgnoreReceivedRequest, loading } =
    useFriendRequest(refetch);
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
          fallback={<Empty title="No Requests Received" />}
          when={response().data.data.users.length}
        >
          <h4 className="text-xl font-medium">Requests received</h4>
          <FriendInterface>
            <For each={response().data.data.users}>
              {(user) => (
                <FriendCard {...user}>
                  <div className="flex flex-col space-y-2">
                    <FriendBtn
                      color="success"
                      text="Accept"
                      onClick={() => handleAcceptFriendRequest(user.id)}
                      loading={loading}
                    >
                      <FaSolidUserPlus size={18} />
                    </FriendBtn>
                    <FriendBtn
                      color="danger"
                      text="Ignore"
                      onClick={() => handleIgnoreReceivedRequest(user.id)}
                      loading={loading}
                    >
                      <FaSolidUserTimes size={18} />
                    </FriendBtn>
                  </div>
                </FriendCard>
              )}
            </For>
          </FriendInterface>
        </Show>
      </Match>
    </Switch>
  );
}
