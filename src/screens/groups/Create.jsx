import { BiImage } from "solid-icons/bi";
import { FaSolidUsers } from "solid-icons/fa";
import InvitePeople from "../../components/groups/Create/InvitePeople";
import ImageUpload from "../../components/shared/ImageUpload";
import useCreateGroup from "../../hooks/useCreateGroup";
export default function CreateGroup() {
  const {
    addInvitedPeople,
    addCoverImage,
    addProfileImage,
    form,
    handleChange,
    handleInput,
    handleSubmit,
    removeInvitedPeople,
    removeCoverImage,
    removeProfileImage,
  } = useCreateGroup();
  return (
    <div className="py-4">
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
              onChange={[handleChange]}
            >
              <option value="PUBLIC" selected>
                Public
              </option>
              <option value="PRIVATE">Private</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageUpload
              image={form.fields.profileImage}
              addImage={addProfileImage}
              removeImage={removeProfileImage}
              btnClass=" flex space-x-2 items-center bg-green-100 text-green-700 px-4 py-2 rounded-md font-medium dark:bg-green-400 dark:text-black"
            >
              <BiImage className="text-2xl" />
              <span>Profile Image</span>
            </ImageUpload>
            <ImageUpload
              image={form.fields.coverImage}
              addImage={addCoverImage}
              removeImage={removeCoverImage}
              btnClass=" flex space-x-2 items-center bg-green-100 text-green-700 px-4 py-2 rounded-md font-medium dark:bg-green-400 dark:text-black"
            >
              <BiImage className="text-2xl" />
              <span>Cover Image</span>
            </ImageUpload>
          </div>
 
          <InvitePeople
            friends={form.fields.invitedPeople}
            addFriend={addInvitedPeople}
            removeFriend={removeInvitedPeople}
          />

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
