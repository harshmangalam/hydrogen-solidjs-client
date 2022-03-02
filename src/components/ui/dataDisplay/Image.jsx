export default function Image(props) {
  return (
    <img
      src={props.src || props.fallbackSrc}
      className={`w-full ${props.className}`}
      alt={props.alt}
    />
  );
}
