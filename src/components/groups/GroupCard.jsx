import { Link } from "solid-app-router";
import UserAvatarTag from "../shared/UserAvatarTag";
export default function GroupCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <img
        src={props.profileImage}
        alt={props.name}
        className="aspect-square object-cover w-full h-60 rounded-t-md"
      />

      <div className="py-4 px-4">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/groups/${props.id}`} className="hover:underline">
            <h6 className="font-medium text-lg line-clamp-1">{props.name}</h6>
          </Link>
          <UserAvatarTag {...props.admin} />
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Link
            href={`/groups/${props.id}/members`}
            className="hover:underline"
          >
            {props._count.members} members
          </Link>
        </div>
      </div>

      <div className="py-4 px-4">{props.children}</div>
    </article>
  );
}
