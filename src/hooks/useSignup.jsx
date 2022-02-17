import { createStore } from "solid-js/store";
import axios from "axios";
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

  const handleInput = (ev) => {
    setForm("hasError", false);
    setForm("serverError", "");
    setForm("errors", [ev.currentTarget.name], "");
    setForm("fields", [ev.currentTarget.name], ev.currentTarget.value);
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
      console.log(data);
    } catch (error) {
      if (error.response.status === 422) {
        console.log(error.response.data);
      }
    }
  };
  return {
    form,
    handleSignup,
    handleInput,
  };
}
