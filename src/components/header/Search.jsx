export default function Search() {
  return (
    <div className="relative">
      <svg
        fill="currentColor"
        className="hidden xl:block absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        className="hidden xl:block focus:outline-none w-full text-sm text-black placeholder-gray-500  rounded-full py-2 pl-10 bg-gray-100"
        type="text"
        aria-label="Filter projects"
        placeholder="Search Hydrogen"
      />

     
    </div>
  );
}
