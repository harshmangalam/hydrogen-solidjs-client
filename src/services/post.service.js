import axios from "axios";

async function createPost(data) {
  return await axios.post("/posts", data);
}

async function fetchPosts() {
  return await axios.get("/posts");
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
export {
  createPost,
  fetchPosts,
  fetchFriendsPosts,
  fetchTrendingPosts,
  fetchFeedPosts,
};
