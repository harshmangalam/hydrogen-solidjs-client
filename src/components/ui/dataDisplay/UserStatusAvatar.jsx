import { mergeProps } from "solid-js";

export default function UserStatusAvatar(props) {
  const merged = mergeProps({imgClass:"w-10 h-10"},props)
  return (
    <div className={`relative ${merged.divClass}`}>
      <img
        src={merged.profileImage}
        alt={merged.firstName}
        className={`rounded-full ${merged.imgClass}`}
        title={merged.firstName}
      />
      <div className={`absolute -right-1 bottom-0 ${merged.statusClass}`}>
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
    </div>
  );
}
