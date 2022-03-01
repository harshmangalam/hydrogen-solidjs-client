import { AiOutlineUser } from "solid-icons/ai";
import { FaCheckCircle } from "solid-icons/fa";
import { Show } from "solid-js";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
export default function FriendsList(props) {
  const isSelected = (user) => {
    return props.selectedFriends.find((u) => u.id === user.id);
  };
  const handleAddFriend = (user) => () => {
    if (!isSelected(user)) {
      props.addFriend(user);
    }
  };
  return (
    <ul className="flex flex-col space-y-2">
      <For each={props.friends}>
        {(user) => (
          <li>
            <button
              onClick={handleAddFriend(user)}
              className="flex items-center justify-between rounded-md  py-2 px-2  font-medium hover:bg-gray-200 dark:hover:bg-gray-700 w-full"
              classList={{ "bg-gray-200 dark:bg-gray-700": isSelected(user) }}
            >
              <div className="flex items-center space-x-2">
                <UserAvatar
                  src={user.profileImage}
                  className="w-10 h-10 rounded-full flex-none"
                />

                <p className="font-medium">{user.firstName}</p>
              </div>
              <Show when={isSelected(user)}>
                <FaCheckCircle className="text-2xl text-green-500" />
              </Show>
            </button>
          </li>
        )}
      </For>
    </ul>
  );
}
