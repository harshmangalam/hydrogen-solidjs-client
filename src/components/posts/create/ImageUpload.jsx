import { createSignal, For } from "solid-js";
import Modal from "../../ui/feedback/Modal";
import { BsImages } from "solid-icons/bs";

export default function ImageUpload(props) {
  const [openModal, setOpenModal] = createSignal(false);
  let imageRef;

  const handleUpload = (event) => {
    imageRef.click();
  };

  const handleImageChange = (event) => {
    console.log(event.target.files);
  };
  return (
    <>
      <button
        title="Tag friends"
        type="button"
        className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-12 h-12 text-3xl text-black dark:text-white grid place-items-center"
        onClick={() => setOpenModal(true)}
      >
        <BsImages className="text-blue-500" />
      </button>
      <input
        type="file"
        ref={imageRef}
        accept="images/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal()}
        title="Upload Images"
      >
        <div className="px-4">
          <div className="py-4">
            <button
              onClick={() => imageRef.click()}
              className="w-full h-32 border-2 border-dashed grid place-items-center"
            >
              <div className="flex flex-col space-y-2 items-center">
                <BsImages className="text-3xl" />
                <div>
                  <p className="text-xl">
                    Add Images
                  </p>
                  <p className="text-xs">
                    or drag and drop
                  </p>
                </div>
              </div>
            </button>
          </div>

          <ul className="grid grid-cols-3 gap-2">
            <For each={props.images}>
              {(image) => (
                <li>
                  <img src={image} className="w-full h-full" />
                </li>
              )}
            </For>
          </ul>
        </div>
      </Modal>
    </>
  );
}
