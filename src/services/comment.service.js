import axios from "axios";

export const fetchComments = async (postId) => {
  return await axios.get(`/comments/${postId}`);
};

export const createComment = async ({ postId, content }) => {
  return await axios.post(`/comments/${postId}`, { content });
};
