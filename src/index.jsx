import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import "./index.css";
import App from "./App";
import UIProvider from "./context/ui";
import AuthProvider from "./context/auth";

render(
  () => (
    <Router>
      <UIProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UIProvider>
    </Router>
  ),
  document.getElementById("root")
);
