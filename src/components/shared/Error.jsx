export default function Error(props) {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col items-center text-center">
        <h6 className="text-3xl font-bold text-gray-600 dark:text-gray-400">
          {props.name}
        </h6>
        <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
          {props.message}
        </p>
      </div>
    </div>
  );
}
