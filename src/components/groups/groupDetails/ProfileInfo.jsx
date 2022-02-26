export default function ProfileInfo(props) {
  return (
    <div className="absolute w-full flex flex-col items-center md:w-auto md:left-1/4 -bottom-56 text-center md:-bottom-20 md:text-left md:items-start">
      <h3 className="text-3xl dark:text-white font-medium text-center w-full">
        {props.name}
      </h3>

      <div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          {props.members} Members
        </p>
      </div>
    </div>
  );
}
