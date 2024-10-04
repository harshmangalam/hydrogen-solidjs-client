import { createResource, createSignal, Match, Switch } from "solid-js";
import Modal from "../../ui/feedback/Modal";
import UserStatusAvatar from "../../ui/dataDisplay/UserStatusAvatar";
import { fetchPostLikesUsers } from "../../../services";
import { FaSolidHeart } from "solid-icons/fa";
import { Link } from "solid-app-router";

export default function PostLikesUsersModal(props) {
  const [open, setOpen] = createSignal(false);
  const [resource] = createResource(
    () => open(),
    () => fetchPostLikesUsers(props.postId)
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center space-x-1 hover:bg-red-100 dark:hover:bg-gray-600 rounded-full px-3 py-1"
        aria-label="Likes"
        aria-haspopup="true"
        aria-expanded={open()}
      >
        <span className="text-red-400 dark:text-red-200">
          <FaSolidHeart />
        </span>
        <span className="text-sm" aria-label="Likes count">
          {props.countLikes}
        </span>
      </button>

      <Modal
        showFooter={false}
        onClose={() => setOpen(false)}
        open={open()}
        title="Post Likes"
      >
        <h6 className="px-4 font-semibold text-lg">{props.countLikes} Likes</h6>
        <Switch>
          <Match when={resource()}>
            <ul className="flex flex-col space-y-2 py-4 px-4">
              <For each={resource().data.data.users}>
                {(user) => (
                  <li className=" rounded-md  py-2 px-2  font-medium hover:bg-gray-200 dark:hover:bg-gray-700 w-full">
                    <Link
                      href={`/${user.id}`}
                      className="flex items-center space-x-2"
                      aria-label={`User ${user.firtName}`}
                    >
                      <UserStatusAvatar
                        firstName={user.firstName}
                        profileImage={user.profileImage}
                        className="w-10 h-10 rounded-full flex-none"
                      />

                      <p className="font-medium">{user.firstName}</p>
                    </Link>
                  </li>
                )}
              </For>
            </ul>
          </Match>
        </Switch>
      </Modal>
    </div>
  );
}
