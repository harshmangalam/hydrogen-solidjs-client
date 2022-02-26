import { NavLink, Outlet, useParams } from "solid-app-router";
import { createResource, For, Match, Switch } from "solid-js";
import Image from "../../../components/ui/dataDisplay/Image";
import Error from "../../../components/shared/Error";
import {
  AddCoverPhoto,
  AddProfilePhoto,
  ProfileInfo,
} from "../../../components/groups/groupDetails";
import { fetchGroupDetails } from "../../../services/group.service";

export default function GroupDetails() {
  const { groupId } = useParams();
  const [resource] = createResource(groupId, fetchGroupDetails);

  return (
    <div>
      <Switch>
        <Match when={resource.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={resource.error}>
          <Error name={resource.error.name} message={resource.error.message} />
        </Match>
        <Match when={resource()}>
          <div>
            <div className="h-[80vh] bg-white shadow dark:bg-gray-800 flex flex-col justify-between">
              <div className="bg-gray-100 dark:bg-gray-900 h-3/6 md:h-4/6 rounded-b-lg w-full max-w-4xl mx-auto relative">
                <Image
                  alt={resource().data.data.group.name}
                  src={resource().data.data.group.coverImage}
                  className="absolute inset-0 w-full h-full aspect-video object-cover"
                />
                <AddProfilePhoto
                  profilePhoto={resource().data.data.group.profileImage}
                  name={resource().data.data.group.name}
                  profileImage={resource().data.data.group.profileImage}
                />
                <ProfileInfo
                  name={resource().data.data.group.name}
                  members={resource().data.data.group._count.members}
                />
                <AddCoverPhoto />
              </div>

              <div className="max-w-4xl w-full mx-auto py-3">
                <hr className="dark:border-gray-700 border-gray-300" />
                <ul className="flex items-center space-x-4 mt-4">
                  <For each={tabs}>
                    {(tab) => (
                      <li>
                        <NavLink
                          href={tab.href}
                          className="font-medium  hover:bg-gray-100 py-3 px-4 text-gray-600 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
                          activeClass="border-b-4 border-blue-500 text-blue-500 hover:bg-transparent dark:hover:bg-transparent rounded-none"
                          end={tab.end}
                        >
                          {tab.name}
                        </NavLink>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </div>
            <div className="max-w-4xl w-full mx-auto py-4 dark:text-white">
              <Outlet />
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
}

const tabs = [
  {
    name: "About",
    href: "",
    end: true,
  },
  {
    name: "Posts",
    href: "posts",
    end: false,
  },
  {
    name: "Members",
    href: "members",
    end: false,
  },
];
