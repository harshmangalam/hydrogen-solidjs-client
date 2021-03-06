import { createResource, Match, Switch } from "solid-js";
import PostCard from "../../components/posts/PostCard";
import PostCardSkeleton from "../../components/posts/PostCardSkeleton";
import Error from "../../components/shared/Error";
import { fetchUserPosts } from "../../services/user.service";

import { useParams } from "solid-app-router";

export default function ProfilePosts() {
  const params = useParams();
  const [response,{refetch}] = createResource(()=>params.userId, fetchUserPosts);

  return (
    <div className="relative">
      <div className="w-full xl:w-3/5 py-6 mx-auto">
        {/* posts */}
        <Switch>
          <Match when={response.loading}>
            <PostCardSkeleton />
          </Match>
          <Match when={response.error}>
            <Error
              error="server"
              name={response.error.name}
              message={response.error.message}
            />
          </Match>

          <Match when={response().data.data.posts.length === 0}>
            <Error
              error="empty"
              name="No Posts"
              message="No any posts available"
            />
          </Match>
          <Match when={response().data.data.posts}>
            <div className="max-w-lg mx-auto">
              <ul className="grid grid-cols-1 gap-4">
                <For each={response().data.data.posts}>
                  {(post) => (
                    <li>
                      <PostCard {...post} refetch={refetch} />
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
