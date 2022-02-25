import Image from "../ui/dataDisplay/Image";
export default function GroupCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <Image src={props.profileImage} alt={props.name} className="h-60 rounded-md" />

      <div className="py-4 px-4">
        <h6 className="font-medium text-lg">{props.name}</h6>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{props._count.members} members</p>
      </div>

      <div className="py-4 px-4">{props.children}</div>
    </article>
  );
}
