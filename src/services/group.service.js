import axios from "axios";

async function fetchMyCreatedGroups() {
  return await axios.get("/groups");
}

export { fetchMyCreatedGroups };
