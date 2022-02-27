import { createSignal } from "solid-js";
import {
  acceptGroupInvitation,
  deleteGroup,
  joinGroup,
  leaveGroup,
  rejectGroupInvitation,
} from "../services/group.service";

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
      console.log(error);
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
      console.log(error.response.data);
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
      console.log(error.response.data);
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
      console.log(error.response.data);
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
    handleLeaveGroup,
    handleDeleteGroup,
    handleAcceptGroupInvitation,
    handleRejectGroupInvitation,
  };
}
