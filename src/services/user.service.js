import axios from "axios";

async function uploadProfilePic(data) {
  return await axios.patch("/users/upload_profile_pic", data);
}

async function fetchUserDetails(userId) {
  return await axios.get(`/users/${userId}`);
}

async function fetchUserPosts(userId) {
  return await axios.get(`/users/${userId}/posts`);
}

async function fetchUserFriends(userId) {
  return await axios.get(`/users/${userId}/friends`);
}

export { uploadProfilePic, fetchUserDetails, fetchUserFriends, fetchUserPosts };
