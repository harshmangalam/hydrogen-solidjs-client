import { Show } from "solid-js";
import { useAuthState } from "../../../context/auth";
import { Link } from "solid-app-router";
import EditGroup from "./EditGroup";

export default function ProfileInfo(props) {
  const authState = useAuthState();
  return (
    <div className="flex flex-row justify-end">
      <div className="absolute w-full flex flex-col md:w-auto md:left-1/4 -bottom-44 text-center md:-bottom-24 md:text-left md:items-start">
        <div className="flex items-center space-x-4">
          <h3 className="text-3xl dark:text-white font-medium text-center">
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
      </div>
      <span className="inline-flex   px-3 my-3 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
        <div className="-ml-3 mr-1.5">
          <img
            src={props.admin.profileImage}
            alt="admin profile image"
            className="h-8 w-8  rounded-full "
          />
        </div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          <Link href={`/${props.admin.id}`}>{props.admin.firstName} </Link>
        </p>
      </span>
    </div>
  );
}
