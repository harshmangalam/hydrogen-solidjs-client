import { FaSolidCamera } from "solid-icons/fa";

export default function AddCoverPhoto() {
  return (
    <div className="absolute right-0 bottom-0 p-3">
      <button
        title="Add Cover Photo"
        className="py-2 px-4 rounded-lg flex items-center space-x-2 bg-blue-500 text-white font-medium hover:bg-blue-600"
      >
        <FaSolidCamera />
        <span className="hidden md:block">Add Cover Photo</span>
      </button>
    </div>
  );
}
