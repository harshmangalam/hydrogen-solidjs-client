import { NavLink } from "solid-app-router";
import Drawer from "../navigation/Drawer";
import MobileNav from "./MobileNav";

function AppShell(props) {
  return (
    <div>
      <div className="block md:hidden">
        <MobileNav links={props.drawerItems} />
      </div>
      <Drawer>
        <h2 class="font-semibold text-2xl">{props.drawerTitle}</h2>
        <ul className="mt-4 flex flex-col space-y-2">
          <For each={props.drawerItems}>
            {(tab) => (
              <li>
                <NavLink
                  href={tab.href}
                  className="flex items-center justify-between  py-2 px-2 rounded-lg hover:bg-gray-100"
                  end={tab.end}
                  activeClass="bg-gray-100 dark:bg-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                      {tab.icon()}
                    </div>
                    <p>{tab.name}</p>
                  </div>
                </NavLink>
              </li>
            )}
          </For>
        </ul>
      </Drawer>
      <div className="w-full md:w-3/4 xl:w-4/5 ml-auto dark:text-white pt-4 md:px-8">
        {props.children}
      </div>
    </div>
  );
}

export default AppShell;
