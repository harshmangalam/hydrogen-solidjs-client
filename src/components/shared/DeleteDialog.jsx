import { createSignal, Show } from "solid-js";
import { AiOutlineDelete } from "solid-icons/ai";
import ConfirmDialog from "../ui/feedback/ConfirmDialog";

export default function DeleteDialog(props) {
  const [open, setOpen] = createSignal(false);
  return (
    <div className="relative">
      <button
        class="p-2 hover:bg-red-100 dark:hover:bg-red-400 dark:text-white text-xl rounded-full text-red-500"
        onClick={() => setOpen(true)}
      >
        <AiOutlineDelete />
      </button>

      {/* <!-- Dropdown menu --> */}

      <ConfirmDialog
        open={open()}
        onClose={() => setOpen(false)}
        title={props.title}
        content={props.content}
        actions={[
          { name: "No", onClick: () => setOpen(false) },
          {
            name: "Yes",
            onClick: () => props.handleDelete(),
            variant: "danger",
          },
        ]}
      />
    </div>
  );
}
