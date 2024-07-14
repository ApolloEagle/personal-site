import { ReactNode } from "react";
import { Link } from "./icons";

const ProjectCard = ({
  image,
  link,
  name,
  description,
  technologies,
}: {
  image: ReactNode;
  link: string;
  name: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {image}
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
        <a href={link} target="_blank">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{name}</span>
        </a>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition items-center gap-2 flex-wrap">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ProjectCard;
