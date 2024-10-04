import { Show } from "solid-js";
import { ImSpinner2 } from "solid-icons/im";

import Spinner from "../../spinner/Spinner";

export default function Button({
  children,
  color = "primary",
  disabled,
  isLoading,
  onClick,
  size = "medium",
  text,
  ...props
}) {
  const disableBtn = disabled === true || isLoading === true;

  return (
    <button
      className="py-2 px-3 flex items-center justify-center rounded-lg"
      classList={{
        "bg-blue-500": color === "primary",
        "bg-green-500": color === "success",
        "bg-red-500": color === "danger",
        "text-sm": size === "small",
        "text-md": size === "medium",
        "text-lg": size === "large",
        "opacity-70": disableBtn,
      }}
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
