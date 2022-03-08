import ChatHeader from "../../components/messenger/chat/Header";
import { BiSolidSend } from "solid-icons/bi";
import { VscCheckAll } from "solid-icons/vsc";
import {
  createResource,
  createSignal,
  For,
  Match,
  Show,
  Switch,
} from "solid-js";
import { useParams } from "solid-app-router";
import { fetchMessages, sendMessage } from "../../services/messenger.service";
import Message from "../../components/messenger/chat/Message";

export default function Chat() {
  const params = useParams();
  const [resource, { refetch }] = createResource(
    () => params.userId,
    fetchMessages
  );

  const [content, setContent] = createSignal("");

  const handleSendMessage = async () => {
    try {
      const { data } = await sendMessage(params.userId, {
        content: content(),
      });

      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="divide-y-2 absolute w-full h-full dark:divide-gray-600 bg-white dark:bg-gray-900">
      <Show when={resource()}>
        <ChatHeader {...resource().data.data.friend} />
      </Show>
      <div className="h-[90%] relative divide-y-2 dark:divide-gray-600">
        {/* messages  */}
        <div className="h-[90%] py-4 px-4 overflow-y-auto chat-scrollbar">
          <Switch>
            <Match when={resource.loading}>
              <p>Loading Messages...</p>
            </Match>
            <Match when={resource.error}>
              <p>Error</p>
            </Match>
            <Match when={resource()}>
              <ul className="flex flex-col space-y-4">
                <For each={resource().data.data.messages}>
                  {(message) => <Message {...message} />}
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
              value={content()}
              onInput={(e) => setContent(e.currentTarget.value)}
            />

            <Show when={content().trim().length}>
              <button
                onClick={handleSendMessage}
                className="text-2xl text-gray-500 dark:text-gray-400"
              >
                <BiSolidSend />
              </button>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}
