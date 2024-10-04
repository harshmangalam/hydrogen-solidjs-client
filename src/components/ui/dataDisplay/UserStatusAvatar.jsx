import { mergeProps, Show } from "solid-js";

export default function UserStatusAvatar(props) {
  const merged = mergeProps({ imgClass: "w-10 h-10", showStatus: true }, props);
  console.log(props);
  return (
    <div className={`relative ${merged.divClass || ""}`}>
      <img
        src={merged.profileImage}
        alt={merged.alt}
        className={`rounded-full ${merged.imgClass}`}
        classList={{
          "bg-green-200 dark:bg-green-400": props.status === "ACTIVE",
          "bg-red-200 dark:bg-red-400": props.status === "LOGOUT",
        }}
        title={merged.firstName}
      />
      <Show when={merged.showStatus}>
        <div
          className={`absolute -right-1 bottom-0 ${merged.statusClass}`}
          title={merged.status}
        >
          <Switch>
            <Match when={merged?.status === "ACTIVE"}>
              <div className="h-4 w-4 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
            </Match>
            <Match when={merged?.status === "IDLE"}>
              <div className="h-4 w-4 bg-yellow-500 rounded-full border-2 border-white dark:border-black"></div>
            </Match>
            <Match when={merged?.status === "LOGOUT"}>
              <div className="h-4 w-4 bg-red-500 rounded-full border-2 border-white dark:border-black"></div>
            </Match>
          </Switch>
        </div>
      </Show>
    </div>
  );
}
