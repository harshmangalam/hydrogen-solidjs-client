import { AiOutlineUsergroupAdd,AiOutlineUsergroupDelete } from 'solid-icons/ai'
import { createResource, For, Match, Show, Switch } from "solid-js";
import GroupCard from "../../components/groups/GroupCard";
import { fetchInvitedGroups } from "../../services/group.service";
import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";
import GroupCardSkeleton from "../../components/groups/GroupCardSkeleton";
import useGroups from "../../hooks/useGroups";

export default function GroupsSuggestions() {
  const [resource, { refetch }] = createResource(fetchInvitedGroups);
  const { loading, handleAcceptGroupInvitation, handleRejectGroupInvitation } =
    useGroups(refetch);
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
                    title="No Groups Invitation"
                    subTitle="You have no group join invitation"
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
                            onClick={[handleAcceptGroupInvitation, group.id]}
                          >
                            <Show
                              when={loading()}
                              fallback={
                                <>
                                  <AiOutlineUsergroupAdd size={24} />
                                  <span>Accept</span>
                                </>
                              }
                            >
                              accepting...
                            </Show>
                          </button>
                          <button
                            className="text-red-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-red-100 dark:bg-red-500 justify-center space-x-2 hover:bg-red-200 dark:hover:bg-red-600 rounded-lg text-sm"
                            disabled={loading()}
                            onClick={[handleRejectGroupInvitation, group.id]}
                          >
                            <Show
                              when={loading()}
                              fallback={
                                <>
                                  <AiOutlineUsergroupDelete size={24} />
                                  <span>Reject</span>
                                </>
                              }
                            >
                              rejecting...
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
