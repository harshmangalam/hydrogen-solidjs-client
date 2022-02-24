export default function PostMedia(props) {
  return (
    <section>
      <img
        src={props.image}
        alt={props.alt}
        className="aspect-square w-full"
      />
    </section>
  );
}
