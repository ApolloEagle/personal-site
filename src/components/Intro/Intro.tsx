import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Intro = (): JSX.Element => {
  let [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center bg-slate-900 mt-0 sm:mt-4">
      <div>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-500 delay-700"
          enterFrom="opacity-0 -translate-y-10"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-2xl font-bold sm:text-4xl sm:text-left pb-2 sm:pb-4">
            Welcome!
          </p>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-500 delay-[800ms]"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-md sm:text-left sm:text-lg pb-2 sm:pb-4">
            My name is{" "}
            <strong className="font-semibold text-sky-500">
              Blake Reimer{" "}
            </strong>
            and I enjoy creating user interfaces.
          </p>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-500 delay-[900ms]"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-md sm:text-left sm:text-lg pb-2 sm:pb-4">
            I am a software engineer who specializes in building{" "}
            <strong className="font-semibold text-sky-500">React</strong> and{" "}
            <strong className="font-semibold text-sky-500">React Native</strong>{" "}
            applications. I am currently focused on building web and mobile
            applications for a customer education and external training platform
          </p>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-500 delay-1000"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="flex flex-row justify-start">
            <p className="text-slate-300 text-md sm:text-left sm:text-lg hidden sm:block">
              Here are some technologies I am currently using{" "}
            </p>
            <p className="text-3xl px-2 animate-point hidden lg:block pb-2 sm:pb-4">
              &#128073;
            </p>
          </div>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-500 delay-[1100ms]"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-md sm:text-left sm:text-lg">
            In my spare time, I enjoy exploring the Indian Peak Wilderness with
            my family and writing and recording music.
          </p>
        </Transition>
      </div>
    </div>
  );
};

export default Intro;
