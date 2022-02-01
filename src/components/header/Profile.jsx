import { BiSolidUser } from "solid-icons/bi";

export default function Profile() {
  return (
    <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white ">
      <BiSolidUser className="text-xl" />
    </button>
  );
}
