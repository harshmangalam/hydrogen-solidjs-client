import { Link } from "solid-app-router";
import { FaCommentAlt } from "solid-icons/fa";

export default function PostComment(props) {
  return (
    <Link
      href={`/posts/${props.postId}`}
      class="tooltip px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-white font-medium "
    >
      <span className="text-xl ">
        <FaCommentAlt />
      </span>

      <span class="hidden md:block">Comment <span className="tooltiptext-comment">Comment Section</span></span>
    </Link>
  );
}
