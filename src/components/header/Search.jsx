import { Link } from "solid-app-router";
import { BiSearch } from "solid-icons/bi";

import {
  createResource,
  createSignal,
  For,
  Match,
  Show,
  Switch,
 
} from "solid-js";
import { fetchSearchResults } from "../../services";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
import DropdownMenu from "../ui/feedback/DropdownMenu";
import debounce from 'lodash.debounce';

export default function Search() {
  const [open, setOpen] = createSignal(false);
  const [search, setSearch] = createSignal("");
  const [resource] = createResource(search, fetchSearchResults);

  const handleText =debounce((text) =>{
    setSearch(text);
  },2000);
  return (
    <>
      <div className="relative">
        <BiSearch className="hidden xl:block absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 dark:text-white" />

        <input
          className="hidden xl:block focus:outline-none w-full text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-100 rounded-full py-2 pl-10 bg-gray-100 dark:bg-gray-700"
          type="text"
          aria-label="Filter projects"
          placeholder="Search Hydrogen"
          onFocus={[setOpen, true]}

          onInput={(e) =>handleText(e.target.value)}
         
         

        />
      </div>

      <button
        onClick={[setOpen, !open()]}
        className="block xl:hidden p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600  text-black dark:text-white "
      >
        <BiSearch className="text-xl" />
      </button>

      <Show when={open()}>
        <DropdownMenu onClose={() => setOpen(false)} cardClass="left-0" scrollY>
          <div className="my-2 block xl:hidden px-4">
            <div className="relative">
              <BiSearch className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 dark:text-white" />

              <input
                className="focus:outline-none w-full text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-100 rounded-full py-2 pl-10 bg-gray-100 dark:bg-gray-700"
                type="text"
                aria-label="Filter projects"
                placeholder="Search Hydrogen"
                onFocus={[setOpen, true]}
               
              onInput={(e) =>handleText(e.target.value)}
              
              />
            </div>
          </div>
          <Show when={search().trim().length}>
            <div className="sticky top-0 bg-white dark:bg-gray-800 py-2 px-4">
              <h6>Search for "{search()}"</h6>
            </div>
          </Show>
          <div className="my-4">
            <Switch>
              <Match when={resource.loading}>Fetching search...</Match>
              <Match when={resource.error}>Error during search</Match>
              <Match when={resource()}>
                <div className="my-2 px-4">
                  <h6 className="font-bold text-xl">Users</h6>
                </div>
                <ul className="flex flex-col gap-2">
                  <For each={resource().data.data.users}>
                    {(user) => (
                      <li>
                        <Link
                          onClick={() => setOpen(false)}
                          href={`/${user.id}`}
                          className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 hover:dark:bg-gray-700"
                        >
                          <UserAvatar
                            src={user.profileImage}
                            alt={user.firstName}
                            className="w-12 h-12 rounded-full"
                          />
                          <p className="text-gray-800 dark:text-white">
                            {user.firstName}
                          </p>
                        </Link>
                      </li>
                    )}
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
