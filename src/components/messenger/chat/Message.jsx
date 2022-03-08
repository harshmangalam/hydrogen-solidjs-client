import { Link } from "solid-app-router";

export default function Message(props) {
  return (
    <li
      className={`bg-gray-100 rounded-lg shadow dark:bg-gray-700 px-4 py-4 max-w-[80%] md:max-w-[40%] flex flex-col ${props.className}`}
    >
      <div>
        <Link href={`/${props.userId}`}>{props.firstName}</Link>
      </div>
      <div>
        <p>{props.content}</p>
        <div className="flex items-center justify-end space-x-2">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {props.createdAt}
          </span>
          <span className="text-md">
            <VscCheckAll />
          </span>
        </div>
      </div>
    </li>
  );
}
