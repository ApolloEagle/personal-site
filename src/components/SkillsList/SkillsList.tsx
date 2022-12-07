import React from "react";
import { Card } from "../Card";
import skills from "../../data";

const SkillsList = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-white pt-4 sm:pt-0">
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
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

export default SkillsList;
