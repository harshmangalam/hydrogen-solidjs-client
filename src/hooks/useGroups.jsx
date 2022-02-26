import { createSignal } from "solid-js";
import { joinGroup } from "../services/group.service";

import { useUIDispatch } from "../context/ui";
export default function useGroups(refetch) {
  const [loading, setLoading] = createSignal(false);
  const { addSnackbar } = useUIDispatch();

  async function handleJoinGroup(groupId) {
    try {
      setLoading(true);
      const { data } = await joinGroup(groupId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.log(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }
  return {
    loading,
    handleJoinGroup,
  };
}
