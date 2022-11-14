import React, { useEffect, useState } from "react";
import { Email, GitHub, Resume } from "../Icons";
import { Transition } from "@headlessui/react";

const Links = (): JSX.Element => {
  let [isShowing, setIsShowing] = useState<boolean>(false);
  const icons = [<Email />, <GitHub />, <Resume />];

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <div className="flex flex-row gap-8 sm:gap-12 pt-2 sm:pt-0">
      {icons.map((icon, i) => {
        return (
          <Transition
            key={i}
            appear={true}
            show={isShowing}
            enter={`transition duration-500 delay-${i * 100}`}
            enterFrom="opacity-0 -translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            {icon}
          </Transition>
        );
      })}
    </div>
  );
};

export default Links;
