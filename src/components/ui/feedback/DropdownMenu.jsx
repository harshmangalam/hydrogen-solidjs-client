import { Portal } from "solid-js/web";

export default function DropdownMenu(props) {
  let cardRef;
  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      props.onClose();
    }
  }
  return (
    <Portal>
      <div className="fixed inset-0" onClick={[handleClickOutside]}>
        <div
          className="fixed top-14 right-0 sm:right-2 md:right-4 sm:max-w-sm w-full "
          ref={cardRef}
        >
          <div className="bg-white dark:bg-gray-800 shadow rounded-b-md border-1 dark:border-gray-700 px-2 py-2">
            <h6 className="font-bold text-2xl">{props.title}</h6>

            <div
              className="overflow-y-scroll max-h-96 modal-scrollbar my-0"
              classList={{ "my-4": props.title }}
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
