import { createResource, For, Match, Switch } from "solid-js";
import PostCard from "../components/posts/PostCard";
import FriendLists from "../components/sidebars/FriendLists";
import PostCardSkeleton from "../components/posts/PostCardSkeleton";
import Error from "../components/shared/Error";

import { fetchPosts } from "../services/post.service";
import { fetchFriends } from "../services/friends.service";
import HomeFriendsSkeleton from "../components/friends/HomeFriendsSkeleton";
export default function Home() {
  const [response] = createResource(fetchPosts);
  const [friendsResponse] = createResource(fetchFriends);
  return (
    <div>
      {/* middle section */}
      <div className="w-full xl:w-3/5 py-6 mx-auto">
        {/* posts */}
        <Switch>
          <Match when={response.loading }>
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
        className={`h-screen fixed top-14 pt-4  hidden xl:block xl:w-1/5 right-0 bg-gray-100 dark:bg-gray-900 px-2  overflow-y-scroll no-scrollbar py-14 `}
      >
        <Switch>
          <Match when={friendsResponse.loading }>
            <HomeFriendsSkeleton />
          </Match>
          <Match when={friendsResponse.error}>
            <Error
              error="server"
              name={friendsResponse.error.name}
              message={friendsResponse.error.message}
            />
          </Match>

          <Match when={friendsResponse().data.data.users.length !== 0}>
            <h5 className="font-semibold text-xl text-gray-600 dark:text-gray-200 px-4">
              Friends
            </h5>
            <div className="my-4">
              <FriendLists friends={friendsResponse().data.data.users} />
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
