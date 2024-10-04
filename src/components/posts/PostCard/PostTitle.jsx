import { For, Show } from "solid-js";
import { Link } from "solid-app-router";

export default function PostTitle(props) {
  return (
    <div
      classList={{
        "px-4 bg-gray-200 dark:bg-gray-700 py-2 flex items-center":
          props.feeling || props.checkIn || props.countTaggedFriends,
      }}
    >
      <Show when={props.feeling || props.checkIn || props.countTaggedFriends}>
        <span className="font-medium">{props.author.firstName}</span>
      </Show>
      <Show when={props.feeling}>
        <span className="mx-1">is feeling</span>
        <span className="font-medium">{props.feeling}</span>
      </Show>

      <Show when={props.countTaggedFriends}>
        <span className="mx-1"> with </span>

        <span className="inline-flex items-center gap-2">
          <For each={props.taggedFriends}>
            {(friend) => (
              <Link
                className="flex-none"
                href={`/${friend.id}`}
                aria-label="Friend Profile"
              >
                <span className="flex gap-1 pr-2 items-center  rounded-full bg-white border dark:bg-gray-900  dark:border-gray-600">
                  <span className="h-5 w-5">
                    <img
                      alt="Friend Profile Image"
                      src={friend.profileImage}
                      className="w-full h-full rounded-full"
                    />
                  </span>
                  <span className=" text-sm"> {friend.firstName}</span>
                </span>
              </Link>
            )}
          </For>
        </span>

        <Show when={props.countTaggedFriends - props.taggedFriends.length > 0}>
          and
          <span className="font-medium mx-1">
            {props.countTaggedFriends - props.taggedFriends.length}
          </span>
          others
        </Show>
      </Show>

      <Show when={props.checkIn}>
        <span className="mx-1">
          at <span className="font-medium">{props.checkIn}</span>
        </span>
      </Show>
    </div>
  );
}
