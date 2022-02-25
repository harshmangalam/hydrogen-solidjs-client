import empty from "../../assets/empty.svg";

export default function Empty(props) {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col items-center text-center">
        <img src={empty} className="w-60 h-60" />
        <h6 className="text-3xl font-bold text-gray-600 dark:text-gray-400">
          {props.title}
        </h6>
        <p className="text-xl font-bold text-gray-600 dark:text-gray-400 max-w-md">
          {props.subTitle}
        </p>
      </div>
    </div>
  );
}
