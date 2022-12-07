import React from "react";

const Bio = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-start lg:h-full p-8"
    >
      <div id="about-mob" className="text-4xl sm:text-5xl font-semibold">
        Blake Reimer
      </div>
      <div className="flex flex-col pt-8">
        <p className="text-base sm:text-lg">
          Hello! I'm a software developer who loves creating quality user
          experiences in TypeScript, React, and React Native. You can find me on{" "}
          <a
            href="https://github.com/ApolloEagle"
            target="_blank"
            rel="noreferrer"
            className="text-[#A95E82] transition hover:text-[#cb9fb4] duration-300"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dev.to/apolloeagle"
            target="_blank"
            rel="noreferrer"
            className="text-[#A95E82] transition hover:text-[#cb9fb4] duration-300"
          >
            Dev
          </a>{" "}
          .
        </p>
        <br />
        <p className="text-base sm:text-lg">
          My software journey started at University of Colorado where I studied
          and researched physics. During this time, I discovered that I enjoyed
          rendering scientific data and programming user interfaces. Some of my
          favorite projects involved coding visualization software for planetary
          research.
        </p>
        <br />
        <p className="text-base sm:text-lg">
          After graduation, I started my career as a Salesforce developer and
          transitioned into a full stack developer over time. In my current
          role, I build out open-source React components and interfaces for an
          educational platform.
        </p>
        <br />
        <p className="text-base sm:text-lg">
          In my free time I enjoy hiking and skiing with my family, recording
          music, and woodworking.
        </p>
      </div>
    </div>
  );
};

export default Bio;
