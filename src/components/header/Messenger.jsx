import { Link } from "solid-app-router";
import { SiMessenger } from "solid-icons/si";
import { createResource, createSignal, Match, Show, Switch } from "solid-js";
import DropdownMenu from "../ui/feedback/DropdownMenu";
import { fetchMessenger } from "../../services/messenger.service";
import FriendItem from "../../components/messenger/friends/FriendItem";
export default function Messenger() {
  const [open, setOpen] = createSignal(false);
  const [resource] = createResource(fetchMessenger);

  function toggle() {
    setOpen((o) => !o);
  }

  return (
    <>
      <button
        onClick={[toggle]}
        className="block p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
      >
        <SiMessenger className="text-xl" aria-label="messenger" />
      </button>
      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)} scrollY={true}>
          <div className="py-2 px-2">
            <div className="flex justify-between px-2">
              <h5 className="text-2xl font-semibold">Messenger</h5>
              <Link href="/messenger" className="text-blue-500 font-semibold">
                See all
              </Link>
            </div>
            <Switch>
              <Match when={resource()}>
                <ul className="flex flex-col space-y-2 my-4">
                  <For each={resource()?.data.data.messengers}>
                    {(messenger) => <FriendItem {...messenger} />}
                  </For>
                </ul>
              </Match>
            </Switch>
          </div>
        </DropdownMenu>
      </Show>
    </>
  );
}
