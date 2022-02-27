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

async function fetchJoinedGroups() {
  return await axios.get(`/groups/joined`);
}

async function fetchInvitedGroups() {
  return await axios.get(`/groups/invited`);
}

async function fetchGroupsSuggestion() {
  return await axios.get(`/groups/suggestions`);
}

async function joinGroup(groupId) {
  return await axios.patch(`/groups/${groupId}/join`);
}
async function leaveGroup(groupId) {
  return await axios.delete(`/groups/${groupId}/leave`);
}
async function deleteGroup(groupId) {
  return await axios.delete(`/groups/${groupId}/remove`);
}

async function acceptGroupInvitation(groupId) {
  return await axios.patch(`/groups/${groupId}/accept_invitation`);
}
async function rejectGroupInvitation(groupId) {
  return await axios.delete(`/groups/${groupId}/reject_invitation`);
}

export {
  fetchMyCreatedGroups,
  createGroup,
  fetchGroupsFeed,
  fetchGroupDetails,
  fetchGroupsSuggestion,
  joinGroup,
  leaveGroup,
  deleteGroup,
  fetchJoinedGroups,
  fetchInvitedGroups,

  acceptGroupInvitation,
  rejectGroupInvitation
};
