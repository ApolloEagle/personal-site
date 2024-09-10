import { ReactNode } from "react";
import { Text, GitHub, LinkedIn, Email } from "../components";
import Image from "next/image";

interface Social {
  label: string;
  icon: ReactNode;
  link: string;
}

export default function About() {
  const socials: Social[] = [
    {
      label: "Follow on GitHub",
      icon: <GitHub />,
      link: "https://github.com/ApolloEagle",
    },
    {
      label: "Follow on LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/blakereimer/",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 pb-8 overflow-x-hidden ">
      <div className="relative px-4 sm:px-8 lg:px-12 mt-2 sm:mt-24">
        <div className="mx-auto max-w-2xl lg:max-w-5xl ">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 ">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  priority
                  src="/cam-roll-1.jpg"
                  height={400}
                  width={400}
                  alt="Picture of the author"
                  className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 mb-8"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <Text text="A little bit about me." title />
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Back in 2016, I started my journey as a software developer after
                deciding to move away my studies in physics. Fast-forward to
                today, and I’ve had the privilege of building software for a{" "}
                <a
                  target="_blank"
                  href="https://logrhythm.com/"
                  className="font-semibold hover:text-teal-500 dark:text-zinc-300 text-zinc-800"
                >
                  security intelligence company
                </a>
                , a{" "}
                <a
                  target="_blank"
                  href="https://andavisolutions.com/greatvines-sales-management/"
                  className="font-semibold hover:text-teal-500  dark:text-zinc-300 text-zinc-800"
                >
                  start-up
                </a>
                , and a {""}
                <a
                  target="_blank"
                  href="https://www.nutrien.com/"
                  className="font-semibold hover:text-teal-500  dark:text-zinc-300 text-zinc-800"
                >
                  large corporation
                </a>
                .
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                My main focus currently is building a mobile CMS application for
                our clients at{" "}
                <a
                  target="_blank"
                  href="https://blueravensolar.com/"
                  className="font-semibold hover:text-teal-500  dark:text-zinc-300 text-zinc-800"
                >
                  Blue Raven Solar
                </a>
                . I most enjoy end-to-end development. Working on both the
                frontend and the backend parts of applications gives me a
                holistic view of the entire system.
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                When I’m not at the computer, I’m usually mountain biking,
                skiing, hanging out with my wife and three dogs, or recording
                <a
                  href="/music"
                  className="font-semibold hover:text-teal-500 dark:text-zinc-300 text-zinc-800"
                >
                  {" "}
                  music.
                </a>
              </p>
            </div>
            <div className="lg:pl-20">
              <ul role="list" className="flex flex-col gap-4">
                {socials.map(({ label, link, icon }) => (
                  <li key={label}>
                    <a
                      key={label}
                      aria-label={label}
                      href={link}
                      target="_blank"
                      className="group flex flex-row gap-4 "
                    >
                      <div key={label} className="-m-1 p-1 hover:fill-teal-500">
                        {icon}
                      </div>
                      <span className="group-hover:text-teal-500 dark:text-zinc-200 text-zinc-800 text-sm">
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                <a
                  aria-label={"email"}
                  href={"mailto:sobeksea@gmail.com"}
                  className="group flex flex-row gap-4 "
                >
                  <div className="-m-1 p-1 hover:fill-teal-500">
                    <Email />
                  </div>
                  <span className="group-hover:text-teal-500 dark:text-zinc-200 text-zinc-800 text-sm">
                    sobeksea@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About - Blake Reimer",
};
