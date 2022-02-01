import { FaSolidGlobeAsia } from "solid-icons/fa";
import { BiDotsHorizontalRounded } from "solid-icons/bi";
export default function PostHeader() {
  return (
    <section class="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
      <div class="flex items-center space-x-2">
        <div class="flex-none">
          <img
            src="https://scontent.fpat2-2.fna.fbcdn.net/v/t39.30808-6/s640x640/273033776_3110201852555547_7552460249623660817_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=73oKk5nWcVEAX8XOAu5&_nc_ht=scontent.fpat2-2.fna&oh=00_AT9UO6WS6byjEM1X9HHtTD3OBxtQnyMb-OdN4_1xZTzoVw&oe=61FBF3A1"
            alt=""
            class="rounded-full w-12 h-12"
          />
        </div>

        <div>
          <h6 class="text-md font-medium dark:text-white">DEV Community</h6>
          <div class="flex items-center space-x-2 ">
            <span class="text-sm text-gray-500 dark:text-gray-200">17 h</span>
            <span class="flex items-start dark:text-gray-200">&#8228;</span>
            <span className="dark:text-gray-200">
              <FaSolidGlobeAsia />
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
