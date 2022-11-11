import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Intro = () => {
  let [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center bg-slate-900">
      <div>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-1000"
          enterFrom="opacity-0 -translate-y-10"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-3xl font-bold sm:text-4xl sm:text-left pb-4">
            Welcome!
          </p>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-1000 delay-200"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 pb-4 text-md sm:text-left sm:text-lg">
            My name is{" "}
            <strong className="font-semibold text-sky-500">
              Blake Reimer.
            </strong>
          </p>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-1000 delay-300"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-md sm:text-left sm:text-lg pb-4">
            I am a software engineer who specializes in building{" "}
            <strong className="font-semibold text-sky-500">React</strong> and{" "}
            <strong className="font-semibold text-sky-500">React Native</strong>{" "}
            apps. I am passionate about creating efficient and intuitive
            interfaces.
          </p>
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition duration-1000 delay-500"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <p className="text-slate-300 text-md sm:text-left sm:text-lg]">
            In my free time, I enjoy spending time with my friends and family,
            skiing, hiking, and recording music.
          </p>
        </Transition>
      </div>
    </div>
  );
};

export default Intro;
