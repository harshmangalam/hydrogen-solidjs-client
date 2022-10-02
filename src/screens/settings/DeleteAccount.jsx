import MainBody from "../../components/settings/MainBody";

export default function DeleteAccount() {
  return (
    <MainBody title="Password Settings">
      <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
        <h2>Are you sure you want to delete your account?</h2>
        <p className='mb-4'>All your data will be <b>permanently deleted!</b></p>
        <button
          type="submit"
          className="w-full py-2 px-3 bg-red-500 text-white rounded-lg text-lg"
        >
          Delete Accout
        </button>
      </div>
    </MainBody>
  );
}
