import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import "./index.css";
import App from "./App";
import { AuthProvider, UIProvider, NotificationProvider } from "./context";

render(
  () => (
    <Router>
      <UIProvider>
        <AuthProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </AuthProvider>
      </UIProvider>
    </Router>
  ),
  document.getElementById("root")
);
