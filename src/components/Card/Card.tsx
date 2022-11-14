import React, { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const Card = ({ children, name }: any): JSX.Element => {
  let [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[400ms] delay-[900ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="flex flex-row justify-center items-center">
        <div className="bg-slate-800 flex flex-row justify-center items-center rounded-lg h-10 w-10 lg:h-16 lg:w-16 md:h-14 md:w-14 peer hover:invisible active:invisible">
          {children}
        </div>
        <div className="flex flex-row justify-center items-center bg-slate-800 text-sky-400 font-bold rounded-lg h-10 w-10 lg:h-16 lg:w-16 md:h-14 md:w-14 absolute invisible peer-hover:visible peer-active:visible text-[8px] sm:text-xs">
          {name}
        </div>
      </div>
    </Transition>
  );
};

export default Card;
