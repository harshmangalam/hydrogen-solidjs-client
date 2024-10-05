import { createStore } from "solid-js/store";
import { uploadProfilePic } from "../../services/user.service";
import { useUIDispatch } from "../../context/ui";
import { useAuthDispatch } from "../../context/auth";

function useUploadProfilePic(refetch) {
  const { addSnackbar } = useUIDispatch();
  const authDispath = useAuthDispatch();
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
      const { data } = await uploadProfilePic({
        coverImage:
          form.coverImage.trim().length > 0 ? form.coverImage : undefined,
        profileImage:
          form.profileImage.trim().length > 0 ? form.profileImage : undefined,
      });
      authDispath.loadCurrentUser();
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error?.response?.data?.message });
    } finally {
      refetch();
    }
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
