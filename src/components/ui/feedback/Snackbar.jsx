import { IoCloseCircle } from "solid-icons/io";
export default function Snackbar(props) {
  return (
    <div
      className="flex items-center justify-between px-2 py-2 md:rounded-md md:max-w-xs w-full text-sm"
      classList={{
        "bg-green-400": props.type === "success",
        "bg-red-400": props.type === "error",
      }}
    >
      <p className="flex-grow">{props.message}</p>
      <button
        className="p-1 text-xl rounded-full text-white"
        
        onClick={[props.onClose]}
      >
        <IoCloseCircle />
      </button>
    </div>
  );
}