import { onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { fetchFriends } from "../services/friends.service";
export default function useSearchFriends() {
  const [store, setStore] = createStore({
    loading: true,
    friends: [],
    search: "",
  });

  onMount(async () => {
    try {
      const { data } = await fetchFriends();
      setStore("friends", data.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setStore("loading", false);
    }
  });
  const searchFriends = async () => {
    console.log(store.search);
  };
  const handleInput = (event) => {
    setStore("search", event.currentTarget.value);
  };
  return {
    friendsStore: store,
    searchFriends,
    handleInput,
  };
}
