import { createSignal, Show } from "solid-js";
import useSearchFriends from "../../../hooks/useSearchFriends";
import SearchFriends from "../../shared/friend/SearchFriends";
import SelectedFriends from "../../shared/friend/SelectedFriends";
import FriendsList from "../../shared/friend/FriendsList";
import Modal from "../../ui/feedback/Modal";
export default function InvitePeople(props) {
  const [open, setOpen] = createSignal(false);
  const { friendsStore, searchFriends, handleInput } = useSearchFriends();

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
          <SearchFriends
            handleInput={handleInput}
            searchFriends={searchFriends}
            friendsStore={friendsStore}
          />

          <div className="mt-4 flex flex-col space-y-2">
            <h6 className="text-gray-500 dark:text-gray-200 font-medium text-sm">
              Invited people
            </h6>
            <SelectedFriends
              friends={props.invitedPeople}
              removeFriend={props.removeInvitedPeople}
            />
          </div> 

          <div className="mt-4 flex flex-col space-y-2">
            <h6 className="text-gray-500 dark:text-gray-200 text-sm font-medium">
              <Show
                when={friendsStore.search.trim().length > 0}
                fallback="People"
              >
                Search People
              </Show>
            </h6>

            <FriendsList
              friendsStore={friendsStore}
              addFriend={props.addInvitedPeople}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
