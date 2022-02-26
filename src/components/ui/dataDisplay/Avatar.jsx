import { FaSolidUserAlt } from "solid-icons/fa";
import { Match, Switch } from "solid-js";
export default function Avatar(props) {
  return (
    <Switch>
      <Match when={!props.src && !props.icon}>
        <div
          className={`grid place-items-center rounded-full text-xl text-blue-500  ${props.className}`}
        >
          <FaSolidUserAlt />
        </div>
      </Match>
      <Match when={!props.src && props.icon}>
        <div
          className={`grid place-items-center rounded-full${props.className}`}
        >
          {props.children}
        </div>
      </Match>

      <Match when={props.src}>
        <img
          src={props.src}
          alt={props.alt}
          className={` rounded-full ${props.className}`}
        />
      </Match>
    </Switch>
  );
}
