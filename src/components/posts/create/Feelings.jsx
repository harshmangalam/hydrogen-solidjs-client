import { createSignal, For, Show } from "solid-js";
import {
  BsEmojiSunglasses,
  BsEmojiAngry,
  BsEmojiSmile,
  BsEmojiWink,
  BsEmojiFrown,
  BsEmojiHeartEyes,
} from "solid-icons/bs";
import Modal from "../../ui/feedback/Modal";
import { IoClose } from "solid-icons/io";

export default function Feelings(props) {
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <button
        title="Add Feelings"
        type="button"
        className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-12 h-12 text-3xl text-black dark:text-white grid place-items-center"
        onClick={() => setOpen(true)}
      >
        <BsEmojiSunglasses className="text-yellow-500" />
      </button>

      <Modal onClose={() => setOpen(false)} open={open()} title="Add Feeling">
        <div className="px-4">
          <Show when={props.feeling}>
            <div className="flex items-center justify-center ">
              <div className="border flex items-center space-x-4  rounded-full px-4 py-2">
                <span>{props.feeling}</span>
                <button
                  onClick={[props.removeFeeling]}
                  className="text-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 rounded-full p-1"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </Show>

          <h6 className="py-2 font-bold text-gray-500">Choose Feeling</h6>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            <For each={feelings}>
              {(emoji) => (
                <li>
                  <button
                    classList={{
                      "bg-gray-200 dark:bg-gray-700":
                        props.feeling === emoji.name,
                    }}
                    className="flex items-center space-x-2 py-2 px-2 w-full rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={[props.addFeeling, emoji.name]}
                  >
                    <span className="text-yellow-500 text-3xl">
                      {emoji.icon()}
                    </span>
                    <p className="text-gray-500 dark:text-gray-200">
                      {emoji.name}
                    </p>
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

const feelings = [
  {
    name: "Happy",
    icon: () => <BsEmojiSmile />,
  },
  {
    name: "Angry",
    icon: () => <BsEmojiAngry />,
  },
  {
    name: "Wink",
    icon: () => <BsEmojiWink />,
  },
  {
    name: "Frown",
    icon: () => <BsEmojiFrown />,
  },
  {
    name: "Love",
    icon: () => <BsEmojiHeartEyes />,
  },
];
