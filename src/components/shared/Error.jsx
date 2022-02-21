import { Match, Switch } from "solid-js";

import serverError from "../../assets/serverError.svg";
import notFound from "../../assets/notFound.svg";
import empty from "../../assets/empty.svg";

export default function Error(props) {
  const errorSrc = (error) => {
    switch (error) {
      case "server":
        return serverError;

      case "notFound":
        return notFound;

      case "empty":
        return empty;
    }
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col items-center text-center">
        <img src={errorSrc(props.error)} className="w-60 h-60" />
        <h6 className="text-3xl font-bold text-gray-600 dark:text-gray-400">
          {props.name}
        </h6>
        <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
          {props.message}
        </p>
      </div>
    </div>
  );
}
