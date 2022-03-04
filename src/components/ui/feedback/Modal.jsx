import { Portal } from "solid-js/web";
import { Show } from "solid-js";
import { IoClose } from "solid-icons/io";
import IconButton from "../inputs/IconButton";
export default function Modal(props) {
  let cardRef;

  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      props.onClose();
    }
  }

  function handleComplete() {
    if (props.onDone) {
      props.onDone();
    }
    props.onClose();
  }

  return (
    <Show when={props.open}>
      <Portal>
        <div
          className="fixed inset-0 bg-gray-900/70 z-50"
          onClick={[handleClickOutside]}
        >
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl w-full bg-white shadow-xl rounded dark:bg-gray-800 dark:text-white"
            ref={cardRef}
          >
            {/* modal header  */}

            <div className="flex items-center justify-between py-4 px-4 ">
              <h6 className="font-bold text-xl flex-1 text-center">
                {props.title}
              </h6>

              <IconButton onClick={props.onClose}>
                <IoClose />
              </IconButton>
            </div>

            <hr className="dark:border-gray-600" />

            {/* modal body  */}

            <div className="py-4 overflow-y-scroll max-h-96 modal-scrollbar">
              {props.children}
            </div>
            <hr className="dark:border-gray-600" />

            <div className="py-4 flex items-center justify-end px-4">
              <Show when={typeof props.onDone !== "undefined"}>
                <button
                  className="py-2 px-4 bg-blue-500 text-white rounded-full"
                  onClick={[handleComplete]}
                >
                  Done
                </button>
              </Show>
            </div>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
