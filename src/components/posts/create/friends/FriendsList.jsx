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
              <img
                src="https://avatars.githubusercontent.com/u/57381638?v=4"
                className="w-8 h-8 rounded-full flex-none"
              />
              <p className="font-medium">Harsh mangalam</p>
            </button>
          </li>
        )}
      </For>
    </ul>
  );
}
