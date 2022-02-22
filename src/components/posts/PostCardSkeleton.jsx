export default function PostCardSkeleton() {
  return (
    <article class="rounded-lg shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-600 animate-pulse max-w-lg mx-auto">
      {/* post header  */}
      <div className="flex items-center space-x-2 px-4 py-2">
        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700" />
        <div className="flex flex-col space-y-2">
          <div className="w-60 h-3 bg-gray-100 dark:bg-gray-700"></div>
          <div className="w-32 h-2 bg-gray-100 dark:bg-gray-700"></div>
        </div>
      </div>

      {/* post media */}
      <div className="w-full h-80 bg-gray-100 dark:bg-gray-700"></div>
      {/* post reactions  */}

      {/* post content  */}
      <div className="px-4 py-2 flex items-center space-x-4">
        <div className="w-24 h-6 rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="w-24 h-6 rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="w-24 h-6 rounded-full bg-gray-100 dark:bg-gray-700"></div>
      </div>

      <div className="px-4 py-2 flex flex-col space-y-2">
        <div className="w-full h-3 bg-gray-100 dark:bg-gray-700"></div>
        <div className="w-full h-3 bg-gray-100 dark:bg-gray-700"></div>
      </div>

      <div className="px-4 py-4 grid grid-cols-3 gap-2">
        <div className="w-full h-10 rounded-md bg-gray-100 dark:bg-gray-700"></div>
        <div className="w-full h-10 rounded-md bg-gray-100 dark:bg-gray-700"></div>
        <div className="w-full h-10 rounded-md bg-gray-100 dark:bg-gray-700"></div>
      </div>
    </article>
  );
}
