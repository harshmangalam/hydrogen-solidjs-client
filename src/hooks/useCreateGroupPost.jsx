import { createStore } from "solid-js/store";
import { useUIDispatch } from "../context/ui";
import { useNavigate } from "solid-app-router";

import { createGroupPost } from "../services/group.service";
import { createSignal } from "solid-js";
export default function useCreatePost() {
  const [loading, setLoading] = createSignal(false);
  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();
  const [form, setForm] = createStore({
    content: "",
    image: "",
    groupId: "",
  });

  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm([currentTarget.name], currentTarget.value);
  };

  const addImage = (image) => {
    setForm("image", image);
  };
  const removeImage = () => {
    setForm("image", "");
  };

  const addGroupId = (id) => {
    setForm("groupId", id);
  };
  const removeGroupId = () => {
    setForm("groupId", "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (!form.content.trim().length && !form.image.trim().length) {
        addSnackbar({ type: "error", message: "Post body is empty" });
        return;
      }
      if (!form.groupId) {
        addSnackbar({
          type: "error",
          message: "Choose group in which you want to publish post",
        });
        return;
      }
      const { data } = await createGroupPost(form);
      setForm({
        content: "",
        groupId: "",
        image: "",
      });
      addSnackbar({ type: "success", message: data.message });
      navigate("/groups/created_group_posts");
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    form,
    handleInput,
    handleSubmit,
    addImage,
    removeImage,
    addGroupId,
    removeGroupId,
  };
}
