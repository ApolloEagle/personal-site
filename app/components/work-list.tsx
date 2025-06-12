import { ReactNode } from "react";
import { Work } from "./icons";
import WorkLogo from "./work-logo";

interface Job {
  id: number;
  icon: ReactNode;
  company: string;
  position: string;
  dates: string;
}

const WorkList = () => {
  const logoSize = 40;
  const jobs: Job[] = [
    {
      id: 0,
      icon: <WorkLogo src="/mobius.png" size={logoSize} />,
      company: "Mobius",
      position: "Founder",
      dates: "2024 - Present",
    },
    {
      id: 1,
      icon: <WorkLogo src="/7oaksgroup.png" size={logoSize} />,
      company: "7 Oaks Group",
      position: "Senior Software Engineer",
      dates: "2023 - Present",
    },
    {
      id: 2,
      icon: <WorkLogo src="/thought-industries.png" size={logoSize} />,
      company: "Thought Industries",
      position: "Senior Software Engineer",
      dates: "2022 - 2023",
    },
    {
      id: 3,
      icon: <WorkLogo src="/nutrien.jpg" size={logoSize} />,
      company: "Nutrien",
      position: "Software Engineer",
      dates: "2020 - 2022",
    },
    {
      id: 4,
      icon: <WorkLogo src="/greatvines.png" size={logoSize} />,
      company: "GreatVines",
      position: "Software Engineer",
      dates: "2019 - 2020",
    },
    {
      id: 5,
      icon: <WorkLogo src="/logrhythm.jpeg" size={logoSize} />,
      company: "LogRhythm",
      position: "Software Engineer",
      dates: "2017 - 2019",
    },
    {
      id: 6,
      icon: <WorkLogo src="/zayo.jpeg" size={logoSize} />,
      company: "Zayo Group",
      position: "Software Engineer",
      dates: "2016 - 2017",
    },
  ];

  const WorkListItem = ({ id, icon, company, position, dates }: Job) => (
    <li key={id} className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {icon}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dd>
        <dt className="sr-only">Company</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{position}</dd>
        <dt className="sr-only">Dates</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          {dates}
        </dd>
      </dl>
    </li>
  );

  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2">
      <div className="flex flex-col gap-16" />
      <div className="space-y-10 lg:pl-16 xl:pl-24">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 items-center">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
            <Work />
            <span className="ml-3">Work</span>
          </h2>
          <ol className="mt-6 space-y-4">
            {jobs.map((job) => (
              <WorkListItem key={job.id} {...job} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
