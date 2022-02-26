import { FaSolidUserMinus,FaSolidUserPlus } from "solid-icons/fa";
import { createResource, For, Match, Show, Switch } from "solid-js";
import GroupCard from "../../components/groups/GroupCard";
import { fetchInvitedGroups } from "../../services/group.service";
import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";
import GroupCardSkeleton from "../../components/groups/GroupCardSkeleton";
import useGroups from "../../hooks/useGroups";

export default function GroupsSuggestions() {
  const [resource, { refetch }] = createResource(fetchInvitedGroups);
  const { handleLeaveGroup, loading } = useGroups(refetch);
  return (
    <div>
      <h4 className="text-2xl font-bold">Groups You`ve Invited</h4>

      <div className="py-4">
        <div className="my-8">
          <Switch>
            <Match when={resource.loading}>
              <GroupCardSkeleton />
            </Match>
            <Match when={resource.error}>
              <Error
                error="server"
                name={resource.error.name}
                message={resource.error.message}
              />
            </Match>
            <Match when={resource()}>
              <Show
                when={resource().data.data.groups.length}
                fallback={
                  <Empty
                    title="No Groups Suggestion"
                    subTitle="When new group will create.You will get groups suggestion"
                  />
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  <For each={resource().data.data.groups}>
                    {(group) => (
                      <GroupCard {...group}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <button
                            className="text-blue-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-blue-100 dark:bg-blue-500 justify-center space-x-2 hover:bg-blue-200 dark:hover:bg-blue-600 rounded-lg text-sm"
                            disabled={loading()}
                            onClick={[handleLeaveGroup, group.id]}
                          >
                            <Show
                              when={loading()}
                              fallback={
                                <>
                                  <FaSolidUserPlus size={18} />
                                  <span>Accept</span>
                                </>
                              }
                            >
                              leaving...
                            </Show>
                          </button>
                          <button
                            className="text-red-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-red-100 dark:bg-red-500 justify-center space-x-2 hover:bg-red-200 dark:hover:bg-red-600 rounded-lg text-sm"
                            disabled={loading()}
                            onClick={[handleLeaveGroup, group.id]}
                          >
                            <Show
                              when={loading()}
                              fallback={
                                <>
                                  <FaSolidUserMinus size={18} />
                                  <span>Remove</span>
                                </>
                              }
                            >
                              leaving...
                            </Show>
                          </button>
                        </div>
                      </GroupCard>
                    )}
                  </For>
                </div>
              </Show>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}
