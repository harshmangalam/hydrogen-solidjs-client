export default function TextDivider(props) {
  return (
    <div className="w-full flex items-center gap-1 justify-between">
      <hr className="border w-full dark:border-gray-600 " />
      <h6 className="text-center">{props.text}</h6>
      <hr className="border w-full dark:border-gray-600 " />
    </div>
  );
}
