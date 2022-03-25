import { Link } from "solid-app-router";
import { Show } from "solid-js";
import useLogin from "../../hooks/auth/useLogin";

export default function Login() {
  const { form, handleInput, handleLogin, loading } = useLogin();

  return (
    <div className="">
      <div className="my-4 flex flex-col items-center  max-w-md mx-auto">
        <h5 className="text-2xl font-medium ">Log In</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        <form onSubmit={[handleLogin]} className="flex flex-col space-y-4 mt-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              className="rounded-lg dark:bg-gray-700"
              value={form.email}
              onInput={[handleInput]}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              className="rounded-lg dark:bg-gray-700"
              value={form.password}
              onInput={[handleInput]}
              required
            />
          </div>

          <div>
            <button
              disabled={loading()}
              type="submit"
              className="w-full s py-2 px-3 bg-blue-500 text-white rounded-lg text-lg"
            >
              <Show when={!loading()} fallback="Logging in...">
                Log In
              </Show>
            </button>
          </div>
        </form>

        <div className="mt-4">
          <Link
            href="/auth/signup"
            className="w-full rounded-md  px-4 flex justify-center hover:bg-green-600 bg-green-500 py-2 text-white font-bold"
          >
            Not have an account? Signup
          </Link>
        </div>
      </section>
    </div>
  );
}
