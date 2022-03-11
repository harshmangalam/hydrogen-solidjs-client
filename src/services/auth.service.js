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

async function logout(accountLoggedinId) {
  return await axios.patch(`/auth/logout/${accountLoggedinId}`);
}

export { fetchCurrentUser, signup, login, logout };
