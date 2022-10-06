import { BiImage } from "solid-icons/bi";
import { Show } from "solid-js";
import InvitePeople from "../../components/groups/Create/InvitePeople";
import ImageUpload from "../../components/shared/ImageUpload";
import useCreateGroup from "../../hooks/useCreateGroup";
import { ImSpinner2 } from "solid-icons/im";

export default function CreateGroup() {
  const {
    loading,
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
            required
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
            required
          >
            <option value="">Select</option>
            <option value="PUBLIC">Public</option>
            <option value="PRIVATE">Private</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageUpload
            image={form.fields.profileImage}
            addImage={addProfileImage}
            removeImage={removeProfileImage}
            title="Group Profile Image"
            btnClass=" flex space-x-2 items-center bg-green-100 text-green-700 px-4 py-2 rounded-md font-medium dark:bg-green-400 dark:text-black"
          >
            <BiImage className="text-2xl" />
            <span>Profile Image</span>
          </ImageUpload>
          <ImageUpload
            image={form.fields.coverImage}
            addImage={addCoverImage}
            removeImage={removeCoverImage}
            title="Group Cover Image"
            btnClass=" flex space-x-2 items-center bg-green-100 text-green-700 px-4 py-2 rounded-md font-medium dark:bg-green-400 dark:text-black"
            sizeLimit="extended"
          >
            <BiImage className="text-2xl" />
            <span>Cover Image</span>
          </ImageUpload>
        </div>

        <Show when={form.fields.privacy === "PRIVATE"}>
          <InvitePeople
            friends={form.fields.invitedPeople}
            addFriend={addInvitedPeople}
            removeFriend={removeInvitedPeople}
          />
        </Show>

        <div>
          <button
            disabled={loading()}
            type="submit"
            className={
              "flex justify-center w-full s py-2 px-3 bg-blue-500 text-white rounded-lg text-lg " +
              (loading() ? "opacity-60" : "opacity-100")
            }
          >
            <Show
              when={!loading()}
              fallback={<ImSpinner2 className="animate-spin w-8 h-8" />}
            >
              Create
            </Show>
          </button>
        </div>
      </form>
    </section>
  );
}
