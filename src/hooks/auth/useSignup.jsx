import { createStore } from "solid-js/store";
import { useUIDispatch } from "../../context/ui";
import { useNavigate } from "solid-app-router";
import { signup } from "../../services/auth.service";
import { createSignal } from "solid-js";
export default function useSignup() {
  const [loading, setLoading] = createSignal(false);
  const [form, setForm] = createStore({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });

  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();

  const handlePassword = (ev) => {
    let str = ev.currentTarget.value;
    let upValidation = /[A-Z]/g;
    let digValidation = /\d/g;
    let validPassword = false;

    if (upValidation.test(str)) {
      validPassword = true;
      ev.currentTarget.setCustomValidity("");
    } else
      ev.currentTarget.setCustomValidity(
        "Password must contain at least 1 uppercase, min length 12"
      );

    if (validPassword) {
      validPassword = false;
      if (digValidation.test(str)) {
        validPassword = true;
        ev.currentTarget.setCustomValidity("");
      } else
        ev.currentTarget.setCustomValidity(
          "Password must contain at least 1 numerical value, min length 12"
        );
    }

    if (validPassword) {
      setForm([ev.currentTarget.name], ev.currentTarget.value);
    }
  };

  const handleInput = (ev) => {
    setForm([ev.currentTarget.name], ev.currentTarget.value);
  };

  const handleRadioChange = (ev) => {
    setForm("gender", ev.target.value);
  };

  const handleSignup = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const { data } = await signup(form);
      addSnackbar({ type: "success", message: data.message });
      navigate("/auth/login");
    } catch (error) {
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    form,
    handleSignup,
    handleInput,
    handlePassword,
    handleRadioChange,
  };
}
