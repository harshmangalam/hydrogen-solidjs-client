import { FaSolidUserPlus } from "solid-icons/fa";
import { createResource, For, Match, Switch } from "solid-js";
import FriendBtn from "../../components/friends/FriendBtn";
import FriendCard from "../../components/friends/FriendCard";
import useFriendRequest from "../../hooks/useFriendRequest";
import { fetchFriendsSuggestions } from "../../services/friends.service";

export default function Suggestions() {
  const [response, { refetch }] = createResource(fetchFriendsSuggestions);
  const { handleSendFriendRequest, loading } = useFriendRequest(refetch);

  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">Suggestions</h4>

      <Switch>
        <Match when={response()}>
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 mt-4">
            <For each={response().data.data.users}>
              {(user) => (
                <FriendCard {...user}>
                  <FriendBtn
                    text="Add friend"
                    color="primary"
                    onClick={() => handleSendFriendRequest(user.id)}
                    isLoading={loading()}
                  >
                    <FaSolidUserPlus size={18} />
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
