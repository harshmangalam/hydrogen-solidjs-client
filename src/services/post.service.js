import axios from "axios";

async function createPost(data) {
  return await axios.post("/posts", data);
}

async function fetchPosts() {
  return await axios.get("/posts");
}
async function fetchPost(postId) {
  return await axios.get(`/posts/${postId}`);
}

async function fetchFriendsPosts() {
  return await axios.get("/posts/friends");
}

async function fetchTrendingPosts() {
  return await axios.get("/posts/trending");
}

async function fetchFeedPosts() {
  return await axios.get("/posts/feed");
}

async function addRemoveLike(postId) {
  return await axios.patch(`/posts/${postId}/add_remove_like`);
}

async function deletePost(postId) {
  return await axios.delete(`/posts/${postId}`);
}
export {
  createPost,
  fetchPosts,
  fetchFriendsPosts,
  fetchTrendingPosts,
  fetchFeedPosts,
  addRemoveLike,
  fetchPost,
  deletePost,
};
