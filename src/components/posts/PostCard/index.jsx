import { Show } from "solid-js";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostReaction from "./PostReaction";

export default function PostCard(props) {
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-700 dark:text-white">
      <PostHeader
        author={props.author}
        createdAt={props.createdAt}
        audience={props.audience}
      />
      <Show when={props.image}>
        <img
          src={props.image}
          alt={props.firstName}
          className="aspect-auto w-full"
        />
      </Show>
      <PostReaction />
      <Show when={props.content}>
        <section class="px-4 py-4 flex flex-col space-y-2">
          <p class="text-[.9375rem] text-gray-700 dark:text-gray-200">
            {props.content}
          </p>
        </section>
      </Show>
      <div className="divide-y dark:divide-gray-700 space-y-4">
        <div></div>
        <PostFooter />
      </div>
    </article>
  );
}
