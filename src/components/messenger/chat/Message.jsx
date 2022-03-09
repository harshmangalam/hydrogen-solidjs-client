import { Match, Show, Switch } from "solid-js";
import { useAuthState } from "../../../context/auth";
import { BsCheckLg, BsCheckAll } from "solid-icons/bs";

import dayjs from "dayjs";

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
      <div className="flex items-center justify-end space-x-1 mt-1">
        <span className="text-xs">
          {dayjs(props.createdAt).format("h:mm a")}
        </span>
        <Show when={currentUser?.id === props.senderId}>
          <span className="text-md">
            <Switch>
              <Match when={props.status === "SENT"}>
                <BsCheckLg />
              </Match>
              <Match when={props.status === "RECEIVED"}>
                <BsCheckAll />
              </Match>
              <Match when={props.status === "SEEN"}>
                <BsCheckAll className="text-blue-500" />
              </Match>
            </Switch>
          </span>
        </Show>
      </div>
    </li>
  );
}
