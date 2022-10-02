import { FaHeart, FaSolidHeart } from "solid-icons/fa";
import { Show } from "solid-js";

export default function PostHeart(props) {
  return (
    <button
      class="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-white font-medium "
      onClick={[props.handleAddRemoveLike]}
      classList={{"text-blue-500 dark:text-blue-400":props.hasLike}}
    >
      <span className="text-xl">
        <Show when={props.hasLike} fallback={<FaHeart />}>
          <FaSolidHeart />
        </Show>
      </span>
      <span class="hidden md:block">Like</span>
    </button>
  );
}
