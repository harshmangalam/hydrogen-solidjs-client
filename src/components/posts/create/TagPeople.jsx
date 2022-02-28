import { FaSolidUserTag } from "solid-icons/fa";

import { createSignal, Show } from "solid-js";
import useSearchFriends from "../../../hooks/useSearchFriends";
import Modal from "../../ui/feedback/Modal";
import FriendsList from "../../shared/friend/FriendsList";
import SearchFriends from "../../shared/friend/SearchFriends";
import SelectedFriends from "../../shared/friend/SelectedFriends";
export default function TagPeople(props) {
  const [open, setOpen] = createSignal(false);

  const { friendsStore, handleInput, searchFriends } = useSearchFriends();

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
          <SearchFriends
            handleInput={handleInput}
            searchFriends={searchFriends}
            friendsStore={friendsStore}
          />

          <div className="mt-4 flex flex-col space-y-2">
            <h6 className="text-gray-500 dark:text-gray-200 font-medium text-sm">
              Tagged
            </h6>
            <SelectedFriends
              friends={props.friends}
              removeFriend={props.removeTaggedFriend}
            />
          </div>

          <div className="mt-4 flex flex-col space-y-2">
            <h6 className="text-gray-500 dark:text-gray-200 text-sm font-medium">
              <Show
                when={friendsStore.search.trim().length > 0}
                fallback="Suggestions"
              >
                Search
              </Show>
            </h6>

            <FriendsList
              friendsStore={friendsStore}
              addFriend={props.addTaggedFriend}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
