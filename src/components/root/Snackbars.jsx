import { onMount } from "solid-js";
import { useUIState, useUIDispatch } from "../../context/ui";
import Snackbar from "../ui/feedback/Snackbar";

export default function Snackbars() {
  const { snackbars } = useUIState();
  const { removeSnackbar } = useUIDispatch();

  return (
    <div className="fixed z-20 bottom-16 left-0 p-4 w-ful md:max-w-xs">
      <ul className="flex flex-col space-y-2">
        {snackbars.map((snackbar) => (
          <Snackbar
            onClose={removeSnackbar(snackbar.id)}
            message={snackbar.message}
            type={snackbar.type}
          />
        ))}
      </ul>
    </div>
  );
}
