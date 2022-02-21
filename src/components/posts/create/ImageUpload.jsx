import { createSignal, For } from "solid-js";
import Modal from "../../ui/feedback/Modal";
import { BsImages } from "solid-icons/bs";
import { IoClose } from "solid-icons/io";

export default function ImageUpload(props) {
  const [openModal, setOpenModal] = createSignal(false);
  const [urlField, setUrlField] = createSignal("");
  let imageRef;

  const handleImageChange = (event) => {
    const images = [];
    for (let file of event.target.files) {
      const image = URL.createObjectURL(file);
      images.push(image);
    }

    props.addImages(images);
  };

  const removeImage = (url) => {
    URL.revokeObjectURL(url);
    props.removeImage(url);
  };

  const handleAddImage = () => {
    props.addImages([urlField()]);
    setUrlField("");
  };
  return (
    <>
      <button
        title="Add Images"
        type="button"
        className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-12 h-12 text-3xl text-black dark:text-white grid place-items-center"
        onClick={() => setOpenModal(true)}
      >
        <BsImages className="text-green-500" />
      </button>
      <input
        type="file"
        multiple
        ref={imageRef}
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal()}
        title="Upload Images"
      >
        <div className="px-4">
          <div className="py-4 flex flex-col space-y-4">
            <button
              onClick={() => imageRef.click()}
              className="w-full h-32 border-2 border-dashed grid place-items-center"
            >
              <div className="flex flex-col space-y-2 items-center">
                <BsImages className="text-3xl" />
                <div>
                  <p className="text-xl">Add Images</p>
                  <p className="text-xs">or drag and drop</p>
                </div>
              </div>
            </button>

            <div>
              <h6 className="text-center">Or</h6>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={urlField()}
                onInput={(e) => setUrlField(e.currentTarget.value)}
                className="py-2 px-4 flex-grow rounded-md dark:bg-gray-700"
                placeholder="Paste image url"
              />
              <button
                onClick={[handleAddImage]}
                className="text-blue-500 font-semibold"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <For each={props.images}>
              {(image) => (
                <li className="relative">
                  <img src={image} className="w-full h-full aspect-square object-cover" />
                  <button
                    className="absolute top-2 right-2 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-8 h-8 text-xl text-black dark:text-white grid place-items-center"
                    onClick={[removeImage, image]}
                  >
                    <IoClose />
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Modal>
    </>
  );
}
