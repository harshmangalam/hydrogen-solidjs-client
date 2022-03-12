import MainBody from "../../components/settings/MainBody";
import { ImMobile } from "solid-icons/im";
import { BiLaptop } from "solid-icons/bi";
import { useUIDispatch } from "../../context/ui";
import { createResource, For, Match, Show, Switch } from "solid-js";
import { clearLoginHistory, fetchLoginHistory } from "../../services";
export default function AccountActivity() {
  const [resource, { refetch }] = createResource(fetchLoginHistory);
  const { addSnackbar } = useUIDispatch();
  const handleClearLoginHistory = async () => {
    try {
      const { data } = await clearLoginHistory();
      refetch();
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  };
  return (
    <MainBody title="Login History">
      <Switch>
        <Match when={resource()}>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded-full"
              onClick={[handleClearLoginHistory]}
            >
              Clear Login session
            </button>
          </div>
          <ul className="flex flex-col gap-4 max-w-lg mx-auto mt-4">
            <For each={resource().data.data.loginHistory}>
              {(account) => (
                <li
                  className="flex items-start space-x-4 px-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  classList={{
                    "bg-purple-200 dark:bg-purple-800": account.isCurrent,
                  }}
                >
                  <div className="flex-none h-16 w-16 bg-purple-500 text-white rounded-full grid place-items-center">
                    <Show
                      when={true}
                      fallback={<BiLaptop className="text-2xl" />}
                    >
                      <ImMobile className="text-2xl" />
                    </Show>
                  </div>
                  <div>
                    <p className="flex space-x-2">
                      {account?.browser?.description}
                    </p>
                    <p className="flex space-x-2 text-sm">
                      <span>{account?.os?.family}</span>
                      <span>{account?.os?.architecture}</span>
                      <span>{account?.os?.version}</span>
                    </p>

                    <div className="mt-1 flex gap-2">
                      <Show
                        when={account.isActive}
                        fallback={
                          <span className="px-4 text-sm rounded-full py-1 bg-rose-500 text-white">
                            Not Active
                          </span>
                        }
                      >
                        <span className="px-4 text-sm rounded-full py-1 bg-green-500 text-white">
                          Active
                        </span>
                      </Show>

                      <Show when={account.isCurrent}>
                        <span className="px-4 text-sm rounded-full py-1 bg-blue-500 text-white">
                          Current
                        </span>
                      </Show>
                    </div>
                  </div>
                </li>
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </MainBody>
  );
}
