import Image from "../ui/dataDisplay/Image";
import { Link } from "solid-app-router";
export default function GroupCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <Image
        src={props.profileImage}
        alt={props.name}
        className="aspect-square object-cover h-60 rounded-t-md"
      />

      <div className="py-4 px-4">
        <Link href={`/groups/${props.id}`} className="hover:underline">
          <h6 className="font-medium text-lg">{props.name}</h6>
        </Link>
        <Link href={`/groups/${props.id}/members`} className="hover:underline">
          {props._count.members} members
        </Link>
      </div>

      <div className="py-4 px-4">{props.children}</div>
    </article>
  );
}
