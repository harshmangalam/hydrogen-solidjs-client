import { NavLink, Outlet, useParams } from "solid-app-router";
import { createResource, For, Match, Show, Switch } from "solid-js";
import useUploadProfilePic from "../../hooks/profile/useUploadProfilePic";
import ImageUpload from "../../components/shared/ImageUpload";
import { FaSolidCamera } from "solid-icons/fa";
import ProfileInfo from "../../components/profile/ProfileInfo";
import { fetchUserDetails } from "../../services/user.service";
import UserImage from "../../components/ui/dataDisplay/UserImage";
import UserAvatar from "../../components/ui/dataDisplay/UserAvatar";
import { useAuthState } from "../../context/auth";
import HydrogenLoader from "../../components/shared/HydrogenLoader";
import Error from "../../components/shared/Error";
export default function Profile() {
  const params = useParams();
  const { currentUser } = useAuthState();
  const [resource, { refetch }] = createResource(
    () => params.userId,
    fetchUserDetails
  );

  const {
    addCoverImage,
    addProfileImage,
    form,
    handleUploadProfilePic,
    removeCoverImage,
    removeProfileImage,
  } = useUploadProfilePic(refetch);

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
            <Error
              name="User Profile"
              message="Error while fetching user profile"
            />
          </Match>
          <Match when={resource()}>
            <Show
              when={resource().data.data.user}
              fallback={
                <div className="py-4 h-full grid place-items-center">
                  <Error
                    name="User Not Found"
                    message="User profile does not exists"
                  />
                </div>
              }
            >
              <div className="bg-gray-100 dark:bg-gray-900 h-3/6 md:h-4/6  rounded-b-lg w-full max-w-3xl mx-auto relative">
                {/* cover image  */}
                <UserImage
                  src={resource().data.data.user.coverImage}
                  className="w-full h-full aspect-auto object-cover rounded-b-md"
                  alt={resource().data.data.user.firstName}
                />

                <div className="absolute -bottom-20 md:-bottom-28 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0">
                  <div className="relative">
                    {/* avatar profile image  */}
                    <UserAvatar
                      src={resource().data.data.user.profileImage}
                      className="w-40 h-40 rounded-full aspect-auto object-cover"
                      alt={resource().data.data.user.firstName}
                    />
                    <Show
                      when={currentUser.id === resource().data.data.user.id}
                    >
                      <div className="absolute bottom-4 right-0">
                        {/* change profile pic  */}
                        <ImageUpload
                          btnClass="w-10 h-10 rounded-full grid place-items-center bg-blue-500 hover:bg-blue-600"
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
                <Show when={currentUser.id === resource().data.data.user.id}>
                  <div className="absolute right-0 bottom-0 p-3">
                    {/* change cover image  */}
                    <ImageUpload
                      btnClass="py-2 px-4 rounded-lg flex items-center space-x-2 bg-blue-500 text-white font-medium hover:bg-blue-600"
                      image={form.coverImage}
                      addImage={addCoverImage}
                      removeImage={removeCoverImage}
                      onDone={handleUploadProfilePic}
                    >
                      <FaSolidCamera />
                      <span className="hidden md:block">Add Cover Photo</span>
                    </ImageUpload>
                  </div>
                </Show>

                <ProfileInfo
                  friendsCount={resource().data.data.user._count.myFriends}
                  friends={resource().data.data.user.myFriends}
                  firstName={resource().data.data.user.firstName}
                  lastName={resource().data.data.user.lastName}
                  userId={resource().data.data.user.id}
                />
              </div>
            </Show>
          </Match>
        </Switch>
        <Show when={resource()?.data?.data.user}>
          <div className="w-full">
            <div className="max-w-4xl mx-auto py-3">
              <hr className="dark:border-gray-700 border-gray-300" />
              <ul className="flex items-center space-x-4 mt-4">
                <For each={tabs}>
                  {(tab) => (
                    <li>
                      <NavLink
                        href={`/${params.userId}/${tab.href}`}
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
      <Show when={resource()?.data?.data.user}>
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
    name: "Friends",
    href: "friends",
    end: false,
  },
];
