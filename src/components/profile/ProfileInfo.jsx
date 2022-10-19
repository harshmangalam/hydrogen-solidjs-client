import { Link } from "solid-app-router";
import { For, Match, Show, Switch } from "solid-js";
import { useAuthState } from "../../context/auth";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
import EditProfile from "./EditProfileDialog";
import { getRelativeTime } from "../../utils/dateTime";
export default function ProfileInfo(props) {
  const { currentUser } = useAuthState();
  return (
    <div
      className="absolute w-full flex flex-col items-center md:w-auto md:left-1/4 text-center md:text-left md:items-start"
      classList={{ "-bottom-72 md:-bottom-48": props.friendsCount, "-bottom-60 md:-bottom-40": props.friendsCount === 0 }}
    >
      <div className="flex space-x-2">
        <h3 className="text-3xl dark:text-white font-medium text-center w-full">
          {`${props.firstName} ${props.lastName || ""}`}
        </h3>

        <Show when={currentUser.id === props.userId}>
          <EditProfile refetch={props.refetch} />
        </Show>
      </div>

      <div
        className="px-4 py-1 rounded-full text-sm  font-bold   border mt-2"
        classList={{
          "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300":
            props.status === "LOGOUT",
          "dark:bg-green-900 text-green-600 bg-green-100 dark:text-green-300":
            props.status === "ACTIVE",
        }}
      >
        <Switch>
          <Match when={props.status === "ACTIVE"}>Active Now</Match>
          <Match when={props.lastSeen}>last seen {getRelativeTime(props.lastSeen)}</Match>
        </Switch>
      </div>
      <div className="mt-1">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          {props.friendsCount} Friends
        </p>
      </div>

      <div className="mt-1">
        <span class="text-sm text-gray-500 dark:text-gray-200">
          Joined {getRelativeTime(props.createdAt)}
        </span>
      </div>

      <div class="-space-x-3 flex items-center mt-2">
        <For each={props.friends}>
          {(friend) => (
            <Link href={`/${friend.id}`}>
              <UserAvatar
                src={friend.profileImage}
                alt={friend.firstName}
                className="w-10 h-10 rounded-full border-white border-2"
              />
            </Link>
          )}
        </For>
        <Show when={props.friendsCount - props.friends.length > 0}>
          <div className="bg-gray-300 dark:bg-gray-900 w-10 h-10 rounded-full grid place-items-center font-bold">
            {props.friendsCount - props.friends.length}+
          </div>
        </Show>
      </div>
    </div>
  );
}
