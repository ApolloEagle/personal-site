import React from "react";
import { Card } from "../Card";
import skills from "../../data";

const Skills = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-slate-900 pt-4 sm:pt-0">
      <div className="flex-row justify-start items-center grid grid-rows-6 grid-flow-col gap-y-3 gap-x-5 lg:gap-5 md:gap-4">
        {skills.map((skill, i) => {
          return (
            <Card key={i} name={skill.name}>
              {skill.icon}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;