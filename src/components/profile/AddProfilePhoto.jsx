import { FaSolidCamera } from "solid-icons/fa";
import { AiOutlineUser } from "solid-icons/ai";
export default function AddProfilePhoto() {
  return (
    <div className="absolute -bottom-20 md:-bottom-28 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0">
      <div className="w-40 h-40 grid place-items-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 relative">
        {/* <AiOutlineUser className="dark:text-white" size={100} /> */}
        <img src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-1/p160x160/273375218_138265875340824_4806319985186374907_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kQT18oc63m4AX_RozHH&_nc_ht=scontent-ccu1-1.xx&oh=00_AT_ZDkdl5FGSwuaMSdC9ZX2MoJJgp0dny-gqYfNfViLh4g&oe=620AA808" className="absolute inset-0 rounded-full w-full h-full" />

        <div className="absolute bottom-4 right-0">
          <button className="w-10 h-10 rounded-full grid place-items-center bg-blue-500 hover:bg-blue-600" title="Add Profile Photo">
            <FaSolidCamera className="text-xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
