import { Show } from "solid-js";
import { FaHeart, FaCommentAlt } from "solid-icons/fa";
import { FiShare2 } from "solid-icons/fi";

export default function PostFooter() {
  return (
    <section class="py-2 px-4">
      <div class="grid grid-cols-3 gap-0  relative">
        <button class="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-white font-medium ">
          <span className="text-xl">
            <FaHeart />
          </span>
          <span class="hidden md:block">Like</span>
        </button>

        <button class="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-white font-medium ">
          <span className="text-xl ">
            <FaCommentAlt />
          </span>

          <span class="hidden md:block">Comment</span>
        </button>

        <button class="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-white font-medium ">
          <span className="text-xl">
            <FiShare2 />
          </span>
          <span class="hidden md:block">Share</span>
        </button>
      </div>
    </section>
  );
}
