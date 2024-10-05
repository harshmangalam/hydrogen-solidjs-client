import { createSignal } from "solid-js";
import { useAuthState } from "../../context/auth";
import { useUIDispatch } from "../../context/ui";
import { logout } from "../../services/auth.service";
export default function useLogout() {
  const [loading, setLoading] = createSignal(false);
  const authState = useAuthState();
  const { addSnackbar } = useUIDispatch();
  const channel = new BroadcastChannel("logout");

  async function logoutUser() {
    try {
      setLoading(true);
      const { data } = await logout(authState?.currentAccount?.id);
      addSnackbar({ type: "success", message: data.message });
      channel.postMessage("logout_success");
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      window.location.reload();
    }
  }
  return {
    logoutUser,
    loading: loading(),
  };
}
