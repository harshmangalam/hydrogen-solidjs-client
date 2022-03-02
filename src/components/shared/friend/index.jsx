import { createResource, Match, Show, Switch } from "solid-js";
import { fetchFriends } from "../../../services/friends.service";
import FriendsList from "./FriendsList";
import SelectedFriends from "./SelectedFriends";

export default function FriendsInterface(props) {
  const [resource] = createResource(props.startFetch, fetchFriends);
  return (
    <div>
      <Show when={props.friends.length}>
        <SelectedFriends
          friends={props.friends}
          removeFriend={props.removeFriend}
        />
      </Show>

      <div className="mt-4 flex flex-col space-y-2">
        <h6 className="text-gray-500 dark:text-gray-200 text-xl font-medium">
          Friends
        </h6>

        <Switch>
          <Match when={resource.loading}>
            <p>Loading friends...</p>
          </Match>
          <Match when={resource.error}>
            <p>Error while loading friends..</p>
          </Match>
          <Match when={resource()}>
            <FriendsList
              friends={resource().data.data.users}
              addFriend={props.addFriend}
              selectedFriends={props.friends}
            />
          </Match>
        </Switch>
      </div>
    </div>
  );
}
