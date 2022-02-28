import { createSignal, Show } from "solid-js";
import useSearchFriends from "../../../hooks/useSearchFriends";
import SearchFriends from "../../shared/friend/SearchFriends";
import SelectedFriends from "../../shared/friend/SelectedFriends";
import FriendsList from "../../shared/friend/FriendsList";
import Modal from "../../ui/feedback/Modal";
export default function SpecificFriends(props) {
  const [open, setOpen] = createSignal(false);

  const { friendsStore, searchFriends, handleInput } = useSearchFriends();

  return (
    <div>
      <button
        type="button"
        className="rounded-md bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-2 py-2 w-full"
        onClick={() => setOpen(true)}
      >
        Specific Friends
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
              Friends who will see the post
            </h6>
            <SelectedFriends
              friends={props.friends}
              removeFriend={props.removeSpecificFriend}
            />
          </div>

          <div className="mt-4 flex flex-col space-y-2">
            <h6 className="text-gray-500 dark:text-gray-200 text-sm font-medium">
              <Show
                when={friendsStore.search.trim().length > 0}
                fallback="Friends"
              >
                Search
              </Show>
            </h6>

            <FriendsList
              friendsStore={friendsStore}
              addFriend={props.addSpecificFriend}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
