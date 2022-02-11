import { BsThreeDots } from "solid-icons/bs";
import {Link} from "solid-app-router"
export default function FriendCard(props) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4 dark:border-gray-700">
      <section className="flex items-center space-x-4">
        <div className="rounded-xl w-16 h-16 flex-none">
          <img
            src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-1/p160x160/273375218_138265875340824_4806319985186374907_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kQT18oc63m4AX_RozHH&_nc_ht=scontent-ccu1-1.xx&oh=00_AT_ZDkdl5FGSwuaMSdC9ZX2MoJJgp0dny-gqYfNfViLh4g&oe=620AA808"
            className="rounded-xl w-full h-full"
          />
        </div>
        <div className="flex flex-col space-y-0">
        <h6 className="text-lg font-medium">Harsh Mangalam</h6>
        <Link href="" className="text-gray-600 dark:text-gray-300 text-sm">34 mutual friends</Link>
        </div>
      </section>

      <section>
        <button className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-100 rounded-full">
          <BsThreeDots />
        </button>
      </section>
    </div>
  );
}
