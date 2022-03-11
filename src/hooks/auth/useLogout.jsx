import { createEffect, createSignal } from "solid-js";
import { useAuthState } from "../../context/auth";
import { useUIDispatch } from "../../context/ui";
import { logout } from "../../services/auth.service";
export default function useLogout() {
  const [loading, setLoading] = createSignal(false);

  createEffect(()=>console.log(authState))
  const authState = useAuthState()
  const {addSnackbar} = useUIDispatch()
  async function logoutUser() {
    try {
      setLoading(true);
      const { data } = await logout(authState?.currentAccount?.id);
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
