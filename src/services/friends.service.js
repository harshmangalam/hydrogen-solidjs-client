import axios from "axios";

async function fetchFriendsSuggestions() {
  return await axios.get("/friends/suggestions");
}

async function fetchFriends() {
  return await axios.get("/friends");
}

async function fetchFriendsRequestsReceived() {
  return await axios.get("/friends/received_requests");
}
async function fetchFriendsRequestsSent() {
  return await axios.get("/friends/sent_requests");
}

async function sendFriendRequest(userId) {
  return await axios.post(`/friends/send_request/${userId}`);
}
async function acceptFriendRequest(userId) {
  return await axios.post(`/friends/accept_request/${userId}`);
}
async function removeFromFriendsList(userId) {
  return await axios.post(`/friends/remove/${userId}`);
}

async function cancelSentRequest(userId) {
  return await axios.post(`/friends/cancel_sent_request/${userId}`);
}

async function ignoreReceivedRequest(userId) {
  return await axios.post(`/friends/ignore_received_request/${userId}`);
}

export {
  fetchFriendsSuggestions,
  fetchFriends,
  fetchFriendsRequestsReceived,
  fetchFriendsRequestsSent,
  sendFriendRequest,
  acceptFriendRequest,
  removeFromFriendsList,
  cancelSentRequest,
  ignoreReceivedRequest,
};
