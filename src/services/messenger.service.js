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

export { fetchMessenger, fetchMessages, sendMessage };
