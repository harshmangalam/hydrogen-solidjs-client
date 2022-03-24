import { mergeProps, Show } from "solid-js";
import usePost from "../../../hooks/post/usePost";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";
import PostHeart from "./PostHeart";
import PostReaction from "./PostReaction";
import PostTitle from "./PostTitle";

export default function PostCard(props) {
  const merged = mergeProps({ showDelete: true, showFooter: true }, props);
  const { handleAddRemoveLike, handleDeletePost } = usePost(props.refetch);
  return (
    <article className="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-700 dark:text-white">
      <PostHeader
        author={merged.author}
        createdAt={merged.createdAt}
        audience={merged.audience}
        handleDeletePost={() => handleDeletePost(merged.id)}
        showDelete={merged.showDelete}
      />
      <PostTitle
        feeling={merged.feeling}
        checkIn={merged.checkIn}
        author={merged.author}
        taggedFriends={merged.taggedFriends}
        countTaggedFriends={merged._count.taggedFriends}
      />
      <Show when={merged.image}>
        <img
          src={merged.image}
          alt={merged.firstName}
          className="aspect-auto w-full"
        />
      </Show>
      <div className="py-2">
        <PostReaction
          postId={merged.id}
          countLikes={merged._count.likes}
          commentsLikes={merged._count.comments}
        />
      </div>
      <Show when={merged.content}>
        <section className="px-4 py-4 flex flex-col space-y-2">
          <p className="text-[.9375rem] text-gray-700 dark:text-gray-200">
            {merged.content}
          </p>
        </section>
      </Show>
      <Show when={merged.showFooter}>
        <div className="divide-y dark:divide-gray-700 space-y-4">
          <div></div>
          <section className="py-2 px-4">
            <div
              classList={{ "grid-cols-1": !props.showComment }}
              className="grid grid-cols-2 gap-0  relative"
            >
              <PostHeart
                handleAddRemoveLike={() => handleAddRemoveLike(merged.id)}
                hasLike={merged.hasLike}
              />

              <PostComment postId={merged.id} />
            </div>
          </section>
        </div>
      </Show>
    </article>
  );
}
