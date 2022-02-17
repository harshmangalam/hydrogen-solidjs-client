import { FaSolidUser } from "solid-icons/fa";
export default function Login() {
  function handleSubmit() {}
  return (
    <div className="">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
          <FaSolidUser className="text-4xl text-white" />
        </div>
        <h5 className="text-2xl font-medium ">Login</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        <form onSubmit={[handleSubmit]} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Email or Phone</label>
            <input
              type="text"
              name="name"
              className="rounded-lg dark:bg-gray-700"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="name"
              className="rounded-lg dark:bg-gray-700"
            />
          </div>

          <div>
            <button type="submit" className="w-full py-2 px-3 bg-blue-500 text-white rounded-lg text-lg">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
