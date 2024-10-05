import { createStore } from "solid-js/store";
import { uploadGroupPic } from "../../services";
import { useUIDispatch } from "../../context/ui";
import { useParams } from "solid-app-router";

export default function useUploadPic(refetch) {
  const params = useParams();
  const { addSnackbar } = useUIDispatch();
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
      const { data } = await uploadGroupPic(params.groupId, {
        coverImage:
          form.coverImage.trim().length > 0 ? form.coverImage : undefined,
        profileImage:
          form.profileImage.trim().length > 0 ? form.profileImage : undefined,
      });
      refetch();
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
