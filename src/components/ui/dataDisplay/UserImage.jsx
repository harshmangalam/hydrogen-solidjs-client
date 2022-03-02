import emptyImg from "../../../assets/empty-img.jpg";
export default function UserImage(props) {

  return (
    <img
      src={props.src || emptyImg}
      className={`w-full ${props.className}`}
      alt={props.alt}
    />
  );
}
