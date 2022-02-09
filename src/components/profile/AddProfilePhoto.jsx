import { FaSolidCamera } from "solid-icons/fa";
import { AiOutlineUser } from "solid-icons/ai";
export default function AddProfilePhoto() {
  return (
    <div className="absolute -bottom-20 md:-bottom-28 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0">
      <div className="w-40 h-40 grid place-items-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 relative">
        {/* <AiOutlineUser className="dark:text-white" size={100} /> */}
        <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/260450820_1627140217653210_1790262239845190113_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VUkBxvVQcfEAX99gFo5&_nc_ht=scontent.fpat3-1.fna&oh=00_AT86TBYBEnsY5bXWhlYHIpaFE8Mf8lNIJv8YsRQ-gqljQw&oe=6208A7A2" className="absolute inset-0 rounded-full w-full h-full" />

        <div className="absolute bottom-4 right-0">
          <button className="w-10 h-10 rounded-full grid place-items-center bg-blue-500 hover:bg-blue-600" title="Add Profile Photo">
            <FaSolidCamera className="text-xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
