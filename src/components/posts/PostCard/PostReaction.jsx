import { FaSolidHeart, FaSolidCommentAlt } from "solid-icons/fa";

export default function PostReaction(props) {
  
  return (
    <section className="pt-2 px-4 flex space-x-4 items-center dark:text-white">
      <button className="flex items-center space-x-1 hover:bg-red-100 dark:hover:bg-gray-600 rounded-full px-3 py-1">
        <span className="text-red-400 dark:text-red-200">
          <FaSolidHeart />
        </span>
        <span className="text-sm">{props.countLikes}</span>
      </button>
      <button className="flex items-center space-x-1 hover:bg-green-100 dark:hover:bg-gray-600  rounded-full px-3 py-1">
        <span className="text-green-400 dark:text-green-200">
          <FaSolidCommentAlt />
        </span>
        <span className="text-sm">{props.commentsLikes}</span>
      </button>
    </section>
  );
}
