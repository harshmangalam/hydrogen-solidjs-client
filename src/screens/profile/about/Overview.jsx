import { useAuthState } from "../../../context/auth";
import { Match, Switch } from "solid-js";

export default function Overview() {
  const { currentUser } = useAuthState();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getDateAndTimeFormat = (timestamp) => {
    const date = new Date(timestamp);
    return (
      date.toLocaleDateString().slice(0, 2) +
      " " +
      date.toLocaleDateString("default", { month: "short" }) +
      " " +
      date.toLocaleDateString().slice(-4)
    );
  };

  return (
    <Switch>
      <Match when={currentUser}>
        <ul className="flex gap-0 dark:divide-gray-600 flex-col divide-y-2 max-w-xl mx-auto my-auto">
          <li className="py-1 flex justify-between items-center">
            <span className="font-semibold">First Name</span>
            <span>{currentUser.firstName}</span>
          </li>
          <li className="py-1 flex justify-between items-center">
            <span className="font-semibold">Last Name</span>
            <span>{currentUser.lastName}</span>
          </li>
          <li className="py-1 flex justify-between items-center">
            <span className="font-semibold">Gender</span>
            <span>
              {capitalizeFirstLetter(currentUser.gender.toLowerCase())}
            </span>
          </li>
          <li className="py-1 flex justify-between items-center">
            <span className="font-semibold">Registered</span>
            <span>{getDateAndTimeFormat(currentUser.createdAt)}</span>
          </li>
        </ul>
      </Match>
    </Switch>
  );
}