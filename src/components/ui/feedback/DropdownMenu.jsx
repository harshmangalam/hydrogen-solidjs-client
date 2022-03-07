import { Portal } from "solid-js/web";
import { mergeProps } from "solid-js";
export default function DropdownMenu(props) {
  const merged = mergeProps({ scrollY: false }, props);
  let cardRef;
  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      merged.onClose();
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
            <div
              className="my-2"
              classList={{
                "overflow-y-scroll max-h-96 modal-scrollbar": merged.scrollY,
              }}
            >
              {merged.children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
