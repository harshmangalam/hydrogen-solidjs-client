export default function IconButton(props) {
  return (
    <button
      type="button"
      className={`rounded-full bg-gray-200  hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 w-10 h-10 text-xl text-gray-700 dark:text-white grid place-items-center ${props.className}`}
      onClick={[props.onClick]}
    >
      {props.children}
    </button>
  );
}
