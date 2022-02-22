import { createResource, For } from "solid-js";
import { FaSolidUserTimes } from "solid-icons/fa";
import { FaSolidUserPlus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import Error from "../../components/shared/Error";
import { fetchFriendsRequestsReceived } from "../../services/friends.service";
export default function RequestsReceived() {
  const [response] = createResource(fetchFriendsRequestsReceived);
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
          when={response().data.data.users.friendsRequestsReceived.length === 0}
        >
          <Error
            error="empty"
            name="No Requests Sent"
            message="You have not sent any friends requests"
          />
        </Match>
        <Match
          when={response().data.data.users.friendsRequestsReceived.length !== 0}
        >
          <h4 className="text-xl font-medium">Requests received</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            <For each={response().data.data.users.friendsRequestsReceived}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn text="Cancel" color="danger">
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
