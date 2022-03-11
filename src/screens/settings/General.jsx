import { Match, Show, Switch } from "solid-js";
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
          <ul className="flex flex-col gap-4 max-w-xl mx-auto mt-4">
            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Your Id</span>
              <span>{authState.currentUser.id}</span>
            </li>
            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>First Name</span>
              <span>{authState.currentUser.firstName}</span>
            </li>
            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Last Name</span>
              <span>{authState.currentUser.lastName}</span>
            </li>
            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Email</span>
              <span>{authState.currentUser.email}</span>
            </li>

            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Gender</span>
              <span>{authState.currentUser.gender}</span>
            </li>

            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Created At</span>
              <span>
                {dayjs(authState.currentUser.createdAt).format(
                  "D MMM YYYY  (HH:MM a)"
                )}
              </span>
            </li>

            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Updated At</span>
              <span>
                {dayjs(authState.currentUser.updatedAt).format(
                  "D MMM YYYY  (HH:MM a)"
                )}
              </span>
            </li>
            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Status</span>
              <span>{authState.currentUser.status}</span>
            </li>

            <li className="py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
              <span>Email Verified</span>
              <span>
                <Show when={authState.isEmailVerified} fallback="Not Verified">
                  Verified
                </Show>
              </span>
            </li>
          </ul>
        </Match>
      </Switch>
    </MainBody>
  );
}
