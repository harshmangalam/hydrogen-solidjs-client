import { createSignal } from "solid-js";
import Modal from "../../ui/feedback/Modal";
import FriendsInterface from "../../shared/friend";
export default function InvitePeople(props) {
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <button
        type="button"
        className="w-full rounded-md bg-gray-200  hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-3"
        onClick={() => setOpen(true)}
      >
        Invite People
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
