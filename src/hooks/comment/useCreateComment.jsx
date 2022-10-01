import { useParams } from "solid-app-router";

import { createStore } from "solid-js/store";
import { useUIDispatch } from "../../context/ui";
import { createComment } from "../../services";
export default function useCreateComment(refetchComment) {
  const params = useParams();
  const { addSnackbar } = useUIDispatch();
  const [form, setForm] = createStore({
    content: "",
    postId: params.postId,
  });

  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm([currentTarget.name], currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.content.trim().length) {
      addSnackbar({ type: "error", message: "Post body is empty" });
      return;
    }
    form.content.replace(/\n/g, "");

    try {
      const { data } = await createComment(form);
      setForm("content", "");
      setForm("type", "");
      addSnackbar({ type: "success", message: data.message });
      refetchComment();
    } catch (error) {
      console.log(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  };
  return {
    form,
    handleInput,
    handleSubmit,
  };
}
