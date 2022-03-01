import { FaSolidUserTag } from "solid-icons/fa";
import { createSignal } from "solid-js";
import Modal from "../../ui/feedback/Modal";
import FriendsInterface from "../../shared/friend";
export default function TagPeople(props) {
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      <button
        title="Tag friends"
        type="button"
        className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-12 h-12 text-3xl text-black dark:text-white grid place-items-center"
        onClick={() => setOpen(true)}
      >
        <FaSolidUserTag className="text-blue-500" />
      </button>

      <Modal onClose={() => setOpen(false)} open={open()} title="Tag Friends">
        <div className="px-4">
          <FriendsInterface
            startFetch={open()}
            friends={props.friends}
            removeFriend={props.removeFriend}
            addFriend={props.addFriend}
          />
        </div>
      </Modal>
    </div>
  );
}
