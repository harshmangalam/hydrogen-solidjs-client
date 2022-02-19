import PostCard from "../../components/posts/PostCard";

export default function FriendsPosts() {
  return (
    <div>
      <div className="w-full xl:w-3/5 py-6 mx-auto">
        {/* posts */}
        <div className="max-w-lg mx-auto">
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
      </div>
    </div>
  );
}
