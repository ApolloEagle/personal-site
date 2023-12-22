import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Info } from "lucide-react";

interface Project {
  name: string;
  description: string;
  skills: string;
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Albatross",
      description:
        "Albatross is comprehensive solution designed to streamline and enhance the management of customers in the residential solar industry. This app caters specifically to businesses involved in providing solar energy solutions to homeowners.",
      skills: "js,react",
      link: "https://blueravensolar.com/",
    },
    {
      name: "Helium",
      description:
        "Helium is an initiative to open up the Thought Industries architecture, providing customers and partners with rich capabilities and technologies to more easily customize and extend the Customer Learning Cloud to meet unique business needs.",
      skills: "ts,react,graphql,postgres,aws",
      link: "https://developer.thoughtindustries.com/build/developer-guide",
    },
    {
      name: "Question Master",
      description:
        "Problem solving mobile application built in React Native and integrated with ChatGPT.",
      skills: "ts,react,azure,gcp",
      link: "https://apps.apple.com/us/app/question-master/id6446128075",
    },
    {
      name: "Loading Dots",
      description: "Npm package for React Native loaders.",
      skills: "ts,react",
      link: "https://www.npmjs.com/package/@apolloeagle/loading-dots",
    },
    {
      name: "Rapid Dots",
      description: "Reaction gaming app.",
      skills: "ts,react",
      link: "https://apps.apple.com/us/app/rapid-dotz/id1669643824",
    },
    {
      name: "Formis",
      description: "Casual puzzle gaming app.",
      skills: "swift,blender",
      link: "https://apps.apple.com/us/app/formis/id1634234837",
    },
  ];
  return (
    <div className="bg-gradient-to-t from-blue-500 to-bg-black/20 pb-16 min-h-screen">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 mt-10 sm:mt-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-400" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 h-full">
          <Card>
            <div className="flex flex-col w-full h-full p-4 md:p-8 justify-between">
              <div>
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {projects[0].name}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 mb-6">
                  {projects[0].description}
                </p>
              </div>
              <div className="flex flex-row justify-between items-end">
                <p className="text-zinc-200 hover:text-zinc-50">
                  <a href={projects[0].link}>
                    <span className="hidden lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </span>
                    <span className="block lg:hidden">
                      <Info />
                    </span>
                  </a>
                </p>
                <p>
                  <a href="https://skillicons.dev">
                    <img
                      src={`https://skillicons.dev/icons?i=${projects[0].skills}`}
                    />
                  </a>
                </p>
              </div>
            </div>
          </Card>
          <div className="grid grid-cols-1 gap-8">
            {projects.slice(1, 3).map(({ name, description, skills, link }) => (
              <Card>
                <article className="relative w-full h-full p-4 md:p-8">
                  <h2
                    id="featured-post"
                    className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {name}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 mb-6">
                    {description}
                  </p>
                  <div className="flex flex-row justify-between items-end">
                    <p className="text-zinc-200 hover:text-zinc-50">
                      <a href={link}>
                        <span className="hidden lg:block">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </span>
                        <span className="block lg:hidden">
                          <Info />
                        </span>
                      </a>
                    </p>
                    <p>
                      <a href="https://skillicons.dev">
                        <img src={`https://skillicons.dev/icons?i=${skills}`} />
                      </a>
                    </p>
                  </div>
                </article>
              </Card>
            ))}
          </div>
          {projects.slice(3).map(({ name, description, skills, link }) => (
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {name}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 mb-6">
                  {description}
                </p>
                <div className="flex flex-row justify-between items-end">
                  <p className="text-zinc-200 hover:text-zinc-50">
                    <a href={link}>
                      <span className="hidden lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </span>
                      <span className="block lg:hidden">
                        <Info />
                      </span>
                    </a>
                  </p>
                  <p>
                    <a href="https://skillicons.dev">
                      <img src={`https://skillicons.dev/icons?i=${skills}`} />
                    </a>
                  </p>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
