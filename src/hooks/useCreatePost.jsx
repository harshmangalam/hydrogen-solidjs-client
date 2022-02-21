import { createStore, produce } from "solid-js/store";
import { useUIDispatch } from "../context/ui";
import { useNavigate } from "solid-app-router";

import { createPost } from "../services/post.service";
export default function useCreatePost() {
  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();
  const [form, setForm] = createStore({
    fields: {
      content: "",
      audience: "",
      specificAudienceFriends: [],
      images: [],
      feeling: "",
      gif: "",
      checkIn: "",
      taggedFriends: [],
    },

    serverError: "",
  });

  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const handleChange = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const addSpecificFriend = (user) => {
    setForm("fields", (produce) => {
      produce.specificAudienceFriends.push(user);
    });
  };

  const removeSpecificFriend = (userId) => {
    setForm("fields", (produce) => {
      const index = produce.specificAudienceFriends.findIndex(
        (u) => u.id === userId
      );
      if (index > -1) {
        produce.specificAudienceFriends.splice(index, 1);
      }
    });
  };

  const addTaggedFriend = (user) => {
    setForm("fields", (produce) => {
      produce.taggedFriends.push(user);
    });
  };
  const removeTaggedFriend = (userId) => {
    setForm("fields", (produce) => {
      const index = produce.taggedFriends.findIndex((u) => u.id === userId);
      produce.taggedFriends.splice(index, 1);
    });
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

  const addFeeling = (feeling) => {
    setForm("fields", "feeling", feeling);
    console.log(feeling);
  };

  const removeFeeling = () => {
    setForm("fields", "feeling", "");
    console.log(form.fields.feeling);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createPost(form.fields);
      setForm("fields", {
        content: "",
        audience: "",
        specificAudienceFriends: [],
        images: [],
        feeling: "",
        gif: "",
        checkIn: "",
        taggedFriends: [],
      });
      addSnackbar({ type: "success", message: data.message });
      navigate("/");
    } catch (error) {
      console.log(error);
      setForm("serverError", error.response.data.message);
    }
  };

  return {
    form,
    handleChange,
    handleInput,
    handleSubmit,
    addSpecificFriend,
    removeSpecificFriend,
    removeTaggedFriend,
    addTaggedFriend,
    addImages,
    removeImage,
    addFeeling,
    removeFeeling,
  };
}
