import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostTag from "./PostTag";

export default function PostCard() {
  return (
    <article class="rounded-lg shadow bg-white border-2">
      <PostHeader />
      <PostMedia />
      <PostContent />
      <PostTag />
      <PostFooter />
    </article>
  );
}
