import { createResource, For, Match, Show, Switch } from "solid-js";
import Empty from "../../components/shared/Empty";
import { fetchGroupNotifications } from "../../services";
export default function GroupNotifications() {
  const [resource] = createResource(fetchGroupNotifications);
  return (
    <div className="py-8">
      <Switch>
        <Match when={resource.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={resource.error}>
          <p>Error</p>
        </Match>

        <Match when={resource()}>
          <Show
            when={resource().data.data.notifications.length > 0}
            fallback={
              <Empty
                title="No Notifications"
                subTitle="You will be notify when somthing will happen in group"
              />
            }
          >
            <ul className="flex flex-col space-y-4">
              <For each={resource().data.data.notifications}>
                {(notification) => <li>{JSON.stringify(notification)}</li>}
              </For>
            </ul>
          </Show>
        </Match>
      </Switch>
    </div>
  );
}
