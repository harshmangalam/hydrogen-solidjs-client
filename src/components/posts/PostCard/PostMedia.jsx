export default function PostMedia(props) {
  return (
    <section>
      <img
        src={props.images[0]}
        alt={props.alt}
        className="aspect-auto w-full"
      />
    </section>
  );
}
