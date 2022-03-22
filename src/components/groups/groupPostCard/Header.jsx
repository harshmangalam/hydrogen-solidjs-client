import { FaSolidGlobeAsia, FaSolidUsers } from "solid-icons/fa";
import { FaSolidLock } from "solid-icons/fa";
import { useAuthState } from "../../../context/auth";
import { getRelativeTime } from "../../../utils/dateTime";
import { Show } from "solid-js";
import { Link } from "solid-app-router";
import DeletePost from "./DeletePost";
export default function PostHeader(props) {
  const authState = useAuthState();
  const groupPrivacy = (audience) => {
    switch (audience) {
      case "PUBLIC":
        return <FaSolidGlobeAsia />;
      case "PRIVATE":
        return <FaSolidLock />;
    }
  };
  return (
    <section class="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
      <div class="flex items-center space-x-2">
        <div class="flex-none">
          <Show
            when={props.group.profileImage}
            fallback={<FaSolidUsers className="text-2xl" />}
          >
            <img
              className="w-10 h-10 rounded-full"
              alt="Remy Sharp"
              src={props.group.profileImage}
            />
          </Show>
        </div>

        <div>
          <Link href={`/groups/${props.group.id}`} className="hover:underline">
            <h6 class="text-md font-medium dark:text-white">
              {props.group.name}
            </h6>
          </Link>
          <div class="flex items-center space-x-2 ">
            <Link href={`/${props.author.id}`} className="hover:underline">
              <span class="text-sm text-gray-500 dark:text-gray-200 font-bold">
                {props.author.firstName}
              </span>
            </Link>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span class="text-sm text-gray-500 dark:text-gray-200">
              {getRelativeTime(props.createdAt)}
            </span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span className="dark:text-gray-200 text-lg">
              {groupPrivacy(props.group.privacy)}
            </span>
          </div>
        </div>
      </div>

      <Show when={authState.currentUser.id === props.author.id}>
        <DeletePost handleDeletePost={props.handleDeletePost} />
      </Show>
    </section>
  );
}
