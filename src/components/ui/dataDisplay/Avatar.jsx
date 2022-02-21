import { FaSolidUserAlt } from 'solid-icons/fa'
import { Match, mergeProps, Switch } from "solid-js";
export default function Avatar(props) {
  const merged = mergeProps(
    { className: "w-12 h-12 bg-gray-200 dark:bg-gray-700" },
    props
  );
  return (
    <Switch>
      <Match when={!merged.src && !merged.icon}>
        <div
          className={`grid place-items-center rounded-full text-xl text-blue-500  ${merged.className}`}
        >
          <FaSolidUserAlt />
        </div>
      </Match>
      <Match when={!merged.src && merged.icon}>
        <div
          className={`grid place-items-center rounded-full${merged.className}`}
        >
          {merged.children}
        </div>
      </Match>

      <Match when={merged.src}>
        <img
          src={merged.src}
          alt={merged.alt}
          className={`rounded-full w-12 h-12 ${merged.className}`}
        />
      </Match>
    </Switch>
  );
}
