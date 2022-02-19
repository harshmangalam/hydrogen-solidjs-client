import { FaSolidUserTag } from "solid-icons/fa";
import { IoClose } from "solid-icons/io";
import { BiSearch } from "solid-icons/bi";
import { createSignal, Show } from "solid-js";
export default function SpecificFriends() {
  const [open, setOpen] = createSignal(false);

  let cardRef;

  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      setOpen(false);
    }
  }
  return (
    <div>
      <button
        type="button"
        className="rounded-md bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-2 py-2 w-full"
        onClick={() => setOpen(true)}
      >
        Specific Friends
      </button>

      <Show when={open()}>
        <Portal>
          <div
            className="fixed inset-0 bg-gray-900/50 z-50"
            onClick={[handleClickOutside]}
          >
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-white shadow-md rounded-md dark:bg-gray-800 dark:text-white"
              ref={cardRef}
            >
              {/* modal header  */}

              <div className="flex items-center justify-between py-2 px-4">
                <h6 className="font-bold text-xl flex-1 text-center">
                  Specific Friends
                </h6>

                <button
                  type="button"
                  className="rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 w-5 h-5 text-xl text-black dark:text-white grid place-items-center"
                  onClick={() => setOpen(false)}
                >
                  <IoClose />
                </button>
              </div>

              <hr className="dark:border-gray-600" />

              {/* modal body  */}

              <div className="pb-4">
                <div className="px-4 py-2">
                <div className="relative">
                  <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 dark:text-white" />
                  <input
                    className="focus:outline-none w-full text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-100 rounded-full py-2 pl-10 bg-gray-100 dark:bg-gray-700"
                    type="text"
                    aria-label="Search for friends"
                    placeholder="Search for friends"
                  />
                </div>
                </div>

                <div className="mt-4 px-4 flex flex-col space-y-2">
                  <h6 className="text-gray-500 dark:text-gray-200 font-medium text-sm">
                    Friends who will see the post
                  </h6>
                  <div className="border w-full rounded-md p-4 dark:border-gray-600">
                    <ul className="flex items-center flex-wrap justify-center gap-2">
                      <For each={[...Array(4).keys()]}>
                        {(user) => (
                          <li className="flex items-center space-x-2 bg-blue-100 rounded-md px-2 py-1 text-blue-500 font-medium dark:bg-gray-700">
                            <p>Harsh mangalam</p>
                            <button
                              type="button"
                              className="rounded-full hover:bg-blue-200 dark:hover:bg-gray-600 w-5 h-5 grid place-items-center"
                            >
                              <IoClose />
                            </button>
                          </li>
                        )}
                      </For>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex flex-col space-y-2">
                  <h6 className="text-gray-500 dark:text-gray-200 text-sm font-medium px-4">
                    Friends
                  </h6>

                  <ul className="flex flex-col px-2">
                    <For each={[...Array(4).keys()]}>
                      {(user) => (
                        <li>
                          <button className="flex items-center space-x-2 rounded-md  py-2 px-2  font-medium hover:bg-gray-200 dark:hover:bg-gray-700 w-full">
                            <img
                              src="https://avatars.githubusercontent.com/u/57381638?v=4"
                              className="w-8 h-8 rounded-full flex-none"
                            />
                            <p className="font-medium">Harsh mangalam</p>
                          </button>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  );
}
