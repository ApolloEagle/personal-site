import React from "react";
import { SkillsList } from "../../SkillsList";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-start lg:h-full p-8"
    >
      <div id="skills-mob" className="text-4xl sm:text-5xl font-semibold">
        Skills
      </div>
      <div className="flex flex-col pt-8 w-full">
        <div className="flex flex-col">
          <SkillsList />
        </div>
      </div>
    </div>
  );
};

export default Skills;
