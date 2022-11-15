import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const Logo = (): JSX.Element => {
  let [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition duration-500"
      enterFrom="opacity-0 -translate-y-10"
      enterTo="opacity-100 translate-y-0"
    >
      <div className="bg-slate-800 flex flex-row justify-center items-center rounded-lg h-10 w-10 lg:h-16 lg:w-16 md:h-14 md:w-14">
        <a className="bg-slate-800 rounded-xl" href="/">
          <p className="text-slate-300 text-lg sm:text-2xl font-bold p-3 sm:p-4 hover:text-white hover:scale-110 transition duration-300 ease-in-out">
            BR
          </p>
        </a>
      </div>
    </Transition>
  );
};

export default Logo;
