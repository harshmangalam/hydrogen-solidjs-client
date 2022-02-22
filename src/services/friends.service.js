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

export {
  fetchFriendsSuggestions,
  fetchFriends,
  fetchFriendsRequestsReceived,
  fetchFriendsRequestsSent,
};
