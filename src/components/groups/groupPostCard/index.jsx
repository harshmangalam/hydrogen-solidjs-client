import Footer from "./Footer";
import Header from "./Header";
import PostReaction from "./PostReaction";


export default function GroupPostCard(props) {
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-700">
      <Header
        author={props.author}
        createdAt={props.createdAt}
        groupName={props.group.name}
      />
      <img
        src={props.image}
        alt={props.author.firstName}
        className="aspect-square w-full"
      />
      <PostReaction />
      <section class="px-4 py-4 flex flex-col space-y-2">
        <p class="text-[.9375rem] text-gray-700 dark:text-gray-200">
          {props.content}
        </p>
      </section>
      <div className="divide-y dark:divide-gray-700 space-y-4">
        <Footer />
      </div>
    </article>
  );
}
