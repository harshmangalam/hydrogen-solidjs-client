import { For, Show } from "solid-js";

export default function PostTitle(props) {
  return (
    <div
      classList={{
        "px-4 bg-gray-200 dark:bg-gray-700 py-2":
          props.feeling || props.checkIn || props.countTaggedFriends,
      }}
    >
      <Show when={props.feeling || props.checkIn || props.countTaggedFriends}>
        <span className="font-medium">Harsh Mangalam</span>
      </Show>
      <Show when={props.feeling}>
        <span className="mx-1">is feeling</span>
        <span className="font-medium">{props.feeling}</span>
      </Show>

      <Show when={props.countTaggedFriends}>
        <span className="mx-1"> with</span>
        <For each={props.taggedFriends}>
          {(friend) => (
            <span className="font-medium mx-1">{friend.firstName},</span>
          )}
        </For>
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
