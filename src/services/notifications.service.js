import axios from "axios";

async function fetchNotifications() {
  return await axios.get("/notifications");
}

async function clearNotifications() {
  return await axios.delete("/notifications");
}


export {
  fetchNotifications,
  clearNotifications
};
