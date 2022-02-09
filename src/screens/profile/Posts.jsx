import PostCard from "../../components/posts/PostCard";
export default function Posts() {
  return (
    <div className="max-w-xl mx-auto">
      <ul className="grid grid-cols-1 gap-4">
        <For each={[...Array(3).keys()]}>
          {(post) => (
            <li>
              <PostCard />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
