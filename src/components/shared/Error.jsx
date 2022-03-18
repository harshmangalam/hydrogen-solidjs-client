export default function Error(props) {
  return (
    <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="flex flex-col items-center text-center">
        <h6 className="text-2xl text-gray-600 dark:text-gray-400">
          {props.name}
        </h6>
      </div>
    </div>
  );
}
