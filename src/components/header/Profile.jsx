import { BiSolidUser } from "solid-icons/bi";
import { Link, useMatch } from "solid-app-router";

export default function Profile() {
  const match = useMatch(() => "/me");

  return (
    <button
      classList={{ "bg-blue-200 text-blue-500": Boolean(match()) }}
      className="p-3 rounded-full bg-gray-200"
    >
      <BiSolidUser className="text-xl" />
    </button>
  );
}
