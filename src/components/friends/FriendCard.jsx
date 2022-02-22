import Image from "../ui/dataDisplay/Image";

export default function FriendCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <Image
        src={props.profileImage}
        className="w-full h-max aspect-auto rounded-t-lg object-cover"
        alt={props.firstName}
      />

      <div className="py-4 px-2">
        <h6 className="font-medium text-md">{props.firstName}</h6>
      </div>

      <div className="py-4 px-2">{props.children}</div>
    </article>
  );
}
