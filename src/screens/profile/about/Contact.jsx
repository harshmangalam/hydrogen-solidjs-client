import { useAuthState } from "../../../context/auth";
import { Match, Switch } from "solid-js";

export default function Contact() {
  const { currentUser } = useAuthState();
  return (
    <Switch>
      <Match when={currentUser}>
        <ul className="flex gap-0 dark:divide-gray-600 flex-col divide-y-2 max-w-xl mx-auto my-auto">
          <li className="py-1 flex justify-between items-center">
            <span className="font-semibold">Email</span>
            <span>{currentUser.email}</span>
          </li>
        </ul>
      </Match>
    </Switch>
  );
}