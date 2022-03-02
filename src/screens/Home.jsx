import { createResource, For, Match, Show, Switch } from "solid-js";
import PostCard from "../components/posts/PostCard";
import PostCardSkeleton from "../components/posts/PostCardSkeleton";
import Error from "../components/shared/Error";
import MenuSidebar from "../components/sidebars/MenuSidebars";
import { fetchFeedPosts } from "../services/post.service";
import { fetchFriends } from "../services/friends.service";
import HomeFriendsSkeleton from "../components/friends/HomeFriendsSkeleton";
import HomeFriendsList from "../components/friends/HomeFriendsList";
export default function Home() {
  const [response] = createResource(fetchFeedPosts);
  const [friendsResponse] = createResource(fetchFriends);
  return (
    <div>
      <MenuSidebar />
      {/* middle section */}
      <div className="w-full  md:w-8/12 lg:w-6/12 py-6 lg:mx-auto md:px-8 xl:w-6/12">
        {/* posts */}
        <Switch>
          <Match when={response.loading}>
            <PostCardSkeleton />
          </Match>
          <Match when={response.error}>
            <Error
              error="server"
              name={response.error.name}
              message={response.error.message}
            />
          </Match>

          <Match when={response().data.data.posts.length === 0}>
            <Error
              error="empty"
              name="No Posts"
              message="No any posts available"
            />
          </Match>
          <Match when={response().data.data.posts}>
            <div className="max-w-lg mx-auto">
              <ul className="grid grid-cols-1 gap-4">
                <For each={response().data.data.posts}>
                  {(post) => (
                    <li>
                      <PostCard {...post} />
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </Match>
        </Switch>
      </div>

      {/* right section  */}
      <div
        className={`h-screen fixed top-14 pt-4  hidden md:block md:w-4/12 lg:w-3/12 xl:w-3/12 right-0 bg-gray-100 dark:bg-gray-900 px-2 py-14  hover:overflow-y-scroll custom-scrollbar`}
      >
        <h5 className="font-semibold text-xl text-gray-600 dark:text-gray-200">
          Friends
        </h5>
        <div className="my-4">
          <Switch>
            <Match when={friendsResponse.loading}>
              <HomeFriendsSkeleton />
            </Match>
            <Match when={friendsResponse.error}>
              <p className="dark:text-white">{friendsResponse.error.name}</p>
              <p className="dark:text-white">{friendsResponse.error.message}</p>
            </Match>
            <Match when={friendsResponse()}>
              <Show
                when={friendsResponse().data.data.users.length}
                fallback={<p className="dark:text-white">No Friends</p>}
              >
                <HomeFriendsList friends={friendsResponse().data.data.users} />
              </Show>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}
