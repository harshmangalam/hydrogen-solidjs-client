import { BiSearch } from "solid-icons/bi";

export default function SearchFriends(props) {
  return (
    <div className="relative flex-grow">
      <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 dark:text-white" />
      <input
        className="focus:outline-none w-full text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-100 rounded-full py-2 pl-10 bg-gray-100 dark:bg-gray-700"
        type="text"
        aria-label="Search for friends"
        placeholder="Search for friends"
        value={props.friendsStore.search}
        onInput={[props.handleInput]}
        onBlur={[props.searchFriends]}
      />
    </div>
  );
}
