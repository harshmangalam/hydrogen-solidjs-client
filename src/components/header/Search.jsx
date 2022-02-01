import { BiSearch } from "solid-icons/bi";

export default function Search() {
  return (
    <>
      <div className="relative">
        <BiSearch className="hidden lg:block absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 dark:text-white" />

        <input
          className="hidden lg:block focus:outline-none w-full text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-100 rounded-full py-2 pl-10 bg-gray-100 dark:bg-gray-700"
          type="text"
          aria-label="Filter projects"
          placeholder="Search Hydrogen"
        />
      </div>

      <button className="block lg:hidden p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white ">
        <BiSearch className="text-xl" />
      </button>
    </>
  );
}
