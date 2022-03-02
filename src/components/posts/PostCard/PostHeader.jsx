import { FaSolidGlobeAsia, FaSolidUser } from "solid-icons/fa";
import { FaSolidLock } from "solid-icons/fa";
import { FaSolidUsers } from "solid-icons/fa";
import { FaSolidPeopleArrows } from "solid-icons/fa";
import { BiDotsHorizontalRounded } from "solid-icons/bi";
import UserAvatar from "../../ui/dataDisplay/UserAvatar";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"


dayjs.extend(relativeTime)
export default function PostHeader(props) {
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
        <div class="flex-none">
          <UserAvatar
            src={props.author.profileImage}
            alt={props.author.firstName}
            className="w-12 h-12 rounded-full"
          />
        </div>

        <div>
          <h6 class="text-md font-medium dark:text-white">
            {props.author.firstName}
          </h6>
          <div class="flex items-center space-x-2 ">
            <span class="text-sm text-gray-500 dark:text-gray-200">
              {dayjs(props.createdAt).fromNow()}
            </span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span className="dark:text-gray-200 text-lg">
              {showPostAudience(props.audience)}
            </span>
          </div>
        </div>
      </div>

      <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-xl rounded-full">
        <BiDotsHorizontalRounded />
      </button>
    </section>
  );
}
