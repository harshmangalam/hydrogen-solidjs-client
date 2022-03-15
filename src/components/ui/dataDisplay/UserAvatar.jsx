import { Show } from "solid-js";

export default function UserAvatar(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      title={props.alt}
    />
  );
}
