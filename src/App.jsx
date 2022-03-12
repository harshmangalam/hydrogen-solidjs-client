import axios from "axios";
import Snackbars from "./components/root/Snackbars";
import useNetworkStatus from "./hooks/useNetworkStatus";
import AppRouter from "./router";

axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT;
axios.defaults.withCredentials = true;

function App() {
  useNetworkStatus();
  return (
    <div>
      <AppRouter />
      <Snackbars />
    </div>
  );
}

export default App;
