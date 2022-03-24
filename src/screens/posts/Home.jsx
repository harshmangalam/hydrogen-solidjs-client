import { createResource, Match, Show, Switch } from "solid-js";
import PostCard from "../../components/posts/PostCard";
import PostCardSkeleton from "../../components/posts/PostCardSkeleton";
import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";
import { fetchFeedPosts } from "../../services/post.service";
export default function Home() {
  const [resource, { refetch }] = createResource(fetchFeedPosts);

  return (
    <Switch>
      <Match when={resource.loading}>
        <PostCardSkeleton />
      </Match>
      <Match when={resource.error}>
        <Error name="Error" />
      </Match>

      <Match when={resource()}>
        <Show
          when={resource().data.data.posts.length}
          fallback={<Empty title="No Posts" />}
        >
          <div className="max-w-lg mx-auto">
            <ul className="grid grid-cols-1 gap-4">
              <For each={resource().data.data.posts}>
                {(post) => (
                  <li>
                    <PostCard {...post} refetch={refetch} />
                  </li>
                )}
              </For>
            </ul>
          </div>
        </Show>
      </Match>
    </Switch>
  );
}
