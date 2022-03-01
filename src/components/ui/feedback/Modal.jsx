import { Portal } from "solid-js/web";
import { Show } from "solid-js";
import { IoClose } from "solid-icons/io";
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
            className="fixed top-1/2 left-1/2 max-h-96 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-white shadow-xl rounded-md dark:bg-gray-800 dark:text-white overflow-y-scroll custom-scrollbar my-10"
            ref={cardRef}
          >
            {/* modal header  */}

            <div className="flex items-center justify-between py-2 px-4">
              <h6 className="font-bold text-xl flex-1 text-center">
                {props.title}
              </h6>

              <button
                type="button"
                className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-6 h-6 text-xl text-black dark:text-white grid place-items-center"
                onClick={[props.onClose]}
              >
                <IoClose />
              </button>
            </div>

            <hr className="dark:border-gray-600" />

            {/* modal body  */}

            <div className="py-2">{props.children}</div>
            <hr className="dark:border-gray-600" />

            <div className="py-2 flex items-center justify-end px-4">
              <button
                className="py-2 px-4 bg-blue-500 dark:bg-blue-700 text-white rounded-md"
                onClick={[handleComplete]}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
