import { createStore } from "solid-js/store";
import { useAuthState } from "../../context/auth";
import { sendMessage } from "../../services/messenger.service";

export default function useMessenger() {
  const { currentUser } = useAuthState();
  const [store, setStore] = createStore({
    content: "",
    loading: false,
  });

  const handleSendMessage = async (friendId) => {
    try {
      const { data } = await sendMessage(friendId, {
        receiverId: friendId,
        senderId: currentUser.id,
        content: store.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    store,
    handleSendMessage,
  };
}
