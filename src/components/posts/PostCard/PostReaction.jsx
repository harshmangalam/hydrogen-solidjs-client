import { FaSolidCommentAlt } from "solid-icons/fa";
import PostLikesUsersModal from "./PostLikesUsersModal";

export default function PostReaction(props) {
  return (
    <section className="pt-2 px-4 flex space-x-4 items-center dark:text-white">
      <PostLikesUsersModal
        postId={props.postId}
        countLikes={props.countLikes}
      />
      <button
        type="button"
        className="flex items-center space-x-1 hover:bg-green-100 dark:hover:bg-gray-600  rounded-full px-3 py-1"
        aria-label="Comments"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="text-green-400 dark:text-green-200">
          <FaSolidCommentAlt />
        </span>
        <span className="text-sm" aria-label="Comments count">
          {props.commentsLikes}
        </span>
      </button>
    </section>
  );
}
