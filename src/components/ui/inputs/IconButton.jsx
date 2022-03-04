export default function IconButton(props) {
  return (
    <button
      type="button"
      className={`w-10 h-10  rounded-full bg-gray-200  hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500  text-xl text-gray-700 dark:text-white grid place-items-center ${props.className}`}
      onClick={[props.onClick]}
      title={props.title}
    >
      {props.children}
    </button>
  );
}
