import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import "./index.css";
import App from "./App";
import UIProvider from "./context/ui";

render(
  () => (
    <Router>
      <UIProvider>
        <App />
      </UIProvider>
    </Router>
  ),
  document.getElementById("root")
);
