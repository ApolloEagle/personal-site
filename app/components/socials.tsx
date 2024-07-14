import { ReactNode } from "react";
import { GitHub, LinkedIn } from "./icons";

interface Social {
  label: string;
  icon: ReactNode;
  link: string;
}

const Socials = () => {
  const socials: Social[] = [
    {
      label: "Follow on GitHub",
      icon: <GitHub />,
      link: "https://github.com/ApolloEagle",
    },
    {
      label: "Follow on LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/blake-reimer-91251b313/",
    },
  ];
  return (
    <div className="mt-6 flex gap-6">
      {socials.map(({ label, icon, link }) => (
        <div key={label} className="flex flex-row">
          <a
            key={label}
            className="group -m-1 p-1"
            aria-label={label}
            href={link}
            target="_blank"
          >
            {icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
