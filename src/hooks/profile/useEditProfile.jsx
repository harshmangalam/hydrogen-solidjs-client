import { createStore } from "solid-js/store";
import { useAuthState } from "../../context/auth";

export default function useEditProfile() {
  const authState = useAuthState();
  const [store, setStore] = createStore({
    fields: {
      firstName: authState.currentUser.firstName,
      lastName: authState.currentUser.lastName,
      email: authState.currentUser.email,
      gender: authState.currentUser.gender,
    },
  });

  function onInput(e) {
    setStore("fields", [e.currentTarget.name], e.currentTarget.value);
  }
  function onChange(e) {
    console.log(e);
    setStore("fields", [e.currentTarget.name], e.currentTarget.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(store.fields);
    } catch (error) {
      console.log(error);
    }
  }
  return {
    store,
    onInput,
    onChange,
    handleSubmit,
  };
}
