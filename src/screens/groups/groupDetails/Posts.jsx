import { createResource, Match, Show, Switch } from "solid-js";
import GroupPostCardSkeleton from "../../../components/groups/GroupPostCardSkeleton";
import GroupPostCard from "../../../components/groups/groupPostCard";
import Error from "../../../components/shared/Error";
import Empty from "../../../components/shared/Empty";
import { fetchGroupPosts } from "../../../services";
import { useParams } from "solid-app-router";
export default function GroupPosts() {
  const params = useParams();
  const [response, { refetch }] = createResource(
    () => params.groupId,
    fetchGroupPosts
  );

  return (
    <div className="relative py-4">
      <Switch>
        <Match when={response.loading}>
          <GroupPostCardSkeleton />
        </Match>
        <Match when={response.error}>
          <Error name={"Error"} />
        </Match>

        <Match when={response()}>
          <Show
            when={response().data.data.posts.length}
            fallback={
              <Empty
                title="No Feeds"
                subTitle="Join groups to see groups feed"
              />
            }
          >
            <div className="max-w-lg mx-auto">
              <ul className="grid grid-cols-1 gap-4">
                <For each={response().data.data.posts}>
                  {(post) => (
                    <li>
                      <GroupPostCard {...post} refetch={refetch} />
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </Show>
        </Match>
      </Switch>
    </div>
  );
}
