import { Link } from "solid-app-router";
import { Show } from "solid-js";
import UserStatusAvatar from "../../ui/dataDisplay/UserStatusAvatar";
import { getRelativeTime } from "../../../utils/dateTime";
import { useAuthState } from "../../../context/auth";
export default function FriendItem(props) {
  const authState = useAuthState();

  return (
    <Link
      href={`/messenger/${props.id}`}
      className="flex space-x-2  rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-2 py-2"
      classList={{
        "bg-gray-100 dark:bg-gray-700": props.id === props?.activeFriend?.id,
      }}
    >
      <UserStatusAvatar
        profileImage={props?.profileImage}
        firstName={props?.firstName}
        status={props?.status}
        lastSeen={props?.lastSeen}
        divClass="flex-none"
        imgClass="w-16 h-16"
        statusClass="top-0"
      />

      <div className="flex flex-col items-start space-y-0 w-full">
        <h6 className="text-lg">{props.firstName}</h6>
        <Show
          when={props.messagesReceived?.length || props.messagesSent?.length}
        >
          <div className="flex items-center justify-between w-full">
            <p className="text-gray-600 dark:text-gray-400">
              {props.messagesReceived[0]?.content.slice(0, 30) ||
                props.messagesSent[0]?.content.slice(0, 30)}
              <Show
                when={
                  props.messagesSent[0]?.content.length >= 30 ||
                  props.messagesReceived[0]?.content.length >= 30
                }
              >
                <span> ...</span>
              </Show>
            </p>
            <p className="flex-none text-xs">
              {getRelativeTime(props.messagesReceived[0]?.createdAt) ||
                getRelativeTime(props.messagesSent[0]?.createdAt)}
            </p>
          </div>
        </Show>
      </div>
    </Link>
  );
}
