import { IoCloseCircle } from "solid-icons/io";
import { mergeProps, onCleanup, onMount } from "solid-js";
export default function Snackbar(props) {
  let merged = mergeProps({ type: "success",autoHideDuration:3000  }, props);
  let timerRef 

  onMount(()=>{

    timerRef = setTimeout(()=>merged.onClose(),merged.autoHideDuration)
    
  })

  onCleanup(()=>{
    clearTimeout(timerRef)
  })
  return (
    <div
      className="font-medium flex items-center justify-between px-2 py-2 rounded-md md:max-w-xs w-full text-sm shadow-md"
      classList={{
        "bg-green-300": merged.type === "success",
        "bg-red-300": merged.type === "error",
        "text-green-900": merged.type === "success",
        "text-red-900": merged.type === "error",
        "bg-yellow-300": merged.type === "warning",
        "text-yellow-900": merged.type === "warning",
      }}
    >
      <p className="flex-grow">{merged.message}</p>
      <button className="p-1 text-xl rounded-full" onClick={[merged.onClose]}>
        <IoCloseCircle />
      </button>
    </div>
  );
}
