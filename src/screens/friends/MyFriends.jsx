import { createResource, For } from "solid-js";
import { FaSolidUserMinus } from "solid-icons/fa";
import FriendCard from "../../components/friends/FriendCard";
import FriendBtn from "../../components/friends/FriendBtn";
import { fetchFriends } from "../../services/friends.service";
import Error from "../../components/shared/Error";
import useFriendRequest from "../../hooks/useFriendRequest";
export default function MyFriends() {
  const [response, { refetch }] = createResource(fetchFriends);
  const { handleRemoveFromFriendsList, loading } = useFriendRequest(refetch);
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

        <Match when={response().data.data.users.myFriends.length === 0}>
          <Error
            error="empty"
            name="No Friends"
            message="No any one are your friends"
          />
        </Match>
        <Match when={response().data.data.users.myFriends.length !== 0}>
          <h4 className="text-xl font-medium">My Friends</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            <For each={response().data.data.users.myFriends}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    text="Unfriend"
                    color="danger"
                    onClick={() => handleRemoveFromFriendsList(user.id)}
                    isLoading={loading()}
                  >
                    <FaSolidUserMinus size={18} />
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
