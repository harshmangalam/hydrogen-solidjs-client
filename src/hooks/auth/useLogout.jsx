import { createSignal } from "solid-js";
import { useUIDispatch } from "../../context/ui";
import { logout } from "../../services/auth.service";
export default function useLogout() {
  const [loading, setLoading] = createSignal(false);
  const {addSnackbar} = useUIDispatch()
  async function logoutUser() {
    try {
      setLoading(true);
      const { data } = await logout();
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      window.location.reload()
    }
  }
  return {
    logoutUser,
    loading: loading(),
  };
}
