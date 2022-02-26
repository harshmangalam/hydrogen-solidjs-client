import { FaSolidGlobeAsia } from "solid-icons/fa";
import { FaSolidLock } from "solid-icons/fa";
import { BiDotsHorizontalRounded } from "solid-icons/bi";
import Avatar from "../../ui/dataDisplay/Avatar";
export default function PostHeader(props) {
  const showPostAudience = (audience) => {
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
          <Avatar alt="Remy Sharp" src={props.group.profileImage} />
        </div>

        <div>
          <h6 class="text-md font-medium dark:text-white">
            {props.group.name}
          </h6>
          <div class="flex items-center space-x-2 ">
            <span class="text-sm text-gray-500 dark:text-gray-200 font-bold">
              {props.author.firstName}
            </span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span class="text-sm text-gray-500 dark:text-gray-200">
              {props.createdAt}
            </span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span className="dark:text-gray-200 text-lg">
              {showPostAudience(props.group.privacy)}
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
