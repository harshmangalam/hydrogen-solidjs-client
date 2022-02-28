import { TiImage } from "solid-icons/ti";
import { BsCheckCircleFill } from "solid-icons/bs";
import {
  createResource,
  createSignal,
  For,
  Match,
  Show,
  Switch,
} from "solid-js";
import Modal from "../../ui/feedback/Modal";
import { fetchGroups } from "../../../services/group.service";
export default function GroupsModal(props) {
  const [open, setOpen] = createSignal(false);
  const [resource] = createResource(fetchGroups);

  return (
    <div>
      <button
        type="button"
        className="w-full rounded-md bg-gray-200  hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-3"
        onClick={() => setOpen(true)}
      >
        Add Group
      </button>

      <Modal onClose={() => setOpen(false)} open={open()} title="Groups">
        <div className="px-4">
          <Switch>
            <Match when={resource.loading}>Loading...</Match>
            <Match when={resource.error}>Error..</Match>
            <Match when={resource()}>
              <Show when={resource().data.data.groups}>
                <ul className="flex flex-col space-y-2">
                  <For each={resource().data.data.groups}>
                    {(group) => (
                      <li>
                        <button
                          className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 w-full rounded-md"
                          onClick={[props.addGroupId, group.id]}
                          classList={{
                            "bg-gray-200 dark:bg-gray-700":
                              props.groupId === group.id,
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <Show
                              when={group.profileImage}
                              fallback={<TiImage className="text-3xl" />}
                            >
                              <img
                                src={group.profileImage}
                                alt={group.name}
                                className="rounded-full w-8 h-8"
                              />
                            </Show>
                            <span>{group.name}</span>
                          </div>

                          <Show when={group.id === props.groupId}>
                            <BsCheckCircleFill className="text-2xl text-green-500 dark:text-green-700" />
                          </Show>
                        </button>
                      </li>
                    )}
                  </For>
                </ul>
              </Show>
            </Match>
          </Switch>
        </div>
      </Modal>
    </div>
  );
}
