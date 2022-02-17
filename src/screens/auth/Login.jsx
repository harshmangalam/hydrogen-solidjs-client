import { FaSolidUser } from "solid-icons/fa";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { form, handleInput, handleLogin } = useLogin();
  return (
    <div className="">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
          <FaSolidUser className="text-4xl text-white" />
        </div>
        <h5 className="text-2xl font-medium ">Log In</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        {form.serverError && (
          <p className="py-2 bg-red-100 dark:text-red-300 dark:bg-gray-700 text-red-500 rounded-md px-4">{form.serverError}</p>
        )}
        <form onSubmit={[handleLogin]} className="flex flex-col space-y-4 mt-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="email"
              className="rounded-lg dark:bg-gray-700"
              value={form.fields.email}
              onInput={[handleInput]}
            />
            {form.errors.email && (
              <p className="text-red-500 text-sm">{form.errors.email}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              className="rounded-lg dark:bg-gray-700"
              value={form.fields.password}
              onInput={[handleInput]}
            />
            {form.errors.password && (
              <p className="text-red-500 text-sm">{form.errors.password}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-blue-500 text-white rounded-lg text-lg"
            >
              Log In
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
