import { Match, Switch } from "solid-js";
import { useAuthState } from "../../../context/auth";

export default function Message(props) {
  const { currentUser } = useAuthState();
  return (
    <li
      className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow   px-4 py-2 max-w-[80%] md:max-w-[40%] self-start"
      classList={{
        "self-end bg-blue-500 dark:bg-blue-500 text-white":
          currentUser?.id === props.senderId,
      }}
    >
      <p>{props.content}</p>
      <div className="flex items-center justify-end space-x-2">
        <span className="text-sm">
          {props.createdAt}
        </span>
        <span className="text-md">
          <Switch>
            <Match when={props.status === "SENT"}>sent</Match>
            <Match when={props.status === "RECEIVED"}>received</Match>
            <Match when={props.status === "SEEN"}>seen</Match>
          </Switch>
        </span>
      </div>
    </li>
  );
}
