import axios from "axios";

async function fetchMessenger() {
  return await axios.get("/messenger");
}

async function fetchMessages(friendId) {
  return await axios.get(`/messenger/${friendId}`);
}

async function sendMessage(friendId, data) {
  return await axios.post(`/messenger/${friendId}`, data);
}

async function clearAllMessages(friendId,) {
  return await axios.delete(`/messenger/${friendId}`);
}

export { fetchMessenger, fetchMessages, sendMessage,clearAllMessages };
