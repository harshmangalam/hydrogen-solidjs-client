import { FaSolidCamera } from "solid-icons/fa";
import { AiOutlineUser } from "solid-icons/ai";
export default function AddProfilePhoto() {
  return (
    <div className="absolute -bottom-20 md:-bottom-28 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0">
      <div className="w-40 h-40 grid place-items-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 relative">
        <AiOutlineUser className="dark:text-white" size={100} />

        <div className="absolute bottom-4 right-0">
          <button className="w-10 h-10 rounded-full grid place-items-center bg-blue-500 hover:bg-blue-600" title="Add Profile Photo">
            <FaSolidCamera className="text-xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
