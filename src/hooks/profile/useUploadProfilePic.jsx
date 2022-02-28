import { createStore } from "solid-js/store";

function useUploadProfilePic() {
  const [form, setForm] = createStore({
    profileImage: "",
    coverImage: "",
  });

  function addProfileImage(image) {
    setForm("profileImage", image);
  }
  function addCoverImage(image) {
    setForm("coverImage", image);
  }

  function removeProfileImage() {
    setForm("profileImage", "");
  }
  function removeCoverImage() {
    setForm("coverImage", "");
  }

  async function handleUploadProfilePic() {
    try {
      console.log(form);
    } catch (error) {}
  }

  return {
    form,
    handleUploadProfilePic,
    addCoverImage,
    addProfileImage,
    removeCoverImage,
    removeProfileImage,
  };
}

export default useUploadProfilePic;
