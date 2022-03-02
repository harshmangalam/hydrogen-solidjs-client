import { IoClose } from "solid-icons/io";
import IconButton from "../../ui/inputs/IconButton";

export default function SelectedFriends(props) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <For each={props.friends}>
        {(user) => (
          <li className="flex items-center  justify-between  font-medium border-2 border-blue-500 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-white">
            <div className="flex items-center space-x-2">
              <img
                src={user.profileImage}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm">{user.firstName}</p>
            </div>
            <IconButton
              className="w-8 h-8 text-sm"
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
