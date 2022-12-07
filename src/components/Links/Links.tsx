import React from "react";
import { Email, GitHub, Resume } from "../Icons";

const Links = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-8 absolute bottom-8 left-7">
      <GitHub />
      <Email />
      <Resume />
    </div>
  );
};

export default Links;
