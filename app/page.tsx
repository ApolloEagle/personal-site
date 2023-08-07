import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-t from-blue-500 to-bg-black/20">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-200"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <div className=" z-10 hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Blake Reimer
      </h1>
      <div className="z-10 hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-300 px-2 sm:px-0">
          I am a full stack developer building open source education solutions
          for{" "}
          <Link
            target="_blank"
            href="https://www.thoughtindustries.com/"
            className="underline duration-500 hover:text-zinc-300"
          >
            Thought Industries
          </Link>
        </h2>
      </div>
    </div>
  );
}
