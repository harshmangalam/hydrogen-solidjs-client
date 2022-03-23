import { FaEdit } from "solid-icons/fa";
import { createSignal } from "solid-js";
import useEditGroup from "../../../hooks/group/useEditGroup";
import Modal from "../../ui/feedback/Modal";
import IconButton from "../../ui/inputs/IconButton";
export default function EditGroup(props) {
  const { handleSubmit, onInput, form } = useEditGroup(
    props.info,
    props.refetch
  );
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      <IconButton
        className="flex-none"
        title="Edit Group"
        onClick={() => setOpen(true)}
      >
        <FaEdit />
      </IconButton>

      <Modal
        showFooter={false}
        onClose={() => setOpen(false)}
        open={open()}
        title="Edit Group"
      >
        <div className="px-4">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              setOpen(false);
            }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName">Group Name</label>
                <input
                  type="text"
                  name="name"
                  className="rounded-lg dark:bg-gray-700"
                  value={form.name}
                  onInput={[onInput]}
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Edit Group
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
