import { createSignal, mergeProps, Show } from "solid-js";
import Modal from "../ui/feedback/Modal";
import { BsImages } from "solid-icons/bs";
import { IoClose } from "solid-icons/io";
import TextDivider from "../ui/dataDisplay/TextDivider";
import useCloudinary from "../../hooks/useCloudinary";

export default function ImageUpload(props) {
  const cloudinary = useCloudinary();
  /* 
    - `props.sizeLimit` could be 'standard' or 'extended'
    - standard limit will evaluate to 1 and extended will exaluate to 2 
  */
  const fileSizeLimit = props.sizeLimit === "extended" ? 2 : 1; // set fileSizeLimit
  const merged = mergeProps(
    {
      title: "Upload Image",
      btnClass:
        "rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-12 h-12 text-3xl text-black dark:text-white grid place-items-center",
    },
    props
  );
  const [openModal, setOpenModal] = createSignal(false);
  const [urlField, setUrlField] = createSignal("");
  const [error, setError] = createSignal("");
  let imageRef;

  const handleImageChange = async (event) => {
    const file = event.target.files[0]
    const image = URL.createObjectURL(file);
    merged.addImage(image);
    try {
      const currentFileSizeInMB = file.size / 1024 / 1024;

      if (currentFileSizeInMB >= fileSizeLimit) {
        setError(`File size exceed! Please choose a file smaller than or equal to ${fileSizeLimit} mb.`)
        removeImage(image);
        return;
      } else {
        setError("");
        const data = await cloudinary.upload(file);
        merged.addImage(data.url);
      }

    } catch (error) { }
  };

  const removeImage = (url) => {
    URL.revokeObjectURL(url);
    merged.removeImage(url);
  };

  const handleAddImage = () => {
    merged.addImage(urlField());
    setUrlField("");
    setError("");
  };

  return (
    <>
      <button
        title="Add Image"
        type="button"
        className={merged.btnClass}
        onClick={() => setOpenModal(true)}
      >
        {merged.children}
      </button>
      <input
        type="file"
        ref={imageRef}
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <Modal
        onClose={() => { setOpenModal(false); setError(""); }}
        open={openModal()}
        title={merged.title}
        onDone={merged.onDone}
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
                  <p className="text-xl">Add Image</p>
                </div>
              </div>
            </button>

            <TextDivider text="OR" />

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
            {/* div to display error messages */}
            <div className="text-red-500 block">{error && error}</div>
          </div>

          <Show when={merged.image}>
            <div className="relative">
              <img
                src={merged.image}
                className="w-full h-full aspect-square object-cover rounded-lg"
              />
              <button
                className="absolute top-2 right-2 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-8 h-8 text-xl text-black dark:text-white grid place-items-center"
                onClick={[removeImage]}
              >
                <IoClose />
              </button>
            </div>
          </Show>
        </div>
      </Modal>
    </>
  );
}
