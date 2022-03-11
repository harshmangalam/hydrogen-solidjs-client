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

async function fetchUserAllFriends(userId) {
  return await axios.get(`/users/${userId}/all_friends`);
}


async function changePassword(data) {
  return await axios.patch(`/users/change_password`,data);
}

export {
  uploadProfilePic,
  fetchUserDetails,
  fetchUserAllFriends,
  fetchUserPosts,
  changePassword
};
