import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostReaction from "./PostReaction";
import PostTag from "./PostTag";

export default function PostCard() {
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-700">
      <PostHeader />
      <PostMedia />
      <PostReaction />
      <PostContent />
      <div className="divide-y dark:divide-gray-700 space-y-4">
        <PostTag />
        <PostFooter />
      </div>
    </article>
  );
}
