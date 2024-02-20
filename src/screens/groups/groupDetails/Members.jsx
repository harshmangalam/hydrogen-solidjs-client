import { createResource, For } from "solid-js";
import Error from "../../../components/shared/Error";
import Empty from "../../../components/shared/Empty";
import AppLoader from "../../../components/shared/AppLoader";
import { useParams } from "solid-app-router";
import { fetchGroupMembers } from "../../../services";
import { Link } from "solid-app-router";
export default function MyFriends() {
  const params = useParams();
  const [response] = createResource(() => params.groupId, fetchGroupMembers);

  return (
    <div className="relative py-4">
      <Switch>
        <Match when={response.loading}>
          <AppLoader />
        </Match>
        <Match when={response.error}>
          <Error name="Error" />
        </Match>

        <Match when={response().data.data.members.length === 0}>
          <Empty title="No Members" />
        </Match>
        <Match when={response().data.data.members.length !== 0}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <For each={response().data.data.members}>
              {(user) => (
                <li className="rounded-md p-4 bg-white dark:bg-gray-800 shadow-md flex flex-col space-y-4">
                  <img
                    src={user.profileImage}
                    alt={user.firstName}
                    className="w-full  h-44 object-cover aspect-square rounded-md"
                  />
                  <Link href={`/${user.id}`} className="hover:underline">
                    <h6 className="text-center text-lg font-semibold">
                      {user.firstName}
                    </h6>
                  </Link>
                </li>
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </div>
  );
}
