import { IoClose } from "solid-icons/io";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import IconButton from "../../ui/inputs/IconButton";

export default function SelectedFriends(props) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <For each={props.friends}>
        {(user) => (
          <li className="flex items-center  justify-between  px-2 py-2 text-blue-500 font-medium border dark:border-gray-600 rounded-full">
            <div className="flex items-center space-x-2">
              <UserAvatar
                src={user.profileImage}
                className="w-6 h-6 rounded-full"
              />
              <p className="text-sm">{user.firstName}</p>
            </div>
            <IconButton
              className="w-6 h-6 text-sm"
              onClick={() => props.removeFriend(user.id)}
            >
              <IoClose />
            </IconButton>
          </li>
        )}
      </For>
    </ul>
  );
}
