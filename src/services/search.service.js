import axios from "axios";

export const fetchSearchResults = async (search) => {

  return await axios.get(`/search/?q=${search}`);
};
