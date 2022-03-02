export default function Image(props) {
  return (
    <img
      src={props.src || props.emptySrc}
      className={`w-full ${props.className}`}
      alt={props.alt}
    />
  );
}
