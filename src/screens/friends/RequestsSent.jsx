import { createResource, For } from "solid-js";
import { FaSolidUserTimes } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import Error from "../../components/shared/Error";
import { fetchFriendsRequestsSent } from "../../services/friends.service";
import useFriendRequest from "../../hooks/useFriendRequest";
import FriendInterface from "../../components/friends/FriendInterface";
export default function RequestsReceived() {
  const [response, { refetch }] = createResource(fetchFriendsRequestsSent);
  const { handleCancelSentRequest, loading } = useFriendRequest(refetch);
  return (
 
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
          when={response().data.data.users.length === 0}
        >
          <Error
            error="empty"
            name="No Requests Sent"
            message="You have not sent any friends requests"
          />
        </Match>
        <Match
          when={response().data.data.users.length !== 0}
        >
          <h4 className="text-xl font-medium">Requests received</h4>
          <FriendInterface>
            <For each={response().data.data.users}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    text="Cancel"
                    color="danger"
                    
                    onClick={() => handleCancelSentRequest(user.id)}
                  >
                    <FaSolidUserTimes size={18} />
                  </FriendBtn>
                </FriendCard>
              )}
            </For>
          </FriendInterface>
        </Match>
      </Switch>
    
  );
}
