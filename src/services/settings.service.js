import axios from "axios";

export const fetchAccountsLoggedin = async () => {
  return await axios.get("/settings/accounts_loggedin");
};
