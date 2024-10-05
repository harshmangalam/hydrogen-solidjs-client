import { createSignal } from "solid-js";
import {
  removeFromFriendsList,
  sendFriendRequest,
  acceptFriendRequest,
  cancelSentRequest,
  ignoreReceivedRequest,
} from "../services/friends.service";
import { useUIDispatch } from "../context/ui";
export default function useFriendRequest(refetch) {
  const [loading, setLoading] = createSignal(false);
  const { addSnackbar } = useUIDispatch();

  async function handleSendFriendRequest(userId) {
    setLoading(true);
    try {
      const { data } = await sendFriendRequest(userId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleAcceptFriendRequest(userId) {
    setLoading(true);
    try {
      const { data } = await acceptFriendRequest(userId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleRemoveFromFriendsList(userId) {
    setLoading(true);
    try {
      const { data } = await removeFromFriendsList(userId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleCancelSentRequest(userId) {
    setLoading(true);
    try {
      const { data } = await cancelSentRequest(userId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleIgnoreReceivedRequest(userId) {
    setLoading(true);
    try {
      const { data } = await ignoreReceivedRequest(userId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }
  return {
    loading,
    handleSendFriendRequest,
    handleAcceptFriendRequest,
    handleRemoveFromFriendsList,
    handleCancelSentRequest,
    handleIgnoreReceivedRequest,
  };
}
