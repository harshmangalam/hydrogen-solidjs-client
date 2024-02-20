import { NavLink } from "solid-app-router";
import logoImage from "../../assets/peepsule-avatar.jpeg";
export default function Logo(props) {
  return (
    <NavLink href="/">
      <img src={logoImage} className="rounded-full w-10 h-10" />
    </NavLink>
  );
}
