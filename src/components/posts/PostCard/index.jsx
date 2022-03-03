import { Show } from "solid-js";
import usePost from "../../../hooks/post/usePost";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";
import PostHeart from "./PostHeart";
import PostReaction from "./PostReaction";
import PostTitle from "./PostTitle";

export default function PostCard(props) {
  const { handleAddRemoveLike } = usePost(props.refetch);
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-700 dark:text-white">
      <PostHeader
        author={props.author}
        createdAt={props.createdAt}
        audience={props.audience}
      />
      <PostTitle
        feeling={props.feeling}
        checkIn={props.checkIn}
        author={props.author}
        taggedFriends={props.taggedFriends}
        countTaggedFriends={props._count.taggedFriends}
      />
      <Show when={props.image}>
        <img
          src={props.image}
          alt={props.firstName}
          className="aspect-auto w-full"
        />
      </Show>
      <PostReaction countLikes={props._count.likes} />
      <Show when={props.content}>
        <section class="px-4 py-4 flex flex-col space-y-2">
          <p class="text-[.9375rem] text-gray-700 dark:text-gray-200">
            {props.content}
          </p>
        </section>
      </Show>
      <div className="divide-y dark:divide-gray-700 space-y-4">
        <div></div>
        <section class="py-2 px-4">
          <div class="grid grid-cols-2 gap-0  relative">
            <PostHeart
              handleAddRemoveLike={() => handleAddRemoveLike(props.id)}
              hasLike={props.hasLike}
            />
            <PostComment />
          </div>
        </section>
      </div>
    </article>
  );
}
