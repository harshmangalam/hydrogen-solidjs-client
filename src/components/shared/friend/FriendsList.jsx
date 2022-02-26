import { AiOutlineUser } from 'solid-icons/ai'
import { Show } from "solid-js";

export default function FriendsList(props) {
  return (
    <ul className="flex flex-col">
      <For each={props.friendsStore.friends}>
        {(user) => (
          <li>
            <button
              onClick={[props.addFriend, user]}
              className="flex items-center space-x-2 rounded-md  py-2 px-2  font-medium hover:bg-gray-200 dark:hover:bg-gray-700 w-full"
            >
              <Show
                when={user.profilePic}
                fallback={<AiOutlineUser className="w-5 h-5" />}
              >
                <img
                  src={props.profilePic}
                  className="w-8 h-8 rounded-full flex-none"
                />
              </Show>
              <p className="font-medium">{user.firstName}</p>
            </button>
          </li>
        )}
      </For>
    </ul>
  );
}
