import { Show } from "solid-js";
import { useAuthState } from "../../../context/auth";
import { Link } from "solid-app-router";
import EditGroup from "./EditGroup";

export default function ProfileInfo(props) {
  const authState = useAuthState();
  return (
    <div className="flex flex-row justify-end">
      <div className="absolute w-full flex flex-col md:w-auto md:left-1/4 -bottom-48 text-center md:-bottom-32 md:text-left md:items-start">
        <div className="flex items-center justify-center space-x-4">
          <h3 className="text-3xl dark:text-white font-medium text-center line-clamp-1">
            {props.name}
          </h3>
          <Show when={authState.currentUser?.id === props.admin.id}>
            <EditGroup info={{ name: props.name }} refetch={props.refetch} />
          </Show>
        </div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          {props.members} Members
        </p>

        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {props.privacy}
        </p>
        <div className="inline-flex justify-center mt-2">
          <Link href={`/${props.admin.id}`}>
            <div className="rounded-full flex items-center space-x-2 pr-2 font-medium bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
              <div className="w-6 h-6 rounded-full">
                <img
                  src={props.admin.profileImage}
                  alt={props.admin.firstName}
                  className="w-full h-full  rounded-full "
                />
              </div>
              <p className="h-6">{props.admin.firstName}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
