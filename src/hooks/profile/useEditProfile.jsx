import { createStore } from "solid-js/store";
import { useAuthState } from "../../context/auth";
import { updateUserDetails } from "../../services";
import { useUIDispatch } from "../../context/ui";
import { useAuthDispatch } from "../../context/auth";

export default function useEditProfile(refetch) {
  const { addSnackbar } = useUIDispatch();
  const authState = useAuthState();
  const { loadCurrentUser } = useAuthDispatch();
  const [form, setForm] = createStore({
    firstName: authState.currentUser.firstName,
    lastName: authState.currentUser.lastName,
    email: authState.currentUser.email,
    gender: authState.currentUser.gender,
  });

  function onInput(e) {
    setForm([e.currentTarget.name], e.currentTarget.value);
  }
  function onChange(e) {
    console.log(e);
    setForm([e.currentTarget.name], e.currentTarget.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await updateUserDetails(form);
      loadCurrentUser();
      refetch();
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.log(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  }
  return {
    form,
    onInput,
    onChange,
    handleSubmit,
  };
}
