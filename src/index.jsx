import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import "./index.css";
import "./styles/global.css";
import App from "./App";
import ThemeProvider from "./context/theme";

render(
  () => (
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  ),
  document.getElementById("root")
);
