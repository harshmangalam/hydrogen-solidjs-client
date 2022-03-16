import { Portal } from "solid-js/web";
import { For, Show } from "solid-js";
import { IoClose } from "solid-icons/io";
import IconButton from "../inputs/IconButton";

export default function Dialog(props) {
  let cardRef;

  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      props.onClose();
    }
  }

  return (
    <Show when={props.open}>
      <Portal>
        <div
          className="fixed inset-0 bg-gray-900/70 z-50"
          onClick={[handleClickOutside]}
        >
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-white rounded shadow-xl sm:rounded-xl dark:bg-gray-800 dark:text-white"
            ref={cardRef}
          >
            {/* modal header  */}

            <div className="flex items-center justify-end py-2 px-4 ">
              <IconButton onClick={props.onClose}>
                <IoClose />
              </IconButton>
            </div>

            {/* modal body  */}

            <div className="py-4  text-center text-lg">{props.content}</div>

            <div className="py-4 flex items-center gap-2 justify-end px-4">
              <For each={props.actions}>
                {(action) => (
                  <button
                    className={`py-2 px-4 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md`}
                    onClick={[action.onClick]}
                    classList={{
                      "bg-red-400 text-white dark:bg-red-400 hover:bg-red-500 dark:hover:bg-red-500":
                        action.variant === "danger",
                    }}
                  >
                    {action.name}
                  </button>
                )}
              </For>
            </div>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
