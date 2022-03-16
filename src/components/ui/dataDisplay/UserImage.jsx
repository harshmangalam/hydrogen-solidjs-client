
export default function UserImage(props) {

  return (
    <img
      src={props.src}
      className={`w-full ${props.className}`}
      alt={props.alt}
    />
  );
}
