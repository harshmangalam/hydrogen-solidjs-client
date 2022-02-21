import { createSignal, Show } from "solid-js";
import { TiLocationOutline } from "solid-icons/ti";
import Modal from "../../ui/feedback/Modal";
export default function CheckIn(props) {
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <button
        title="Add Feelings"
        type="button"
        className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-12 h-12 text-3xl text-black dark:text-white grid place-items-center"
        onClick={() => setOpen(true)}
      >
        <TiLocationOutline className="text-red-500" />
      </button>

      <Modal onClose={() => setOpen(false)} open={open()} title="Check In">
        <div className="px-4 py-4">
          <input
            type={"text"}
            value={props.checkIn}
            onInput={props.handleInput}
            name="checkIn"
            className="px-4 py-2 rounded-md flex-grow w-full dark:bg-gray-700"
            placeholder="Where are you?"
          />
        </div>
      </Modal>
    </div>
  );
}
