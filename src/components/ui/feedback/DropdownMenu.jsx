import { IoClose } from "solid-icons/io";
import { Portal } from "solid-js/web";
import { Show } from "solid-js";
import IconButton from "../inputs/IconButton";

export default function DropdownMenu(props) {
  return (
    <Portal>
      <div className="fixed top-14 right-0 sm:right-2 md:right-4 z-20 sm:max-w-sm w-full ">
        <div className="bg-white dark:bg-gray-800 shadow rounded-b-md border-1 dark:border-gray-700 px-2 py-2">
          <Show when={props.title}>
            <div className="flex items-center justify-between">
              <h6 className="font-bold text-2xl">{props.title}</h6>
              <IconButton onClick={props.onClose}>
                <IoClose />
              </IconButton>
            </div>
          </Show>

          <div
            className="overflow-y-scroll max-h-96 modal-scrollbar"
            classList={{ "my-4": props.title }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
