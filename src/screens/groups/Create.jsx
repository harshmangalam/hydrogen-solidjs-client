export default function Create() {
  function handleCreateGroup() {}
  return (
    <div className="">
      <section className="max-w-md mx-auto bg-white  px-4 py-4  rounded-lg">
        <form
          onSubmit={[handleCreateGroup]}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Group name</label>
            <input type="text" name="name" className="rounded-lg" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="privacy">Group privacy</label>
            <select name="privacy" id="privacy" className="rounded-lg">
              <option value="public" selected>
                Public
              </option>
              <option value="private">Private</option>
            </select>
          </div>

          <div>
            <button className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg text-lg">
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
