import { FaSolidGlobeAsia, FaSolidUser } from "solid-icons/fa";
import { FaSolidLock } from "solid-icons/fa";
import { FaSolidUsers } from "solid-icons/fa";
import { FaSolidPeopleArrows } from "solid-icons/fa";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import { getRelativeTime } from "../../../utils/dateTime";
import DeletePost from "./DeletePost";
import { useAuthState } from "../../../context/auth";
import { Show } from "solid-js";
import { Link } from "solid-app-router";

export default function PostHeader(props) {
  const authState = useAuthState();
  const showPostAudience = (audience) => {
    switch (audience) {
      case "PUBLIC":
        return <FaSolidGlobeAsia />;
      case "ONLY_ME":
        return <FaSolidLock />;

      case "FRIENDS":
        return <FaSolidUsers />;

      case "SPECIFIC":
        return <FaSolidPeopleArrows />;
    }
  };
  return (
    <section class="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
      <div class="flex items-center space-x-2">
        <Link className="flex-none" href={`/${props.author.id}`}>
          <UserAvatar
            src={props.author.profileImage}
            alt={"Author first name"}
            width="300"
            height="300"
            className="aspect-auto w-12 h-12 rounded-full"
          />
        </Link>

        <div>
          <Link href={`/${props.author.id}`} class="text-md font-medium dark:text-white">
            <h6>
              {props.author.firstName}
            </h6>
          </Link>
          <div class="flex items-center space-x-2 ">
            <span class="text-sm text-gray-500 dark:text-gray-200">
              {getRelativeTime(props.createdAt)}
            </span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span className="dark:text-gray-200 text-lg">
              {showPostAudience(props.audience)}
            </span>
          </div>
        </div>
      </div>

      <Show
        when={authState.currentUser.id === props.author.id && props.showDelete}
      >
        <DeletePost handleDeletePost={props.handleDeletePost} />
      </Show>
    </section>
  );
}
