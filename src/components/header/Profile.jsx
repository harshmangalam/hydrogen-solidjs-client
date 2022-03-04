import { useAuthState } from "../../context/auth";
import UserAvatar from "../ui/dataDisplay/UserAvatar";
export default function Profile() {
  const { currentUser } = useAuthState();
  return (
    <button>
      <UserAvatar
        src={currentUser.profileImage}
        className="w-10 h-10 rounded-full"
        alt={currentUser.firstName}
      />
    </button>
  );
}
