import { createStore } from "solid-js/store";
import { changePassword } from "../../services/user.service";
import { useUIDispatch } from "../../context/ui";
export default function useChangePassword() {
  const { addSnackbar } = useUIDispatch();
  const [form, setForm] = createStore({
    fields: {
      newPassword: "",
      currentPassword: "",
    },
  });

  const handleInput = (ev) => {
    setForm("fields", [ev.currentTarget.name], ev.currentTarget.value);
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    try {
      const { data } = await changePassword(form.fields);
      setForm("fields", "currentPassword", "");
      setForm("fields", "newPassword", "");
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  };
  return {
    form,
    handleInput,
    handleSubmit,
  };
}
