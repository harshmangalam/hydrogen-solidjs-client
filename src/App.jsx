import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";
const Home = lazy(() => import("./screens/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
