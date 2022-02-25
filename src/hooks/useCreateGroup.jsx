import { useNavigate } from "solid-app-router";
import { createStore, produce } from "solid-js/store";
import { useUIDispatch } from "../context/ui";

export default function useCreateGroup() {
  const navigate = useNavigate();
  const { addSnackbar } = useUIDispatch();
  const [form, setForm] = createStore({
    fields: {
      name: "",
      image: "",
      privacy: "",
      invites: [],
    },
  });

  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const handleChange = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const addImage = (image) => {
    setForm("fields", "image", image);
  };
  const removeImage = () => {
    setForm("fields", "image", "");
  };

  const addFriend = (user) => {
    setForm("fields", (produce) => {
      produce.invites.push(user);
    });
  };

  const removeFriend = (userId) => {
    setForm("fields", (produce) => {
      const index = produce.invites.findIndex((u) => u.id === userId);
      if (index > -1) {
        produce.invites.splice(index, 1);
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   const { data } = await createPost(form.fields);
      console.log(form.fields);
      //   setForm("fields", {
      //     name: "",
      //     images: [],
      //     privacy: "",
      //     invites: [],
      //   });
      //   addSnackbar({ type: "success", message: data.message });
      //   navigate("/");
    } catch (error) {
      console.log(error);
      setForm("serverError", error.response.data.message);
    }
  };
  return {
    form,
    addImage,
    removeImage,
    addFriend,
    removeFriend,
    handleChange,
    handleInput,
    handleSubmit,
  };
}
