import { createStore } from "solid-js/store";
import { useNavigate } from "solid-app-router";
import { useAuthDispatch } from "../../context/auth";
import { useUIDispatch } from "../../context/ui";
import { login } from "../../services/auth.service";
import platform from "platform";
import useGeolocations from "../useGeolocations";
import { createSignal } from "solid-js";
export default function useLogin() {
  const [loading, setLoading] = createSignal(false);
  const geolocationStore = useGeolocations();
  const [form, setForm] = createStore({
    email: "",
    password: "",
  });

  const { setCurrentUser, initSocketManager, setCurrentAccount } =
    useAuthDispatch();
  const { addSnackbar } = useUIDispatch();
  const navigate = useNavigate();

  const handleInput = (ev) => {
    setForm([ev.currentTarget.name], ev.currentTarget.value);
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const { data } = await login({
        ...form,
        platform,
        coords: geolocationStore.store.coords,
      });
      setCurrentUser(data.data.user);
      setCurrentAccount(data.data.currentAccount);
      addSnackbar({ type: "success", message: data.message });
      initSocketManager();
      navigate("/", { replace: true });
    } catch (error) {
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    form,
    handleLogin,
    handleInput,
  };
}
