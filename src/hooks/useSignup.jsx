import { createStore } from "solid-js/store";
import axios from "axios";
import { useUIDispatch } from "../context/ui";
import { useNavigate } from "solid-app-router";
export default function useSignup() {
  const [form, setForm] = createStore({
    fields: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
    },
    hasError: false,

    serverError: "",
  });

  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();

  const handleInput = (ev) => {
    setForm("hasError", false);
    setForm("serverError", "");
    setForm("errors", [ev.currentTarget.name], "");
    setForm("fields", [ev.currentTarget.name], ev.currentTarget.value);
  };

  const handleRadioChange = (ev) => {
    setForm("hasError", false);
    setForm("serverError", "");
    setForm("errors", "gender", "");
    setForm("fields", "gender", ev.target.value);
  };

  const handleSignup = async (ev) => {
    ev.preventDefault();
    if (form.fields.firstName.trim().length === 0) {
      setForm("errors", "firstName", "First name must not be empty");
      setForm("hasError", true);
    }
    if (form.fields.email.trim().length === 0) {
      setForm("errors", "email", "Email must not be empty");
      setForm("hasError", true);
    }
    if (form.fields.password.trim().length === 0) {
      setForm("errors", "password", "Password must not be empty");
      setForm("hasError", true);
    }

    if (form.fields.gender.trim().length === 0) {
      setForm("errors", "gender", "Gender must not be empty");
      setForm("hasError", true);
    }

    if (form.hasError) {
      return;
    }
    try {
      const { data } = await axios.post("/auth/signup", form.fields);
      addSnackbar({ type: "success", message: data.message });
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      setForm("serverError", error.response.data.message);
    }
  };
  return {
    form,
    handleSignup,
    handleInput,
    handleRadioChange,
  };
}
