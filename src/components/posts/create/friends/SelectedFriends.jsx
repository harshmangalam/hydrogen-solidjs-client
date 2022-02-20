export default function SelectedFriends(props) {
  return (
    <div className="mt-4 flex flex-col space-y-2">
      <h6 className="text-gray-500 dark:text-gray-200 font-medium text-sm">
        {props.title}
      </h6>
      <div className="border w-full rounded-md p-4 dark:border-gray-600">
        <ul className="flex items-center flex-wrap justify-center gap-2">
          <For each={props.friends}>
            {(user) => (
              <li className="flex items-center space-x-2 bg-blue-100 rounded-md px-2 py-1 text-blue-500 font-medium dark:bg-gray-700">
                <p>{user.name}</p>
                <button
                  type="button"
                  className="rounded-full hover:bg-blue-200 dark:hover:bg-gray-600 w-5 h-5 grid place-items-center"
                  onClick={[props.removeTaggedFriend, user.id]}
                >
                  <IoClose />
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}
