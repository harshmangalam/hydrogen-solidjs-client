import axios from "axios";

async function fetchCurrentUser() {
  return await axios.get("/auth/me");
}


export {
    fetchCurrentUser
}