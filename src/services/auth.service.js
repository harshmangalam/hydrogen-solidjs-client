import axios from "axios";

async function fetchCurrentUser() {
  return await axios.get("/auth/me");
}

async function signup(data) {
  return await axios.post("/auth/signup", data);
}

async function login(data) {
  return await axios.post("/auth/login", data);
}

async function logout(accountId = "") {
  return await axios.patch(`/auth/logout/?accountId=${accountId}`);
}

export { fetchCurrentUser, signup, login, logout };
