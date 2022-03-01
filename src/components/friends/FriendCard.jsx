import UserAvatar from "../ui/dataDisplay/UserAvatar";

export default function FriendCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <div className="flex flex-col justify-between">
        <UserAvatar
          src={props.profileImage}
          className="w-full h-60 rounded-t-lg"
        />

        <div className="px-2 py-4 flex flex-col space-y-4">
          <h6 className="font-medium text-md text-center">
            {props.firstName + " " + props.lastName}
          </h6>
          <div>{props.children}</div>
        </div>
      </div>
    </article>
  );
}
