import { Link } from "solid-app-router";
export default function GroupCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <img
        src={props.profileImage}
        alt={props.name}
        className="aspect-square object-cover w-full h-60 rounded-t-md"
      />

      <div className="py-4 px-4">
        <Link href={`/groups/${props.id}`} className="hover:underline">
          <h6 className="font-medium text-lg">{props.name}</h6>
        </Link>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Link
            href={`/groups/${props.id}/members`}
            className="hover:underline"
          >
            {props._count.members} members
          </Link>
          <Link
            href={`/${props.admin.id}`}
            className="flex items-center gap-1 hover:underline"
          >
            <img
              src={props.admin.profileImage}
              alt={props.admin.firstName}
              className="aspect-square object-cover w-4 h-4 rounded-full"
            />
            <span>{props.admin.firstName}</span>
          </Link>
        </div>
      </div>

      <div className="py-4 px-4">{props.children}</div>
    </article>
  );
}
