import React, { useEffect, useState } from "react";
import { Email, GitHub, Resume, AppStore } from "../Icons";
import { Transition } from "@headlessui/react";

const Links = (): JSX.Element => {
  let [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <div className="flex flex-row gap-8 sm:gap-12 pt-2 sm:pt-0">
      <Transition
        appear={true}
        show={isShowing}
        enter="transition duration-500"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
      >
        <GitHub />
      </Transition>
      <Transition
        appear={true}
        show={isShowing}
        enter="transition duration-500 delay-100"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
      >
        <Email />
      </Transition>
      <Transition
        appear={true}
        show={isShowing}
        enter="transition duration-500 delay-200"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
      >
        <Resume />
      </Transition>
      <Transition
        appear={true}
        show={isShowing}
        enter="transition duration-500 delay-300"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
      >
        <AppStore />
      </Transition>
    </div>
  );
};

export default Links;
