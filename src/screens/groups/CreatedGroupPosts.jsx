import { createResource, Match, Show, Switch } from "solid-js";
import GroupPostCardSkeleton from "../../components/groups/GroupPostCardSkeleton";
import GroupPostCard from "../../components/groups/groupPostCard";
import Error from "../../components/shared/Error";
import Empty from "../../components/shared/Empty";
import { fetchMyCreatedGroupPosts } from "../../services/group.service";
export default function GroupsFeed() {
  const [response] = createResource(fetchMyCreatedGroupPosts);

  return (
    <div>
      <div className="w-full xl:w-3/5 py-6 mx-auto">
        {/* posts */}
        <Switch>
          <Match when={response.loading}>
            <GroupPostCardSkeleton />
          </Match>
          <Match when={response.error}>
            <Error
              error="server"
              name={response.error.name}
              message={response.error.message}
            />
          </Match>

          <Match when={response()}>
            <Show
              when={response().data.data.posts.length}
              fallback={
                <Empty title="No Group Post" subTitle="You`ve not created any group post." />
              }
            >
              <div className="max-w-lg mx-auto">
                <ul className="grid grid-cols-1 gap-4">
                  <For each={response().data.data.posts}>
                    {(post) => (
                      <li>
                        <GroupPostCard {...post} />
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </Show>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
