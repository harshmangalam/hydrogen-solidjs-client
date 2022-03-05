import axios from "axios";

async function fetchNotifications() {
  return await axios.get("/notifications");
}

export {
  fetchNotifications
};
