import { onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { useAuthDispatch, useAuthState } from "../context/auth";
import { useUIDispatch } from "../context/ui";
export default function useNetworkStatus() {
  const authDispatch = useAuthDispatch();

  const [network, setNetwork] = createStore({
    isOnline: true,
    connection: {
      type: null,
      effectiveType: null,
      downlink: null,
      rtt: null,
      saveData: null,
    },
  });

  const { addSnackbar } = useUIDispatch();

  const handleStatusChange = (e) => {
    const isOnline = e.type === "online";
    authDispatch.handleUserStatusChange(isOnline);
    setNetwork("isOnline", isOnline);
    addSnackbar({
      type: isOnline ? "success" : "warning",
      message: isOnline ? "You are Online" : "You are offline",
    });
  };

  const checkNetworkStatus = () => {
    const isOnline = window.navigator.onLine;
    setNetwork("isOnline", isOnline);
  };

  const handleConnectionChange = (event) => {
    const connection = event?.target || window.navigator.connection || {};

    setNetwork("connection", {
      type: connection.type,
      downlink: connection.downlink,
      effectiveType: connection.effectiveType,
      rtt: connection.rtt,
      saveData: connection.saveData,
    });
  };
  onMount(() => {
    checkNetworkStatus();
    if (typeof window.navigator.connection !== "undefined") {
      handleConnectionChange();
      window.navigator.connection.addEventListener(
        "change",
        handleConnectionChange
      );
    }
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
  });

  onCleanup(() => {
    window.removeEventListener("online", handleStatusChange);
    window.removeEventListener("offline", handleStatusChange);
    if (typeof window.navigator.connection !== "undefined") {
      window.navigator.connection.removeEventListener(
        "change",
        handleConnectionChange
      );
    }
  });

  return {
    network,
  };
}
