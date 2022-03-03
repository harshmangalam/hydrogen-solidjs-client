import { FaHeart } from "solid-icons/fa";

export default function PostHeart(props) {
  return (
    <button
      class="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-white font-medium "
      onClick={[props.handleAddRemoveLike]}
    >
      <span className="text-xl">
        <FaHeart />
      </span>
      <span class="hidden md:block">Like</span>
    </button>
  );
}
