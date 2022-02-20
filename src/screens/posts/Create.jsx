import { BsFilePost } from "solid-icons/bs";
import ImageUpload from "../../components/posts/create/ImageUpload";
import SpecificFriends from "../../components/posts/create/SpecificFriends";
import TagPeople from "../../components/posts/create/TagPeople";
import useCreatePost from "../../hooks/useCreatePost";

export default function Create() {
  const {
    form,
    handleChange,
    handleInput,
    handleSubmit,
    addSpecificFriend,
    removeSpecificFriend,
    addTaggedFriend,
    removeTaggedFriend,
  } = useCreatePost();
  return (
    <div className="">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
          <BsFilePost className="text-4xl text-white" />
        </div>
        <h5 className="text-2xl font-medium ">Create Post</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-4  rounded-md shadow">
        {form.serverError && (
          <p className="py-2 bg-red-100 dark:text-red-300 dark:bg-gray-700 text-red-500 rounded-md px-4">
            {form.serverError}
          </p>
        )}
        <form onSubmit={[handleSubmit]} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Post content</label>
            <textarea
              value={form.fields.content}
              onInput={[handleInput]}
              name="content"
              className="rounded-md dark:bg-gray-700"
              rows={5}
            />
          </div>
          <div className="grid grid-cols-1  gap-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="audience">Post privacy</label>
              <select
                value={form.fields.audience}
                onInput={[handleChange]}
                name="audience"
                id="audience"
                className="rounded-md dark:bg-gray-700"
              >
                <option value="">Select</option>
                <option value="PUBLIC">Public</option>
                <option value="FRIENDS">Friends</option>
                <option value="ONLY_ME">Only me</option>
                <option value="SPECIFIC">Specific friends</option>
              </select>
            </div>

            <Show when={form.fields.audience === "SPECIFIC"}>
              <div className="self-end">
                <SpecificFriends
                  friends={form.fields.specificAudienceFriends}
                  addSpecificFriend={addSpecificFriend}
                  removeSpecificFriend={removeSpecificFriend}
                />
              </div>
            </Show>
          </div>

          <div className="flex space-x-4 rounded-md border border-gray-400 dark:border-gray-600 px-2 py-2">
            <TagPeople
              friends={form.fields.taggedFriends}
              addTaggedFriend={addTaggedFriend}
              removeTaggedFriend={removeTaggedFriend}
            />
            <ImageUpload>
              Upload
            </ImageUpload>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-blue-500 text-white rounded-md text-lg"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
