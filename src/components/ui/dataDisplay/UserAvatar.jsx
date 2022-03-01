import userAvatar from "../../../assets/profile.svg";
export default function UserAvatar(props) {
  return (
    <img
      src={props.src || userAvatar}
      alt={props.alt}
      className={props.className}
      title={props.alt}
    />
  );
}
