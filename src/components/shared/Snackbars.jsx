import { For } from "solid-js";
import { useUIState, useUIDispatch } from "../../context/ui";
import Snackbar from "../ui/feedback/Snackbar";

export default function Snackbars() {
  const { snackbars } = useUIState();
  const { removeSnackbar } = useUIDispatch();

  return (
    <ul>
      <For each={snackbars}>
        {(snackbar) => (
          <Snackbar
            onClose={removeSnackbar(snackbar.id)}
            message={snackbar.message}
            type={snackbar.type}
          />
        )}
      </For>
    </ul>
  );
}
