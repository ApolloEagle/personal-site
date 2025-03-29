import { ProjectCard, Text } from "../components";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 0,
      image: (
        <Image
          loading="lazy"
          src="/blue-raven.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="rounded-full h-8 w-8"
        />
      ),
      name: "Albatross",
      webLink: "https://blueravensolar.com/",
      description: `Albatross is comprehensive solution designed to streamline and enhance the management of customers in the residential solar industry.`,
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Expo",
        "Node.js",
        "CSS",
        "SQL",
        "Figma",
      ],
    },
    {
      id: 1,
      image: (
        <Image
          loading="lazy"
          src="/helium.jpg"
          height={400}
          width={400}
          alt="Picture of the author"
          className="rounded-full h-8 w-8"
        />
      ),
      name: "Helium",
      webLink: "https://developer.thoughtindustries.com/docs/getting-started/",
      linkTitle: "developer.thoughtindustries.com",
      description: `A modern and powerful development platform for extending the capabilities and functionality of the Ti Enterprise Learning Cloud.`,
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Expo",
        "GraphQL",
        "TailwindCSS",
        "PostGreSQL",
        "AWS",
        "Storybook",
        "Figma",
      ],
    },
    {
      id: 2,
      image: (
        <Image
          loading="lazy"
          src="/question-master.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="rounded-full h-8 w-8"
        />
      ),
      name: "Question Master",
      appleLink: "https://apps.apple.com/us/app/question-master/id6446128075",
      linkTitle: "apps.apple.com",
      description: `Problem solving mobile application built in React Native and integrated with ChatGPT.`,
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "GraphQL",
        "PostGreSQL",
        "Azure",
        "ChatGPT",
        "Figma",
      ],
    },
    {
      id: 3,
      image: (
        <Image
          loading="lazy"
          src="/npm.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="rounded-full h-8 w-8"
        />
      ),
      name: "Loading Dots",
      webLink: "https://www.npmjs.com/package/@apolloeagle/loading-dots",
      linkTitle: "npmjs.com",
      description: `Npm package for React Native loaders.`,
      technologies: ["React Native", "TypeScript"],
    },
    {
      id: 4,
      image: (
        <Image
          loading="lazy"
          src="/rapid-dots.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="rounded-full h-8 w-8"
        />
      ),
      name: "Rapid Dotz",
      appleLink: "https://apps.apple.com/us/app/rapid-dotz/id1669643824",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.apolloeagle.rapiddots",
      linkTitle: "apps.apple.com",
      description: `React Native gaming app.`,
      technologies: ["React Native", "TypeScript"],
    },
    {
      id: 5,
      image: (
        <Image
          loading="lazy"
          src="/formis.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="rounded-full h-8 w-8"
        />
      ),
      name: "Formis",
      appleLink: "https://apps.apple.com/us/app/formis/id1634234837",
      linkTitle: "apps.apple.com",
      description: `Casual puzzle game.`,
      technologies: ["Swift"],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 pb-8 overflow-x-hidden">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <div className="mt-8">
              <Text text="Things I've worked on over the years." title />
            </div>
            <Text text="I’ve worked on a bunch of projects over the years but these are the ones that I’m most proud of. Some of them are open-source, so feel free to contribute if you have ideas for how they can be improved." />
          </div>
          <div className="mt-16 sm:mt-20">
            <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((item) => (
                <ProjectCard key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Projects - Blake Reimer",
};
