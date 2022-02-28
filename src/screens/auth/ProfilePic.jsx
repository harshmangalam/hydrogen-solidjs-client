import useUploadProfilePic from "../../hooks/profile/useUploadProfilePic";
import { FaSolidCamera } from "solid-icons/fa";
import ImageUpload from "../../components/shared/ImageUpload";
import coverImage from "../../assets/cover.jpg";
import profileImage from "../../assets/profile.svg";
export default function Profile() {
  const {
    addCoverImage,
    addProfileImage,
    form,
    handleUploadProfilePic,
    removeCoverImage,
    removeProfileImage,
  } = useUploadProfilePic();
  return (
    <div>
      <div className="h-[60vh] bg-white shadow dark:bg-gray-800 flex flex-col justify-between">
        <div className="bg-gray-100 dark:bg-gray-900 h-4/6  rounded-b-lg w-full max-w-2xl mx-auto relative">
          <img
            src={form.coverImage || coverImage}
            className="w-full h-full aspect-auto object-cover"
          />
          <div className="absolute -bottom-20 md:-bottom-28 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0">
            <div className="relative">
              <img
                src={form.profileImage || profileImage}
                className="w-40 h-40 rounded-full aspect-auto object-cover"
              />

              <div className="absolute bottom-4 right-0">
                <ImageUpload
                  btnClass="w-10 h-10 rounded-full grid place-items-center bg-blue-500 hover:bg-blue-600"
                  image={form.profileImage}
                  addImage={addProfileImage}
                  removeImage={removeProfileImage}
                >
                  <FaSolidCamera className="text-xl text-white" />
                </ImageUpload>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-3">
            <ImageUpload
              btnClass="py-2 px-4 rounded-lg flex items-center space-x-2 bg-blue-500 text-white font-medium hover:bg-blue-600"
              image={form.coverImage}
              addImage={addCoverImage}
              removeImage={removeCoverImage}
            >
              <FaSolidCamera />
              <span className="hidden md:block">Add Cover Photo</span>
            </ImageUpload>
          </div>
        </div>
      </div>

      <div className="py-4 max-w-xs mx-auto px-4 md:px-0">
        <div className="grid grid-cols-2 gap-4">
          <button
            className="py-2 px-10 bg-blue-500 text-white font-bold text-xl rounded-full hover:bg-blue-600"
            onClick={[handleUploadProfilePic]}
          >
            Save
          </button>
          <button
            className="py-2 px-10 bg-gray-200 text-gray-600 dark:text-gray-200 font-bold text-xl rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={[handleUploadProfilePic]}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
