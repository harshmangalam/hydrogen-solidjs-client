import { createResource, Match, Show, Switch } from "solid-js";
import GroupPostCardSkeleton from "../../components/groups/GroupPostCardSkeleton";
import GroupPostCard from "../../components/groups/groupPostCard";
import Error from "../../components/shared/Error";
import Empty from "../../components/shared/Empty";
import { fetchGroupsFeed } from "../../services/group.service";
export default function GroupsFeed() {
  const [response] = createResource(fetchGroupsFeed);

  return (
    <Switch>
      <Match when={response.loading}>
        <GroupPostCardSkeleton />
      </Match>
      <Match when={response.error}>
        <Error name={Error} />
      </Match>

      <Match when={response()}>
        <Show
          when={response().data.data.posts.length}
          fallback={
            <Empty title="No Feed" subTitle="Join groups to see groups feed" />
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
  );
}
