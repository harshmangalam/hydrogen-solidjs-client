export default function Drawer(props) {
  return (
    <div
      className={`h-screen fixed top-14 md:w-1/4 xl:w-1/5 hidden pb-20 pt-4 md:block left-0 bg-white dark:bg-gray-800 shadow border-r dark:border-gray-700 dark:text-white px-2 hover:overflow-y-auto body-scrollbar`}
    >
      {props.children}
    </div>
  );
}
