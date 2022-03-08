import axios from "axios";

async function fetchMessenger() {
  return await axios.get("/messenger");
}

async function fetchMessages(friendId) {
  return await axios.get(`/messenger/${friendId}`);
}

export { fetchMessenger, fetchMessages };
