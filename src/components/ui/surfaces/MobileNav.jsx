import { useNavigate } from "solid-app-router";
import { For } from "solid-js";

function MobileNav(props) {
  const navigate = useNavigate();
  return (
    <select
      onChange={(e) => navigate(e.currentTarget.value)}
      className="w-full dark:bg-gray-700 border-none "
    >
      <For each={props.links}>
        {(item) => <option value={item.href}>{item.name}</option>}
      </For>
    </select>
  );
}

export default MobileNav;
