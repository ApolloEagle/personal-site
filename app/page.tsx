"use client";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Mail, Github, Mountain, Leaf, Droplet, Menu } from "lucide-react";
import profilePic from "../public/profile.jpg";
import type { AppProps } from "next/app";
import { ThemeProvider, useThemeContext } from "./context";

interface Navigation {
  name: string;
  href: string;
}

interface Social {
  icon: ReactNode;
  href: string;
}

const navigation: Navigation[] = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Music", href: "/music" },
  { name: "Contact", href: "/contact" },
];

const socials: Social[] = [
  { icon: <Github />, href: "https://github.com/ApolloEagle" },
  { icon: <Mail />, href: "mailto:sobeksea@gmail.com" },
];

const NavBar = () => {
  const { theme, setTheme } = useThemeContext();

  const Web = () => (
    <div className="justify-between items-center hidden sm:flex">
      <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
        <Mountain size={36} />
      </Link>
      <div className="flex">
        {navigation.map((item) => (
          <Link
            href={item.href}
            className="duration-200 text-zinc-300 hover:text-zinc-100 px-3 text-lg"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex">
        {socials.map((item) => (
          <Link
            className="duration-200 text-zinc-300 hover:text-zinc-100"
            href={item.href}
          >
            <div className="px-2">{item.icon}</div>
          </Link>
        ))}
      </div>
      <button
        className={`absolute -top-3 -right-3 duration-200 text-zinc-300 hover:text-zinc-100 ${
          theme ? "bg-sky-600" : "bg-emerald-600"
        } p-1 rounded-md active:translate-y-1`}
        onClick={() => setTheme(!theme)}
      >
        {theme ? <Droplet size={18} /> : <Leaf size={18} />}
      </button>
    </div>
  );

  const Mobile = () => (
    <div className="flex justify-between items-center sm:hidden">
      <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
        <Mountain size={36} />
      </Link>
      <div className="flex items-center">
        <button
          className={`duration-200 text-zinc-300 hover:text-zinc-100 ${
            theme ? "bg-sky-600" : "bg-emerald-600"
          } p-1 rounded-md active:scale-90 tou`}
          onClick={() => setTheme(!theme)}
        >
          {theme ? <Droplet /> : <Leaf />}
        </button>
        <button>
          <Menu className="duration-200 text-zinc-300 hover:text-zinc-100 ml-4 active:scale-90" />
        </button>
      </div>
    </div>
  );

  return (
    <nav
      className={`${
        theme ? "bg-emerald-800" : "bg-sky-800"
      } rounded-xl fixed top-8 w-[100%] lg:w-[1024px] p-3`}
    >
      <Web />
      <Mobile />
    </nav>
  );
};

const Content = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${
        theme ? "bg-emerald-900" : "bg-sky-900"
      }`}
    >
      <Analytics />
      <NavBar />
    </div>
  );
};

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
