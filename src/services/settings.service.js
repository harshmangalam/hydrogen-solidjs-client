import axios from "axios";

export const fetchLoginHistory = async () => {
  return await axios.get("/settings/login_history");
};

export const clearLoginHistory = async () => {
  return await axios.delete("/settings/login_history");
};
