export default function useLogoutBroadcast() {
  const channel = new BroadcastChannel("logout");

  channel.onmessage = (event) => {
    if (event.data === "logout_success") {
      window.location.reload();
    }
  };
}
