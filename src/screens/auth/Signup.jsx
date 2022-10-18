import { Link } from "solid-app-router";
import { Show } from "solid-js";
import Radio from "../../components/ui/form/Radio";
import useSignup from "../../hooks/auth/useSignup";
import { ImSpinner2 } from "solid-icons/im";

export default function Login() {
  const {
    form,
    handleInput,
    handlePassword,
    handleSignup,
    handleRadioChange,
    loading,
  } = useSignup();

  return (
    <div className="">
      <div className="my-4 flex flex-col items-center max-w-md mx-auto">
        <h5 className="text-2xl font-medium ">Sign Up</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        <form
          onSubmit={[handleSignup]}
          className="flex flex-col space-y-4 mt-2"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                name="firstName"
                className="rounded-lg dark:bg-gray-700"
                value={form.firstName}
                onInput={[handleInput]}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                name="lastName"
                className="rounded-lg dark:bg-gray-700"
                value={form.lastName}
                onInput={[handleInput]}
              />
            </div>
          </div>
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
              onInput={[handlePassword]}
              minLength={12}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <p>Gender</p>
            <div className="grid grid-cols-3 gap-2">
              <Radio
                onChange={(e) => handleRadioChange(e)}
                value="MALE"
                type="radio"
                isChecked={form.gender === "MALE"}
                name="gender"
                label={"Male"}
              />
              <Radio
                onChange={(e) => handleRadioChange(e)}
                value="FEMALE"
                type="radio"
                isChecked={form.gender === "FEMALE"}
                name="gender"
                label={"Female"}
              />
              <Radio
                onChange={(e) => handleRadioChange(e)}
                value="OTHER"
                type="radio"
                isChecked={form.gender === "OTHER"}
                name="gender"
                label={"Other"}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading()}
              className={
                "w-full  flex justify-center py-2 px-3 bg-blue-500 text-white rounded-lg text-lg " +
                (loading() ? "opacity-60" : "opacity-100")
              }
            >
              <Show
                className="items-center"
                when={!loading()}
                fallback={
                  <ImSpinner2 className="items-center animate-spin w-8 h-8" />
                }
              >
                Sign Up
              </Show>
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Link
            href="/auth/login"
            className="w-full rounded-md  px-4 flex justify-center hover:bg-green-600 bg-green-500 py-2 text-white font-bold"
          >
            Already have an account? Login
          </Link>
        </div>
      </section>
    </div>
  );
}
