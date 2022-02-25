import emptyImg from "../../../assets/empty-img.jpg";
export default function Image(props) {
  const getSrc = (src) => {
    if (src) {
      return src;
    } else {
      return emptyImg;
    }
  };
  return (
    <img
      src={getSrc(props.src)}
      className={`w-full ${props.className}`}
      alt={props.alt}
    />
  );
}
