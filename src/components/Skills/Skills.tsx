import React from "react";
import { Card } from "../Card";
import skills from "../../data";

const Skills = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-center items-center text-white bg-slate-900 pt-4">
      <div className="flex flex-row justify-start items-center grid grid-rows-6 grid-flow-col gap-3 lg:gap-5 md:gap-4 pb-4 p-2">
        {skills.map((skill, i) => {
          return (
            <Card key={i}>
              <div className="bg-slate-800 flex flex-row justify-center items-center rounded-lg h-10 w-10 lg:h-16 lg:w-16 md:h-14 md:w-14 text-white text-xs transition hover:scale-110">
                {skill.icon}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
