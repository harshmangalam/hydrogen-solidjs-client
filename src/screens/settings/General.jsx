import { Match, Switch } from "solid-js";
import MainBody from "../../components/settings/MainBody";
import { useAuthState } from "../../context/auth";
import EditProfileDialog from "../../components/profile/EditProfileDialog";
import dayjs from "dayjs";
export default function General() {
  const authState = useAuthState();
  return (
    <MainBody title="General Settings">
      <Switch>
        <Match when={authState.currentUser}>
          <div className="flex items-center justify-center gap-4 ">
            <h6 className="text-2xl font-medium">Edit Account</h6>
            <EditProfileDialog />
          </div>
          <ul className="flex bg-gray-100 dark:bg-gray-800 gap-0 dark:divide-gray-600 flex-col divide-y-2 rounded-lg  max-w-xl mx-auto mt-4">
            <li className="py-4 px-6 flex items-center justify-between">
              <span className="font-semibold">First Name</span>
              <span>{authState.currentUser.firstName}</span>
            </li>
            <li className="py-4 px-6 flex items-center justify-between">
              <span className="font-semibold">Last Name</span>
              <span>{authState.currentUser.lastName}</span>
            </li>
            <li className="py-4 px-6 flex items-center justify-between">
              <span className="font-semibold">Email</span>
              <span>{authState.currentUser.email}</span>
            </li>

            <li className="py-4 px-6 flex items-center justify-between">
              <span className="font-semibold">Gender</span>
              <span>{authState.currentUser.gender}</span>
            </li>

            <li className="py-4 px-6 flex items-center justify-between">
              <span className="font-semibold">Created At</span>
              <span>
                {dayjs(authState.currentUser.createdAt).format(
                  "D MMM YYYY  (HH:MM a)"
                )}
              </span>
            </li>

            <li className="py-4 px-6 flex items-center justify-between">
              <span className="font-semibold">Status</span>
              <span className="lowercase">{authState.currentUser.status}</span>
            </li>
          </ul>
        </Match>
      </Switch>
    </MainBody>
  );
}
