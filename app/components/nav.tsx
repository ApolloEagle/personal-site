"use client";
import { usePathname } from "next/navigation";
import ProfilePicture from "./profile-picture";
import { routes } from "../constants";
import { Dropdown } from "./icons";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [modal, setModal] = useState<boolean>(false);

  const ModalMobile = () => (
    <>
      <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80" />
      <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <button onClick={() => setModal(false)} className="-m-1 p-1">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {routes.map(({ title, route }) => (
              <li key={title}>
                <a className="block py-2" href={route}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );

  return (
    <div className="top-0 z-10 h-16 pt-6 sm:px-8 w-full mb-10">
      {modal && <ModalMobile />}
      <div className="sm:px-8 w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative px-4 sm:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                {pathname !== "/" ? (
                  <div className="flex flex-1">
                    <ProfilePicture size={10} />
                  </div>
                ) : (
                  <div className="flex flex-1" />
                )}
                <div className="flex flex-1 justify-end md:justify-center">
                  <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {routes.map(({ title, route }, idx) => (
                        <li key={title}>
                          <a
                            className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${
                              route === pathname && "text-teal-500"
                            }`}
                            href={route}
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="flex flex-1 justify-end md:justify-center">
                  <div className="pointer-events-auto md:hidden">
                    <button
                      onClick={() => setModal(true)}
                      className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                    >
                      Menu
                      <Dropdown />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
