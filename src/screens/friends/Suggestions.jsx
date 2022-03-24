import { FaSolidUserPlus } from "solid-icons/fa";
import { createResource, For, Match, Show, Switch } from "solid-js";
import FriendBtn from "../../components/friends/FriendBtn";
import FriendCard from "../../components/friends/FriendCard";
import FriendInterface from "../../components/friends/FriendInterface";
import FriendsCardSkeleton from "../../components/friends/FriendsCardSkeleton";
import Empty from "../../components/shared/Empty";
import useFriendRequest from "../../hooks/useFriendRequest";
import { fetchFriendsSuggestions } from "../../services/friends.service";

export default function Suggestions() {
  const [response, { refetch }] = createResource(fetchFriendsSuggestions);
  const { handleSendFriendRequest, loading } = useFriendRequest(refetch);

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
          fallback={<Empty title="No Suggestions" />}
          when={response().data.data.users.length}
        >
          <h4 className="text-xl font-medium">Suggestions</h4>
          <FriendInterface>
            <For each={response().data.data.users}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    text="Add friend"
                    color="primary"
                    onClick={() => handleSendFriendRequest(user.id)}
                  >
                    <FaSolidUserPlus size={18} />
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
