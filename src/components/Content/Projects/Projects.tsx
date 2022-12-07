import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-start lg:h-full p-8"
    >
      <div id="projects-mob" className="text-4xl sm:text-5xl font-semibold">
        Projects
      </div>
      <div className="flex flex-col pt-8 w-full">
        <div className="flex flex-col">
          <p className="text-lg sm:text-2xl font-semibold">Formis</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 py-4 items-center">
            <a
              href="https://apps.apple.com/us/app/formis/id1634234837"
              target="_blank"
              rel="noreferrer"
              className="col-span-1"
            >
              <img
                className="w-24 rounded-lg transition hover:scale-110 duration-300"
                src="/formis.png"
                alt="formis"
              />
            </a>
            <p className="text-sm sm:text-base col-span-4 sm:col-span-9 pl-4">
              A puzzle game for iOS devices. To score points, rotate the cube
              up-down or left-to-right to match the upward face with the falling
              shapes.
            </p>
          </div>
          <p className="text-lg sm:text-2xl font-semibold pt-4">Loading Dots</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 py-4 items-center">
            <a
              href="https://www.npmjs.com/package/@apolloeagle/loading-dots"
              target="_blank"
              rel="noreferrer"
              className="col-span-1"
            >
              <img
                className="w-24 rounded-lg transition hover:scale-110 duration-300"
                src="/npm.png"
                alt="npm"
              />
            </a>
            <p className="ext-sm sm:text-base col-span-4 sm:col-span-9 pl-4">
              An open-source component for displaying loading dots in React
              Native applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
