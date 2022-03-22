import { Show } from "solid-js";
import Header from "./Header";
import PostHeart from "./PostHeart";
import Reactions from "./Reactions";
import useGroups from "../../../hooks/useGroups";
export default function GroupPostCard(props) {
  const { handleAddRemoveGroupPostLikes, handleDeletePost } = useGroups(
    props.refetch
  );
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-800">
      <Header
        author={props.author}
        createdAt={props.createdAt}
        group={props.group}
        handleDeletePost={() => handleDeletePost(props.group.id, props.id)}
      />
      <Show when={props.image}>
        <div className="dark:bg-gray-700 bg-gray-200">
          <img
            src={props.image}
            alt={props.author.firstName}
            className="aspect-square w-full object-contain"
          />
        </div>
      </Show>
      <Reactions countLikes={props._count.likes} />
      <Show when={props.content}>
        <section class="px-4 py-4 flex flex-col space-y-2">
          <p class="text-[.9375rem] text-gray-700 dark:text-gray-200">
            {props.content}
          </p>
        </section>
      </Show>
      <div className="divide-y dark:divide-gray-700 space-y-4">
        <div></div>
        <div className="py-2 grid grid-cols-1 px-4">
          <PostHeart
            handleAddRemoveGroupPostLikes={() =>
              handleAddRemoveGroupPostLikes(props.group.id, props.id)
            }
            hasLike={props.hasLike}
          />
        </div>
      </div>
    </article>
  );
}
