import { NavLink, Outlet, useParams } from "solid-app-router";
import { createResource, For, Match, Switch } from "solid-js";
import HydrogenLoader from "../../../components/shared/HydrogenLoader";
import Error from "../../../components/shared/Error";
import { ProfileInfo } from "../../../components/groups/groupDetails";
import { useAuthState } from "../../../context/auth";
import { fetchGroupDetails } from "../../../services/group.service";
import useUploadPic from "../../../hooks/group/useUploadPic";
import ImageUpload from "../../../components/shared/ImageUpload";
import { FaSolidCamera } from "solid-icons/fa";

export default function GroupDetails() {
  const params = useParams();
  const [resource, { refetch }] = createResource(
    () => params.groupId,
    fetchGroupDetails
  );
  const userState = useAuthState();

  const {
    form,
    addCoverImage,
    addProfileImage,
    handleUploadProfilePic,
    removeCoverImage,
    removeProfileImage,
  } = useUploadPic(refetch);

  return (
    <div>
      <div className="relative h-[80vh] bg-white shadow dark:bg-gray-800 flex flex-col justify-between">
        <Switch>
          <Match when={resource.loading}>
            <div className="bg-gray-200 dark:bg-gray-700 h-3/6 md:h-4/6  rounded-b-lg w-full max-w-3xl mx-auto animate-pulse relative">
              <HydrogenLoader />
            </div>
          </Match>
          <Match when={resource.error}>
            <Error name="Error" />
          </Match>
          <Match when={resource()}>
            <Show
              when={resource().data.data.group}
              fallback={
                <div className="py-4 h-full grid place-items-center">
                  <Error name="Group not found" />
                </div>
              }
            >
              <div className="bg-gray-100 dark:bg-gray-900 h-3/6 md:h-4/6  rounded-b-lg w-full max-w-3xl mx-auto relative">
                {/* cover image  */}
                <img
                  src={resource().data.data.group.coverImage}
                  className="w-full h-full aspect-auto object-cover rounded-b-md"
                  alt={resource().data.data.group.name}
                />

                <div className="absolute -bottom-20 md:-bottom-28 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0">
                  <div className="relative">
                    {/* avatar profile image  */}
                    <img
                      src={resource().data.data.group.profileImage}
                      alt={resource().data.data.group.name}
                      className="w-40 h-40 rounded-full aspect-auto object-cover p-1 bg-blue-200 dark:bg-blue-300"
                    />

                    <Show
                      when={
                        userState?.currentUser.id ===
                        resource().data.data.group.admin.id
                      }
                    >
                      <div className="absolute bottom-4 right-0">
                        {/* change profile pic  */}
                        <ImageUpload
                          btnClass="w-10 h-10 rounded-full grid place-items-center bg-blue-400 hover:bg-blue-500 "
                          image={form.profileImage}
                          addImage={addProfileImage}
                          removeImage={removeProfileImage}
                          onDone={handleUploadProfilePic}
                        >
                          <FaSolidCamera className="text-xl text-white" />
                        </ImageUpload>
                      </div>
                    </Show>
                  </div>
                </div>
                <Show
                  when={
                    userState?.currentUser.id ===
                    resource().data.data.group.admin.id
                  }
                >
                  <div className="absolute right-0 bottom-0 p-3">
                    {/* change cover image  */}
                    <ImageUpload
                      btnClass="py-2 px-4 rounded-lg flex items-center space-x-2 bg-blue-400 text-white font-medium hover:bg-blue-500"
                      image={form.coverImage}
                      addImage={addCoverImage}
                      removeImage={removeCoverImage}
                      onDone={handleUploadProfilePic}
                      sizeLimit="extended"
                    >
                      <FaSolidCamera />
                      <span className="hidden md:block">Add Cover Photo</span>
                    </ImageUpload>
                  </div>
                </Show>

                <ProfileInfo
                  members={resource().data.data.group._count.members}
                  name={resource().data.data.group.name}
                  privacy={resource().data.data.group.privacy}
                  admin={resource().data.data.group.admin}
                  refetch={refetch}
                />
              </div>
            </Show>
          </Match>
        </Switch>
        <Show when={resource()?.data?.data.group}>
          <div className="w-full">
            <div className="max-w-4xl mx-auto py-3">
              <hr className="dark:border-gray-700 border-gray-300" />
              <ul className="flex items-center space-x-4 mt-4">
                <For each={tabs}>
                  {(tab) => (
                    <li>
                      <NavLink
                        href={`${tab.href}`}
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
        </Show>
      </div>
      <Show when={resource()?.data?.data.group}>
        <div className="max-w-4xl w-full mx-auto py-4 dark:text-white">
          <Outlet />
        </div>
      </Show>
    </div>
  );
}

const tabs = [
  {
    name: "Posts",
    href: "",
    end: true,
  },
  {
    name: "Members",
    href: "members",
    end: false,
  },
];
