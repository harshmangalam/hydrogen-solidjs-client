import { NavLink } from "solid-app-router";

export default function Logo(props) {
  return (
    <NavLink
      href="/"
      className={`bg-blue-500 text-white font-semibold text-xl  w-10 h-10 grid place-items-center rounded-full ${props.className}`}
    >
      H
    </NavLink>
  );
}
