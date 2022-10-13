import { FaSolidGlobeAsia } from "solid-icons/fa";
import { FaSolidLock } from "solid-icons/fa";
import { FaSolidUsers } from "solid-icons/fa";
import { FaSolidPeopleArrows } from "solid-icons/fa";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import { getRelativeTime } from "../../../utils/dateTime";
import DeletePost from "./DeletePost";
import { useAuthState } from "../../../context/auth";
import { Show } from "solid-js";
import { Link } from "solid-app-router";
import Popup from "../../popup/Popup";
import PostUserPopup from "./PostUserPopup";

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

export default function PostHeader(props) {
  const authState = useAuthState();

  return (
    <section class="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
      <div class="flex items-center space-x-2">
        <Link className="flex-none" href={`/${props.author.id}`}>
          <UserAvatar src={props.author.profileImage} alt={props.author.firstName} className="w-12 h-12 rounded-full" />
        </Link>

        <div>
          <Popup render={<PostUserPopup user={props.author} />}>
            <Link href={`/${props.author.id}`} class="text-md font-medium dark:text-white">
              <h6>{props.author.firstName}</h6>
            </Link>
          </Popup>
          <div class="flex items-center space-x-2 ">
            <span class="text-sm text-gray-500 dark:text-gray-200">{getRelativeTime(props.createdAt)}</span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span className="dark:text-gray-200 text-lg">
              <div className="group display:inline-block relative">
                {showPostAudience(props.audience)}
                <span className="text-center invisible rounded-[10px] text-[11px] leading-normal py-px px-2.5 border border-current bg-inherit text-current group-hover:visible z-[1] absolute bottom-[140%] left-[50%] -ml-[25px] after:content-[''] after:absolute after:top-[102%] after:left-[40%] after:border-[5px] after:border-current after:border-x-transparent after:border-b-transparent">
                  {props.audience.slice(0, 1) + props.audience.slice(1).toLowerCase()}
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>

      <Show when={authState.currentUser.id === props.author.id && props.showDelete}>
        <DeletePost handleDeletePost={props.handleDeletePost} />
      </Show>
    </section>
  );
}
