import ChatHeader from "../../components/messenger/chat/Header";
import { BiSolidSend } from "solid-icons/bi";
import { VscCheckAll } from "solid-icons/vsc";
import { createSignal, For, onMount, Show } from "solid-js";
import { useParams } from "solid-app-router";
import Message from "../../components/messenger/chat/Message";
import {
  useMessengerDispatch,
  useMessengerState,
} from "../../context/messenger";

export default function Chat() {
  const params = useParams();
  const messengerState = useMessengerState();
  const messengerDispatch = useMessengerDispatch();
  const [content, setContent] = createSignal("");

  let msgDivRef = null;

  onMount(() => {
    messengerDispatch.handleFetchMessages({
      getFriendId: () => params?.userId || null,
      msgDivRef,
    });
  });

  return (
    <div className="divide-y-2 absolute w-full h-full dark:divide-gray-600 bg-white dark:bg-gray-900">
      <ChatHeader />

      <div className="h-[90%] relative divide-y-2 dark:divide-gray-600">
        {/* messages  */}
        <div
          className="h-[90%] py-4 px-4 overflow-y-auto chat-scrollbar"
          ref={msgDivRef}
        >
          <ul className="flex flex-col space-y-4">
            <For each={messengerState.messages}>
              {(message) => <Message {...message} />}
            </For>
          </ul>
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
                onClick={() =>
                  messengerDispatch.handleSendMessage({
                    friendId: params.userId,
                    payload: { content: content() },
                    msgDivRef,
                  })
                }
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
