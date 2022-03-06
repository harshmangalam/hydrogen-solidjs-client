import { createStore } from "solid-js/store";
import { useNavigate } from "solid-app-router";
import { useAuthDispatch } from "../../context/auth";
import { useUIDispatch } from "../../context/ui";
import { login } from "../../services/auth.service";
export default function useLogin() {
  const [form, setForm] = createStore({
    fields: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
    },
    hasError: false,
  });

  const { setCurrentUser, initSocketManager } = useAuthDispatch();
  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();

  const handleInput = (ev) => {
    setForm("hasError", false);
    setForm("errors", [ev.currentTarget.name], "");
    setForm("fields", [ev.currentTarget.name], ev.currentTarget.value);
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    if (form.fields.email.trim().length === 0) {
      setForm("errors", "email", "Email must not be empty");
      setForm("hasError", true);
    }
    if (form.fields.password.trim().length === 0) {
      setForm("errors", "password", "Password must not be empty");
      setForm("hasError", true);
    }

    if (form.hasError) {
      return;
    }
    try {
      const { data } = await login(form.fields);
      setCurrentUser(data.data.user);
      addSnackbar({ type: "success", message: data.message });
      initSocketManager();
      navigate("/", { replace: true });
    } catch (error) {
      addSnackbar({ type: "error", message: error.response.data.message });
    }
  };
  return {
    form,
    handleLogin,
    handleInput,
  };
}
