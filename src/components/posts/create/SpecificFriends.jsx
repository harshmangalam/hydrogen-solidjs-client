import { createSignal, Show } from "solid-js";
import Modal from "../../ui/feedback/Modal";
import FriendsInterface from "../../shared/friend";
export default function SpecificFriends(props) {
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <button
        type="button"
        className="rounded-md bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-2 py-2 w-full"
        onClick={() => setOpen(true)}
      >
        Specific Friends
      </button>

      <Modal onClose={() => setOpen(false)} open={open()} title="Specific Friends">
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
