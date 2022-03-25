import MainBody from "../../components/settings/MainBody";
import useChangePassword from "../../hooks/settings/useChangePassword";
export default function ChangePassword() {
  const { form, handleInput, handleSubmit } = useChangePassword();
  return (
    <MainBody title="Password Settings">
      <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
        <form
          onSubmit={[handleSubmit]}
          className="flex flex-col space-y-4 mt-2"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              className="rounded-lg dark:bg-gray-700"
              value={form.fields.currentPassword}
              onInput={[handleInput]}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">New Password</label>
            <input
              type="password"
              name="newPassword"
              className="rounded-lg dark:bg-gray-700"
              value={form.fields.newPassword}
              onInput={[handleInput]}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-purple-500 text-white rounded-lg text-lg"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </MainBody>
  );
}
