import axios from "axios";

async function fetchMyCreatedGroups() {
  return await axios.get("/groups");
}

async function createGroup(data) {
  return await axios.post("/groups", data);
}

async function fetchGroupsFeed() {
  return await axios.get("/groups/feed");
}

async function fetchGroupDetails(groupId) {
  return await axios.get(`/groups/${groupId}`);
}

async function fetchGroupsSuggestion() {
  return await axios.get(`/groups/suggestions`);
}

export {
  fetchMyCreatedGroups,
  createGroup,
  fetchGroupsFeed,
  fetchGroupDetails,
  fetchGroupsSuggestion,
};
