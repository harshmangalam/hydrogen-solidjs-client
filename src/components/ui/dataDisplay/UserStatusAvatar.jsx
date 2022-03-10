export default function UserStatusAvatar(props) {
  return (
    <div className={`relative ${props.divClass}`}>
      <img
        src={props.profileImage}
        alt={props.firstName}
        className={`w-10 h-10 rounded-full ${props.imgClass}`}
        title={props.firstName}
      />
      <div className={`absolute -right-1 bottom-0 ${props.statusClass}`}>
        <Switch>
          <Match when={props?.status === "ACTIVE"}>
            <div className="h-4 w-4 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
          </Match>
          <Match when={props?.status === "IDLE"}>
            <div className="h-4 w-4 bg-yellow-500 rounded-full border-2 border-white dark:border-black"></div>
          </Match>
          <Match when={props?.status === "LOGOUT"}>
            <div className="h-4 w-4 bg-red-500 rounded-full border-2 border-white dark:border-black"></div>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
