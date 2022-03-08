import ChatHeader from "../../components/messenger/chat/Header";
import { BiSolidSend } from "solid-icons/bi";
import { VscCheckAll } from "solid-icons/vsc";
import { createResource, For, Match, Show, Switch } from "solid-js";
import { useParams } from "solid-app-router";
import { fetchMessages } from "../../services/messenger.service";
import { useAuthState } from "../../context/auth";

export default function Chat() {
  const params = useParams();
  const [resource] = createResource(() => params.userId, fetchMessages);
  const { currentUser } = useAuthState();
  return (
    <div className="divide-y-2 absolute w-full h-full dark:divide-gray-600 bg-white dark:bg-gray-900">
      <Show when={resource()}>
        <ChatHeader {...resource().data.data.friend} />
      </Show>
      <div className="h-[90%] relative divide-y-2 dark:divide-gray-600">
        {/* messages  */}
        <div className="h-[90%] py-4 px-4">
          <Switch>
            <Match when={resource()}>
              <ul className="flex flex-col space-y-4">
                <For each={resource().data.data.messages}>
                  {(message) => {
                    <Show
                      when={currentUser.id === message.senderId}
                      fallback={
                        <li className="bg-blue-500 px-4 py-4 max-w-[80%] md:max-w-[40%] self-end rounded-lg shadow text-white"></li>
                      }
                    >
                      <li className="bg-gray-100 rounded-lg shadow dark:bg-gray-700 px-4 py-4 max-w-[80%] md:max-w-[40%] self-start">
                        <p>{message.content}</p>
                        <div className="flex items-center justify-end space-x-2">
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {message.createdAt}
                          </span>
                          <span className="text-md">
                            <Switch>
                              <Match when={message.status === "SENT"}>
                                sent
                              </Match>
                              <Match when={message.status === "RECEIVED"}>
                                received
                              </Match>
                              <Match when={message.status === "SEEN"}>
                                seen
                              </Match>
                            </Switch>
                          </span>
                        </div>
                      </li>
                    </Show>;
                  }}
                </For>
              </ul>
            </Match>
          </Switch>
        </div>

        {/* chat input box  */}
        <div className="h-[10%] px-4 py-2">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="content"
              id="content"
              className="dark:bg-gray-700 w-full flex-1"
            />

            <div className="">
              <button className="text-2xl text-gray-500 dark:text-gray-400">
                <BiSolidSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
