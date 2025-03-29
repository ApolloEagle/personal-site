import { ReactNode } from "react";
import { AppleStoreIcon, GooglePlayIcon, Link } from "./icons";

interface ProjectCardProps {
  image: ReactNode;
  webLink?: string;
  appleLink?: string;
  androidLink?: string;
  name: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({
  image,
  webLink,
  appleLink,
  androidLink,
  name,
  description,
  technologies,
}: ProjectCardProps) => {
  const AppLink = ({
    webLink,
    appleLink,
    androidLink,
  }: {
    webLink: string;
    appleLink: string;
    androidLink: string;
  }) => {
    if (appleLink && androidLink) {
      return (
        <div className="flex flex-row gap-4 items-center">
          <a
            href={androidLink}
            target="_blank"
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
          >
            <GooglePlayIcon />
          </a>
          <a
            href={appleLink}
            target="_blank"
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
          >
            <AppleStoreIcon />
          </a>
        </div>
      );
    } else if (appleLink) {
      return (
        <a
          href={appleLink}
          target="_blank"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <AppleStoreIcon />
        </a>
      );
    } else if (androidLink) {
      return (
        <a
          href={androidLink}
          target="_blank"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <GooglePlayIcon />
        </a>
      );
    } else {
      return (
        <a
          href={webLink}
          target="_blank"
          className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <Link />
        </a>
      );
    }
  };

  return (
    <li className="group relative flex flex-col items-start transition hover:dark:bg-zinc-800/50 p-4 rounded-lg">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          {image}
        </div>
        <AppLink
          appleLink={appleLink as string}
          androidLink={androidLink as string}
          webLink={webLink as string}
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {name}
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition items-center gap-2 flex-wrap">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full dark:bg-teal-400/10 bg-teal-600/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 text-teal-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ProjectCard;
