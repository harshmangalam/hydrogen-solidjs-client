import { BsGithub, BsHeartFill } from "solid-icons/bs";
import { ImTwitter } from "solid-icons/im";
import { FaBrandsDev } from "solid-icons/fa";
export default function Footer() {
  return (
    <footer className="py-4 flex flex-col space-y-2">
      <div>
        <p className="text-center">Hydrogen - {new Date().getFullYear()}</p>
      </div>
      <div className="text-center flex items-center justify-center gap-2">
        <p>Made</p>

        <p>With </p>
        <BsHeartFill className="text-rose-500 w-4 h-4" />
        <p>By</p>
        <a
          target={"_blank"}
          href="https://github.com/harshmangalam"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          {" "}
          Harsh Mangalam{" "}
        </a>
        <p>in</p>
        <img
          title="India"
          alt="India"
          src="data:image/png;base64,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"
          className="w-4 h-4"
        />
      </div>

      <div className="flex items-center justify-center space-x-4">
        <a target={"_blank"} href="https://github.com/harshmangalam">
          <BsGithub class="w-6 h-6" />
        </a>
        <a target={"_blank"} href="https://twitter.com/HarshMangalam6">
          <ImTwitter class="text-blue-400 w-6 h-6" />
        </a>
        <a target={"_blank"} href="https://dev.to/harshmangalam">
          <FaBrandsDev class="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
