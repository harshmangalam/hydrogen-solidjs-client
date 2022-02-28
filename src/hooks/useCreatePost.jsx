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
      image: "",
      feeling: "",
      checkIn: "",
      taggedFriends: [],
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

  const addSpecificFriend = (user) => {
    setForm(
      "fields",
      "specificAudienceFriends",
      produce((friends) => {
        friends.push(user);
      })
    );
  };

  const removeSpecificFriend = (userId) => {
    setForm(
      "fields",
      "specificAudienceFriends",
      produce((friends) => {
        const index = friends.findIndex((u) => u.id === userId);
        if (index > -1) {
          friends.splice(index, 1);
        }
      })
    );
  };

  const addTaggedFriend = (user) => {
    setForm(
      "fields",
      "taggedFriends",
      produce((friends) => {
        friends.push(user);
      })
    );
  };
  const removeTaggedFriend = (userId) => {
    setForm(
      "fields",
      "taggedFriends",
      produce((friends) => {
        const index = friends.findIndex((u) => u.id === userId);
        friends.splice(index, 1);
      })
    );
  };

  const addImage = (image) => {
    setForm("fields", "image", image);
  };
  const removeImage = () => {
    setForm("fields", "image", "");
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
      const specificAudienceFriends = form.fields.specificAudienceFriends.map(
        (f) => f.id
      );
      const taggedFriends = form.fields.taggedFriends.map((f) => f.id);
      const { data } = await createPost({
        ...form.fields,
        specificAudienceFriends,
        taggedFriends,
      });
      setForm("fields", {
        content: "",
        audience: "",
        specificAudienceFriends: [],
        image: "",
        feeling: "",
        gif: "",
        checkIn: "",
        taggedFriends: [],
      });
      addSnackbar({ type: "success", message: data.message });
      navigate("/");
    } catch (error) {
      console.log(error);
      addSnackbar({ type: "error", message: error.response.data.message });
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
    addImage,
    removeImage,
    addFeeling,
    removeFeeling,
  };
}
