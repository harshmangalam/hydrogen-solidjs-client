import axios from "axios";

async function fetchMyCreatedGroups() {
  return await axios.get("/groups");
}

async function createGroup(data) {
  return await axios.post("/groups", data);
}

export { fetchMyCreatedGroups, createGroup };
