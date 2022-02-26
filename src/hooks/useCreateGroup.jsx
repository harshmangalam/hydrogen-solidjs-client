import { useNavigate } from "solid-app-router";
import { createStore, produce } from "solid-js/store";
import { useUIDispatch } from "../context/ui";
import { createGroup } from "../services/group.service";
export default function useCreateGroup() {
  const navigate = useNavigate();
  const { addSnackbar } = useUIDispatch();
  const [form, setForm] = createStore({
    fields: {
      name: "",
      coverImage: "",
      profileImage: "",
      privacy: "",
      invitedPeople: [],
    },
  });

  const addProfileImage = (image) => {
    setForm("fields", "profileImage", image);
  };
  const addCoverImage = (image) => {
    setForm("fields", "coverImage", image);
  };

  const removeProfileImage = () => {
    setForm("fields", "profileImage", "");
  };
  const removeCoverImage = () => {
    setForm("fields", "coverImage", "");
  };
  const handleInput = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const handleChange = (event) => {
    const currentTarget = event.currentTarget;
    setForm("fields", [currentTarget.name], currentTarget.value);
  };

  const addInvitedPeople = (user) => {
    setForm(
      "fields",
      "invitedPeople",
      produce((users) => {
        users.push(user);
      })
    );
  };

  const removeInvitedPeople = (userId) => {
    setForm(
      "fields",
      "invitedPeople",
      produce((users) => {
        const index = users.findIndex((u) => u.id === userId);
        if (index > -1) {
          users.splice(index, 1);
        }
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createGroup({
        ...form.fields,
        invitedPeople: form.fields.invitedPeople.map((u) => u.id),
      });

      setForm("fields", {
        coverImage: "",
        profileImage: "",
        invitedPeople: [],
        name: "",
        privacy: "",
      });
      addSnackbar({ type: "success", message: data.message });
      navigate(`/groups/${data.data.group.id}`);
    } catch (error) {
      console.log(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  };
  return {
    addCoverImage,
    addProfileImage,
    removeCoverImage,
    removeProfileImage,
    form,
    addInvitedPeople,
    removeInvitedPeople,
    handleChange,
    handleInput,
    handleSubmit,
  };
}
