import { createStore } from "solid-js/store";
import { updateGroupDetails } from "../../services";
import { useUIDispatch } from "../../context/ui";
import { useParams } from "solid-app-router";


export default function useEditGroup(data, refetch) {
  const params = useParams()
  const { addSnackbar } = useUIDispatch();
  const [form, setForm] = createStore({
    name: data.name,
  });

  function onInput(e) {
    setForm([e.currentTarget.name], e.currentTarget.value);
  }
  function onChange(e) {
    setForm([e.currentTarget.name], e.currentTarget.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await updateGroupDetails(params.groupId,form);
      refetch();
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
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
