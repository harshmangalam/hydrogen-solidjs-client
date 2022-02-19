import { createStore } from "solid-js/store";

export default function useSearchFriends() {
  const [store, setStore] = createStore({
    friends: [],
    search: "",
  });

  const searchFriends = async () => {
      console.log(store.search)
  };
  const handleInput = (event) => {
      setStore("search",event.currentTarget.value)
  }
  return {
    friendsStore: store,
    searchFriends,
    handleInput
  };
}
