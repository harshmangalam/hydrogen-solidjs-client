import { createSignal } from "solid-js";
import {
  acceptGroupInvitation,
  addRemoveGroupPostLikes,
  deleteGroup,
  joinGroup,
  leaveGroup,
  rejectGroupInvitation,
  removeGroupPost,
} from "../services";

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
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleLeaveGroup(groupId) {
    try {
      setLoading(true);
      const { data } = await leaveGroup(groupId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleAcceptGroupInvitation(groupId) {
    try {
      setLoading(true);
      const { data } = await acceptGroupInvitation(groupId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleRejectGroupInvitation(groupId) {
    try {
      setLoading(true);
      const { data } = await rejectGroupInvitation(groupId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleDeleteGroup(groupId) {
    try {
      setLoading(true);
      const { data } = await deleteGroup(groupId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleAddRemoveGroupPostLikes(groupId, postId) {
    try {
      setLoading(true);
      const { data } = await addRemoveGroupPostLikes(groupId,postId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }

  async function handleDeletePost(groupId, postId) {
    try {
      setLoading(true);
      const { data } = await removeGroupPost(groupId,postId);
      addSnackbar({ type: "success", message: data.message });
    } catch (error) {
      console.error(error.response.data);
      addSnackbar({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
      refetch();
    }
  }
  return {
    loading,
    handleJoinGroup,
    handleLeaveGroup,
    handleDeleteGroup,
    handleAcceptGroupInvitation,
    handleRejectGroupInvitation,
    handleAddRemoveGroupPostLikes,
    handleDeletePost,
  };
}
