import { Link } from "solid-app-router";

export default function UserAvatarTag(props) {
  return (
    <Link className="flex-none" href={`/${props.id}`}>
      <span className="flex gap-1 pr-2 items-center  rounded-full bg-white border dark:bg-gray-900  dark:border-gray-600">
        <span className="h-5 w-5">
          <img
            src={props.profileImage}
            className="w-full h-full rounded-full"
          />
        </span>
        <span className=" text-sm"> {props.firstName}</span>
      </span>
    </Link>
  );
}
