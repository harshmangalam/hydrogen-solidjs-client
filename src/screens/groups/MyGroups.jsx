import { AiFillDelete } from "solid-icons/ai";
import { createResource, For, Match, Show, Switch } from "solid-js";
import GroupCard from "../../components/groups/GroupCard";
import GroupCardSkeleton from "../../components/groups/GroupCardSkeleton";
import { fetchMyCreatedGroups } from "../../services/group.service";
import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";
import useGroups from "../../hooks/useGroups";
export default function MyGroups() {
  const [resource, { refetch }] = createResource(fetchMyCreatedGroups);
  const { loading, handleDeleteGroup } = useGroups(refetch);
  return (
    <Switch>
      <Match when={resource.loading}>
        <GroupCardSkeleton />
      </Match>
      <Match when={resource.error}>
        <Error name="Error" />
      </Match>
      <Match when={resource()}>
        <Show
          when={resource().data.data.groups.length}
          fallback={
            <Empty
              title="No Groups Created"
              subTitle="You`ve not created any groups Yet. Create your first group"
            />
          }
        >
          <h4 className="text-2xl font-bold">Groups You`ve Created</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
            <For each={resource().data.data.groups}>
              {(group) => (
                <GroupCard {...group}>
                  <button
                    className="text-red-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-red-100 dark:bg-red-400 justify-center space-x-2 hover:bg-red-200 dark:hover:bg-red-500 rounded text-sm"
                    disabled={loading()}
                    onClick={[handleDeleteGroup, group.id]}
                  >
                    <Show when={!loading()} fallback={<p>deleting...</p>}>
                      <AiFillDelete size={18} />
                      <span>Delete group</span>
                    </Show>
                  </button>
                </GroupCard>
              )}
            </For>
          </div>
        </Show>
      </Match>
    </Switch>
  );
}
