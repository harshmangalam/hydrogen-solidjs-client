import { FaSolidUser } from "solid-icons/fa";
import Radio from "../../components/ui/form/Radio";
import useSignup from "../../hooks/useSignup";

export default function Login() {
  const { form, handleInput, handleSignup, handleRadioChange } = useSignup();
  return (
    <div className="">
      <div className="my-4 flex flex-col items-center space-y-2 max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-500 rounded-full grid place-items-center">
          <FaSolidUser className="text-4xl text-white" />
        </div>
        <h5 className="text-2xl font-medium ">Sign Up</h5>
      </div>
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-8  rounded-lg shadow">
        {form.serverError && (
          <p className="py-2 bg-red-100 dark:text-red-300 dark:bg-gray-700 text-red-500 rounded-md px-4">
            {form.serverError}
          </p>
        )}
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
                value={form.fields.firstName}
                onInput={[handleInput]}
              />
              {form.errors.firstName && (
                <p className="text-red-500 text-sm">{form.errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                name="lastName"
                className="rounded-lg dark:bg-gray-700"
                value={form.fields.lastName}
                onInput={[handleInput]}
              />
              {form.errors.lastName && (
                <p className="text-red-500 text-sm">{form.errors.lastName}</p>
              )}
            </div>
          </div>
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

          <div className="flex flex-col space-y-2">
            <p>Gender</p>
            <div className="grid grid-cols-3 gap-2">
              <Radio
                onChange={(e) => handleRadioChange(e)}
                value="MALE"
                type="radio"
                isChecked={form.fields.gender === "MALE"}
                name="gender"
                label={"Male"}
              />
              <Radio
                onChange={(e) => handleRadioChange(e)}
                value="FEMALE"
                type="radio"
                isChecked={form.fields.gender === "FEMALE"}
                name="gender"
                label={"Female"}
              />
              <Radio
                onChange={(e) => handleRadioChange(e)}
                value="OTHER"
                type="radio"
                isChecked={form.fields.gender === "OTHER"}
                name="gender"
                label={"Other"}
              />
            </div>
            {form.errors.gender && (
              <p className="text-red-500 text-sm">{form.errors.gender}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-blue-500 text-white rounded-lg text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
