import { createSignal } from "solid-js";
import { useUIDispatch } from "../../context/ui";
import { addRemoveLike, deletePost } from "../../services/post.service";
export default function usePost(refetch) {
  const [loading, setLoading] = createSignal(false);
  const { addSnackbar } = useUIDispatch();

  async function handleAddRemoveLike(postId) {
    try {
      setLoading(true);
      const { data } = await addRemoveLike(postId);
      addSnackbar({ type: "success", message: data.message });
      refetch();
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.error });
    } finally {
      setLoading(false);
    }
  }

  async function handleDeletePost(postId) {
    try {
      setLoading(true);
      const { data } = await deletePost(postId);
      addSnackbar({ type: "success", message: data.message });
      refetch();
    } catch (error) {
      console.error(error);
      addSnackbar({ type: "error", message: error.response.data.error });
    } finally {
      setLoading(false);
    }
  }

  return {
    loading: loading(),
    handleAddRemoveLike,
    handleDeletePost
  };
}
