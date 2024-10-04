import { NavLink } from "solid-app-router";

export default function MenuLink(props) {
  return (
    <li>
      <NavLink
        href={props.href}
        className="flex items-center space-x-4 py-3 rounded-lg px-4 hover:bg-gray-200 dark:hover:bg-gray-800"
        activeClass="bg-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800"
        aria-label={props.ariaLabel}
      >
        <span className="text-3xl">{props.icon()}</span>
        <span className="text-md"> {props.name}</span>
      </NavLink>
    </li>
  );
}
