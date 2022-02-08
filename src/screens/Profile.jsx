import UploadProfilePic from "../components/profile/UploadProfilePic";

export default function Profile() {
  return (
    <div>
      <div className="h-[80vh] dark:bg-gray-800">
        <div className="bg-gray-900 h-4/6 rounded-b-lg w-full max-w-4xl mx-auto relative">
          <UploadProfilePic />
        </div>
      </div>
    </div>
  );
}
