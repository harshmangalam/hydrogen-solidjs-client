import ChatHeader from "../../components/messenger/chat/Header";
import { BiSolidSend } from "solid-icons/bi";
import { VscCheckAll } from "solid-icons/vsc";
import { createEffect, createSignal, For, onMount, Show } from "solid-js";
import { useParams } from "solid-app-router";
import Message from "../../components/messenger/chat/Message";
import { BsChevronDoubleDown } from "solid-icons/bs";
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

  createEffect(() => {
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
          className="h-[90%] py-4 px-4 overflow-y-auto chat-scrollbar "
          ref={msgDivRef}
        >
          <div className="flex flex-col space-y-4">
            <For each={messengerState.activeChat.messages}>
              {(message) => <Message {...message} />}
            </For>
          </div>
          <Show when={messengerState.activeChat.haveNewMsg}>
            <div className="fixed bottom-20 right-6">
              <button
                onClick={() => {
                  msgDivRef.scrollTop = msgDivRef.scrollHeight;
                }}
                className="grid place-items-center w-10 h-10 rounded-full bg-rose-500"
              >
                <BsChevronDoubleDown className="text-xl text-white" />
              </button>
            </div>
          </Show>
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
