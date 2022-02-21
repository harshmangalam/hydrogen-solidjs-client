import axios from "axios";

async function createPost(data) {
  return await axios.post("/posts", data);
}

async function fetchPosts() {
  return await axios.get("/posts");
}
export { createPost, fetchPosts };
