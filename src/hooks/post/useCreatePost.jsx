import { createStore, produce } from "solid-js/store";
import { useUIDispatch } from "../../context/ui";
import { useNavigate } from "solid-app-router";

import { createPost } from "../../services/post.service";
import { createSignal } from "solid-js";
export default function useCreatePost() {
  const [loading, setLoading] = createSignal(false);

  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();
  const [form, setForm] = createStore({
    content: "",
    audience: "",
    specificAudienceFriends: [],
    image: "",
    feeling: "",
    checkIn: "",
    taggedFriends: [],
  });

  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm([currentTarget.name], currentTarget.value);
  };

  const handleChange = (event) => {
    const currentTarget = event.currentTarget;
    setForm([currentTarget.name], currentTarget.value);
  };

  const addSpecificFriend = (user) => {
    setForm(
      "specificAudienceFriends",
      produce((friends) => {
        friends.push(user);
      })
    );
  };

  const removeSpecificFriend = (userId) => {
    setForm(
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
      "taggedFriends",
      produce((friends) => {
        friends.push(user);
      })
    );
  };
  const removeTaggedFriend = (userId) => {
    setForm(
      "taggedFriends",
      produce((friends) => {
        const index = friends.findIndex((u) => u.id === userId);
        friends.splice(index, 1);
      })
    );
  };

  const addImage = (image) => {
    setForm("image", image);
  };
  const removeImage = () => {
    setForm("image", "");
  };

  const addFeeling = (feeling) => {
    setForm("feeling", feeling);
    
  };

  const removeFeeling = () => {
    setForm("feeling", "");
  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (!form.content.trim().length && !form.image.trim().length) {
        addSnackbar({ type: "error", message: "Post body is empty" });
        return;
      }
      const specificAudienceFriends = form.specificAudienceFriends.map(
        (f) => f.id
      );
      const taggedFriends = form.taggedFriends.map((f) => f.id);
      const { data } = await createPost({
        ...form,
        specificAudienceFriends,
        taggedFriends,
      });
      setForm({
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
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
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
