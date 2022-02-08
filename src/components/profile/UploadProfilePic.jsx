import { FaSolidCamera } from "solid-icons/fa";
import { AiOutlineUser } from 'solid-icons/ai'
export default function UploadProfilePic() {
  return (
    <div className="absolute -bottom-24 left-4">
      <div className="w-40 h-40 grid place-items-center rounded-full dark:bg-gray-700 relative">
        <AiOutlineUser className="dark:text-white" size={100} />

        <div className="absolute bottom-4 right-0">
          <button className="w-10 h-10 rounded-full grid place-items-center bg-blue-500 hover:bg-blue-600">
            <FaSolidCamera className="text-xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
