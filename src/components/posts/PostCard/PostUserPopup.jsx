import UserAvatar from "../../ui/dataDisplay/UserAvatar";

/* TODO - add email and last seen when response has the data  */
export default function PostUserPopup(props) {
  return (
    <div
      className="p-4 rounded-lg shadow bg-white space-y-4
    dark:bg-gray-800 border-2 dark:border-gray-700 dark:text-white"
    >
      <div className="flex gap-4">
        <div className="relative">
          <UserAvatar src={props.user.profileImage} alt={props.user.firstName} className="w-12 h-12 rounded-full" />
        </div>
        <div>
          <h6 className="text-lg font-semibold">{props.user.firstName}</h6>
          {/* <span>{props.user.email}</span> */}
        </div>
      </div>
      {/* {props.user.isLoggedOn ? (
        <div className="flex items-center gap-2">
          <span className="rounded-full h-3 w-3 bg-green-500 animate-pulse"></span>
          <span className="text-xs text-gray-400">Online now</span>
        </div>
      ) : (
        <span className="text-xs text-gray-400">Last seen: 10 hours ago</span>
      )} */}
    </div>
  );
}
