import MainBody from "../../components/settings/MainBody";
import { ImMobile } from "solid-icons/im";
import { BiLaptop } from "solid-icons/bi";

import { createResource, For, Match, Show, Switch } from "solid-js";
import { fetchAccountsLoggedin } from "../../services";
export default function AccountActivity() {
  const [resource] = createResource(fetchAccountsLoggedin);
  return (
    <MainBody title="Account Activity">
      <Switch>
        <Match when={resource()}>
          <ul className="flex flex-col gap-4 max-w-lg mx-auto">
            <For each={resource().data.data.accountsLoggedin}>
              {(account) => (
                <li className="flex items-start space-x-4 px-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
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

                    <div className="mt-1">
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
