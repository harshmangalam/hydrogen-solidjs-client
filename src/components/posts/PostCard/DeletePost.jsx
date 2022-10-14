import { createSignal, Show } from "solid-js";
import { AiOutlineDelete } from "solid-icons/ai";
import ConfirmDialog from "../../ui/feedback/ConfirmDialog";

export default function DeletePost(props) {
  const [open, setOpen] = createSignal(false);
  return (
    <div className="relative">
      <button
        class="p-2 hover:bg-red-100 dark:hover:bg-red-400 dark:text-white text-xl rounded-full text-red-500"
        onClick={() => setOpen(true)}
      >
        <AiOutlineDelete aria-label="delete post" />
      </button>

      {/* <!-- Dropdown menu --> */}

      <ConfirmDialog
        open={open()}
        onClose={() => setOpen(false)}
        title="Delete Post"
        content="Do you want to delete post"
        actions={[
          { name: "No", onClick: () => setOpen(false) },
          {
            name: "Yes",
            onClick: () => props.handleDeletePost(),
            variant: "danger",
          },
        ]}
      />
    </div>
  );
}
