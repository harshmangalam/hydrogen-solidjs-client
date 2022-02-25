import { BiImage } from "solid-icons/bi";
import { FaSolidUsers } from "solid-icons/fa";
import ImageUpload from "../../components/shared/ImageUpload";
import useCreateGroup from "../../hooks/useCreateGroup";
export default function CreateGroup() {
  const {
    addFriend,
    addImage,
    form,
    handleChange,
    handleInput,
    handleSubmit,
    removeFriend,
    removeImage,
  } = useCreateGroup();
  return (
    <div className="py-10">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
          <FaSolidUsers className="text-4xl text-white" />
        </div>
        <h5 className="text-2xl font-medium ">Create Group</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        <form onSubmit={[handleSubmit]} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Group name</label>
            <input
              type="text"
              name="name"
              className="rounded-lg dark:bg-gray-700"
              value={form.fields.name}
              onInput={[handleInput]}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="privacy">Group privacy</label>
            <select
              name="privacy"
              id="privacy"
              className="rounded-lg dark:bg-gray-700"
              value={form.fields.privacy}
              onChange={[handleInput]}
            >
              <option value="PUBLIC" selected>
                Public
              </option>
              <option value="PRIVATE">Private</option>
            </select>
          </div>

          <div className="py-2 flex justify-center">
            <ImageUpload
              image={form.fields.image}
              addImage={addImage}
              removeImage={removeImage}
              btnClass="bg-green-100 text-green-700 px-4 py-2 rounded-md flex items-center space-x-3 font-medium dark:bg-green-400 dark:text-green-900"
            >
              <BiImage size={28} />
              <span>Add Group Image</span>
            </ImageUpload>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-blue-500 text-white rounded-lg text-lg"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
