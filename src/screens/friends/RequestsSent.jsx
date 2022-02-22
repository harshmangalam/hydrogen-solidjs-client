import { createResource, For } from "solid-js";
import { FaSolidUserTimes } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import Error from "../../components/shared/Error";
import { fetchFriendsRequestsSent } from "../../services/friends.service";
import useFriendRequest from "../../hooks/useFriendRequest";
export default function RequestsReceived() {
  const [response, { refetch }] = createResource(fetchFriendsRequestsSent);
  const { handleCancelSentRequest, loading } = useFriendRequest(refetch);
  return (
    <div className="pt-4 md:px-8">
      <Switch>
        <Match when={response.loading}>
          {/* <FriendCardSkeleton /> */}
          <p>Loading..</p>
        </Match>
        <Match when={response.error}>
          <Error
            error="server"
            name={response.error.name}
            message={response.error.message}
          />
        </Match>

        <Match
          when={response().data.data.users.friendsRequestsSent.length === 0}
        >
          <Error
            error="empty"
            name="No Requests Sent"
            message="You have not sent any friends requests"
          />
        </Match>
        <Match
          when={response().data.data.users.friendsRequestsSent.length !== 0}
        >
          <h4 className="text-xl font-medium">Requests received</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            <For each={response().data.data.users.friendsRequestsSent}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    text="Cancel"
                    color="danger"
                    isLoading={loading()}
                    onClick={() => handleCancelSentRequest(user.id)}
                  >
                    <FaSolidUserTimes size={18} />
                  </FriendBtn>
                </FriendCard>
              )}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
}
