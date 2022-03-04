import { createStore } from "solid-js/store";
import { useAuthState } from "../../context/auth";

export default function useEditProfile() {
  const { currentUser } = useAuthState();
  const [store, setStore] = createStore({
    fields: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      gender: currentUser.gender,
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
