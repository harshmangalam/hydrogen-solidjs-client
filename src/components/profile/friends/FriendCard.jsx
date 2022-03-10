import { BsThreeDots } from "solid-icons/bs";
import { Link } from "solid-app-router";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
export default function FriendCard(props) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4 dark:border-gray-700">
      <section className="flex items-center space-x-4">
        <UserAvatar
          src={props.profileImage}
          className="rounded-full w-16 h-16 flex-none"
        />

        <div className="flex flex-col space-y-0">
          <Link
            href={`/${props.id}`}
            className="text-gray-600 dark:text-gray-300 text-sm hover:underline"
          >
            <h6 className="text-lg font-medium">{props.firstName}</h6>
          </Link>
          <span className="text-sm">{props._count.myFriends} friends</span>
        </div>
      </section>
    </div>
  );
}
