import { Show } from "solid-js";
import { ImSpinner2 } from "solid-icons/im";
import { cn } from "../../../utils";

import Spinner from "../../spinner/Spinner";

export default function Button({
  children,
  className,
  color = "primary",
  disabled,
  isLoading,
  onClick,
  size = "medium",
  text,
  ...props
}) {
  const disableBtn = disabled === true || isLoading === true;
  const _className = cn([
    "flex items-center justify-center ",
    color === "primary" ? "bg-blue-500" : null,
    color === "success" ? "bg-green-500" : null,
    color === "danger" ? "bg-red-500" : null,
    size === "small" ? "text-sm px-2 py-1 rounded-md" : null,
    size === "medium" ? "text-md px-3 py-2 rounded-md" : null,
    size === "large" ? "text-lg px-4 py-3 rounded-lg" : null,
    disableBtn ? "opacity-70" : null,
    className,
  ]);

  return (
    <button
      className={_className}
      disabled={[disableBtn]}
      onClick={[onClick]}
      {...props}
    >
      <Show
        when={!isLoading}
        fallback={<ImSpinner2 className="animate-spin w-8 h-8" />}
      >
        {children}
        <span>{text}</span>
      </Show>
    </button>
  );
}
