export default function Empty(props) {
  return (
    <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
      <div className="flex flex-col items-center text-center">
        <h6 className="text-2xl  text-gray-600 dark:text-gray-400">
          {props.title}
        </h6>
      </div>
    </div>
  );
}
