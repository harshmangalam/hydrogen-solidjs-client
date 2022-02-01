import { FaSolidHeart, FaSolidCommentAlt } from "solid-icons/fa";
import { HiSolidShare } from "solid-icons/hi";
export default function PostReaction() {
  return (
    <section className="pt-2 px-4 flex space-x-4 items-center">
      <button className="flex items-center space-x-1 hover:bg-red-100 rounded-full px-3 py-1">
        <span className="text-red-400">
          <FaSolidHeart />
        </span>
        <span className="text-sm">{12}</span>
      </button>
      <button className="flex items-center space-x-1 hover:bg-green-100 rounded-full px-3 py-1">
        <span className="text-green-400">
          <FaSolidCommentAlt />
        </span>
        <span className="text-sm">{12}</span>
      </button>
      <button className="flex items-center space-x-1 hover:bg-green-100 rounded-full px-3 py-1">
        <span className="text-blue-400">
          <HiSolidShare />
        </span>
        <span className="text-sm">{12}</span>
      </button>
    </section>
  );
}
