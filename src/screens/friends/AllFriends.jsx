import { For } from "solid-js";
export default function AllFriends() {
  return (
    <div className="pt-4 md:px-8">
      <h4 className="text-xl font-medium">All Friends</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <For each={[...Array(10).keys()]}>
          {(friend) => (
            <article className="bg-white shadow border rounded-lg">
              <img
                src="https://scontent-ccu1-1.xx.fbcdn.net/v/t1.6435-1/p160x160/200426312_1632237536980754_8187114724154728226_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3_34BLrb7vAAX8r_gvA&_nc_ht=scontent-ccu1-1.xx&oh=00_AT-NoWd0Kh9CLbINS_BA0ovxZL7MrtDnAJ6Mt-q-VYcNwA&oe=621DAB4D"
                alt="Profile"
                className="w-full h-40 rounded-t-lg object-cover"
              />

              <div className="p-2 h-40 flex flex-col justify-between">
                <h6 className="font-medium text-md">Harsh Mangalam</h6>

                <button className="text-red-500 font-medium py-2 w-full flex items-center  bg-red-100 justify-center space-x-2 hover:bg-red-200 rounded-lg text-sm">
                  Unfriend
                </button>
              </div>
            </article>
          )}
        </For>
      </div>
    </div>
  );
}
