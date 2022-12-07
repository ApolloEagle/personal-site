import React, { Fragment, useState, useEffect, ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface CardProp {
  name: String;
  children: ReactNode;
}

const Card = ({ children, name }: CardProp): JSX.Element => {
  let [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center rounded-lg h-12 w-12 lg:h-16 lg:w-16 md:h-14 md:w-14 z-0 peer hover:invisible active:invisible bg-slate-200">
          {children}
        </div>
        <div className="flex flex-row justify-center items-center bg-[#EBC671] text-white font-bold rounded-lg h-12 w-12 lg:h-16 lg:w-16 md:h-14 md:w-14 absolute opacity-0 transition ease-in-out hover:opacity-100 active:opacity-100 duration-150 text-[0.5rem] lg:text-[0.7rem]">
          {name}
        </div>
      </div>
    </Transition>
  );
};

export default Card;
