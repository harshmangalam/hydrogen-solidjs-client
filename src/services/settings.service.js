import axios from "axios";

export const fetchLoginHistory = async () => {
  return await axios.get("/settings/accounts_loggedin");
};
