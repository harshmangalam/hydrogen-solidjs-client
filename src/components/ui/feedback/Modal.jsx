import { Portal } from "solid-js/web";
import { mergeProps, Show } from "solid-js";
import { IoClose } from "solid-icons/io";
import IconButton from "../inputs/IconButton";

export default function Modal(props) {
  const merged = mergeProps({ showFooter: true }, props);
  let cardRef;

  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      merged.onClose();
    }
  }

  function handleComplete() {
    if (typeof merged.onDone !== "undefined") {
      merged.onDone();
    }
    merged.onClose();
  }

  return (
    <Show when={merged.open}>
      <Portal>
        <div
          className="fixed inset-0 bg-gray-900/70 z-50"
          onClick={[handleClickOutside]}
        >
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl w-full bg-white rounded shadow-xl sm:rounded-xl dark:bg-gray-800 dark:text-white"
            ref={cardRef}
          >
            {/* modal header  */}

            <div className="flex items-center justify-between py-4 px-4 ">
              <h6 className="font-bold text-xl flex-1 text-center">
                {merged.title}
              </h6>

              <IconButton onClick={merged.onClose}>
                <IoClose />
              </IconButton>
            </div>

            <hr className="dark:border-gray-600" />

            {/* modal body  */}

            <div className="py-4 overflow-y-scroll max-h-96 modal-scrollbar">
              {merged.children}
            </div>

            {/* modal footer */}

            <Show when={merged.showFooter}>
              <hr className="dark:border-gray-600" />

              <div className="py-4 flex items-center gap-2 justify-end px-4">
                <button
                  className="py-2 px-4 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
                  onClick={[merged.onClose]}
                >
                  Close
                </button>
                <button
                  className="py-2 px-4 bg-blue-500 text-white rounded-md"
                  onClick={[handleComplete]}
                >
                  Done
                </button>
              </div>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
