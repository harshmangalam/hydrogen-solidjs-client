import { BsGithub, BsHeartFill } from "solid-icons/bs";
import { ImTwitter } from "solid-icons/im";
import { FaBrandsDev } from "solid-icons/fa";
export default function Footer() {
  return (
    <footer className="py-4 flex flex-col space-y-2">
      <div>
        <p className="text-center">Peepsule - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
