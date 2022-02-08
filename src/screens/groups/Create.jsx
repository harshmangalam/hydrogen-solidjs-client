import { FaSolidUsers } from "solid-icons/fa";
export default function Create() {
  function handleCreateGroup() {}
  return (
    <div className="py-10">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
       <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
       <FaSolidUsers className="text-4xl text-white" />
       </div>
        <h5 className="text-2xl font-medium ">Create Group</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        <form
          onSubmit={[handleCreateGroup]}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Group name</label>
            <input
              type="text"
              name="name"
              className="rounded-lg dark:bg-gray-700"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="privacy">Group privacy</label>
            <select
              name="privacy"
              id="privacy"
              className="rounded-lg dark:bg-gray-700"
            >
              <option value="public" selected>
                Public
              </option>
              <option value="private">Private</option>
            </select>
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
