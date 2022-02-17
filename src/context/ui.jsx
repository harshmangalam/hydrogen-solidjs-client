import { createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import shortId from "shortid";

const UIStateContext = createContext();
const UIDispatchContext = createContext();

const initialState = {
  snackbars: [],
};
export default function UIProvider(props) {
  const [store, setStore] = createStore(initialState);

  function addSnackbar(snackbar) {
    setStore(
      "snackbars",
      produce((snackbars) => {
        snackbars.push({
          id: shortId(),
          ...snackbar,
        });
      })
    );
  }

  const removeSnackbar = (id) => () => {
    setStore(
      "snackbars",
      produce((snackbars) => {
        const index = snackbars.findIndex((s) => s.id === id);
        if (index > -1) {
          snackbars.splice(index, 1);
        }
      })
    );
  };

  function emptySnackbar() {
    setStore("snackbars", []);
  }

  return (
    <UIStateContext.Provider value={store}>
      <UIDispatchContext.Provider
        value={{
          addSnackbar,
          removeSnackbar,
          emptySnackbar,
        }}
      >
        {props.children}
      </UIDispatchContext.Provider>
    </UIStateContext.Provider>
  );
}

export const useUIState = () => useContext(UIStateContext);
export const useUIDispatch = () => useContext(UIDispatchContext);
