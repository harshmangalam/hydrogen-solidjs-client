import { BsFilePost } from "solid-icons/bs";
import SpecificFriends from "../../components/posts/create/SpecificFriends";
import TagPeople from "../../components/posts/create/TagPeople";

export default function Create() {
  const handleCreatePost = () => {};
  return (
    <div className="">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
          <BsFilePost className="text-4xl text-white" />
        </div>
        <h5 className="text-2xl font-medium ">Create Post</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        <form onSubmit={[handleCreatePost]} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Post content</label>
            <textarea name="content" className="rounded-lg dark:bg-gray-700" />
          </div>
          <div className="grid grid-cols-1  gap-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="privacy">Post privacy</label>
              <select
                name="privacy"
                id="privacy"
                className="rounded-lg dark:bg-gray-700"
              >
                <option value="PUBLIC" selected>
                  Public
                </option>
                <option value="FRIENDS">Friends</option>
                <option value="ONLY_ME">Only me</option>
                <option value="SPECIFIC">Specific friends</option>
              </select>
            </div>

            <Show when={true}>
              <div className="self-end">
              <SpecificFriends />
              </div>
            </Show>
          </div>

          <div className="flex space-x-4 rounded-md border border-gray-400 dark:border-gray-600 px-2 py-2">
            <TagPeople />
          </div>

          <div>
            <button className="w-full py-2 px-3 bg-blue-500 text-white rounded-lg text-lg">
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
