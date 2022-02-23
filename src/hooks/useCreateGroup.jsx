import { useNavigate } from "solid-app-router";
import { createStore, produce } from "solid-js/store";
import { useUIDispatch } from "../context/ui";

export default function useCreateGroup() {
  const navigate = useNavigate();
  const { addSnackbar } = useUIDispatch();
  const [form, setForm] = createStore({
    fields: {
      name: "",
      images: [],
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

  const addImages = (images) => {
    setForm(
      "fields",
      "images",
      produce((i) => {
        i.push(...images);
      })
    );
  };
  const removeImage = (image) => {
    setForm(
      "fields",
      "images",
      produce((images) => {
        const index = images.indexOf(image);
        if (index > -1) {
          images.splice(index, 1);
        }
      })
    );
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
      console.log(form.fields)
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
    addImages,
    removeImage,
    addFriend,
    removeFriend,
    handleChange,
    handleInput,
    handleSubmit,
  };
}
