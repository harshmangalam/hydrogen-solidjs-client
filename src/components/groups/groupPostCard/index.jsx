import { Show } from "solid-js";
import Footer from "./Footer";
import Header from "./Header";
import Reactions from "./Reactions";

export default function GroupPostCard(props) {
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-800">
      <Header
        author={props.author}
        createdAt={props.createdAt}
        group={props.group}
        createdAt={props.createdAt}
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
      <Reactions />
      <Show when={props.content}>
        <section class="px-4 py-4 flex flex-col space-y-2">
          <p class="text-[.9375rem] text-gray-700 dark:text-gray-200">
            {props.content}
          </p>
        </section>
      </Show>
      <div className="divide-y dark:divide-gray-700 space-y-4">
        <div></div>
        <Footer />
      </div>
    </article>
  );
}
