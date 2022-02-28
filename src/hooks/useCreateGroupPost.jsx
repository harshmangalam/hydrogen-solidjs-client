import { createStore } from "solid-js/store";
import { useUIDispatch } from "../context/ui";
import { useNavigate } from "solid-app-router";

import { createGroupPost } from "../services/group.service";
export default function useCreatePost() {
  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();
  const [form, setForm] = createStore({
    fields: {
      content: "",
      image: "",
      groupId: "",
    },
  });

  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const addImage = (image) => {
    setForm("fields", "image", image);
  };
  const removeImage = () => {
    setForm("fields", "image", "");
  };

  const addGroupId = (id) => {
    setForm("fields", "groupId", id);
  };
  const removeGroupId = () => {
    setForm("fields", "groupId", "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createGroupPost(form.fields);
      setForm("fields", {
        content: "",
        image: "",
        groupId: "",
      });
      addSnackbar({ type: "success", message: data.message });
      navigate("/groups/created_group_posts");
    } catch (error) {
      console.log(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  };

  return {
    form,
    handleInput,
    handleSubmit,
    addImage,
    removeImage,
    addGroupId,
    removeGroupId,
  };
}
