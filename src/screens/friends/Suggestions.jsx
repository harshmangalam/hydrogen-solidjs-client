import { FaSolidUserPlus } from "solid-icons/fa";
import { createResource, For, Match, Switch } from "solid-js";
import FriendBtn from "../../components/friends/FriendBtn";
import FriendCard from "../../components/friends/FriendCard";
import FriendInterface from "../../components/friends/FriendInterface";
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
        </Match>
      </Switch>
    </div>
  );
}
