import { createSignal, For, Show } from "solid-js";
import MainLayout from "../components/layouts/MainLayout";
import PostCard from "../components/posts/PostCard";

export default function Home() {
  const [showLikeDialog, setShowLikeDialog] = createSignal(false);
  return (
    <MainLayout>
      {/* left section */}
      <div
        className={`h-screen fixed top-14 xl:block xl:w-1/5 hidden py-4 left-0 bg-gray-100 dark:bg-gray-900  px-2`}
      ></div>

      {/* middle section */}
      <div className="w-full xl:w-3/5 py-6 mx-auto">
        {/* posts */}
       <div className="max-w-lg mx-auto">
       <ul className="grid grid-cols-1 gap-4">
          <For each={[...Array(10).keys()]}>
            {(post) => (
              <li>
                <PostCard />
              </li>
            )}
          </For>
        </ul>
       </div>
      </div>

      {/* right section  */}
      <div
        className={`h-screen fixed top-14  hidden py-4 xl:block xl:w-1/5 right-0 bg-gray-100 dark:bg-gray-900 px-2`}
      ></div>
    </MainLayout>
  );
}
