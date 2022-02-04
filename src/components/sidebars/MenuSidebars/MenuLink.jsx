import {  NavLink } from "solid-app-router";

export default function MenuLink(props) {
  return (
    <li>
      <NavLink
        href={props.href}
        className="flex items-center space-x-4 py-4 rounded-lg px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
        activeClass="bg-gray-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700"
      >
        <span className="text-2xl">{props.icon()}</span>
        <span className="text-sm"> {props.name}</span>
      </NavLink>
    </li>
  );
}
