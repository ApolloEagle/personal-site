import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-start lg:h-full p-8"
    >
      <div id="experience-mob" className="text-4xl sm:text-5xl font-semibold">
        Experience
      </div>
      <div className="flex flex-col pt-8 w-full">
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg sm:text-2xl font-semibold">
            JavaScript Application Developer
          </p>
          <p className="text-xs sm:text-base">Feb. 2022 - Present</p>
        </div>

        <p className="text-base sm:text-xl pt-2 font-normal">
          Thought Industries
        </p>
        <ul className="list-disc list-outside pt-4 pl-8 text-sm sm:text-base">
          <li>
            Develop new product features for Thought Industries' education
            platform.
          </li>
          <li>
            Create and maintain responsive user interfaces built with React and
            Tailwind.
          </li>
          <li>Oversee the development of React Native mobile application.</li>
          <li>
            {" "}
            Replace REST API endpoints and build GraphQL layer using Apollo.
          </li>
          <li>
            Write unit and integration tests with Jest to ensure reliable
            application behavior.
          </li>
          <li>Utilize Scrum framework throughout the SDLC.</li>
          <li>
            Collaborate with product and design teams to gather requirements and
            plan out stories and bugs.
          </li>
        </ul>
      </div>
      <div className="flex flex-col pt-8 w-full">
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg sm:text-2xl font-semibold">
            Full Stack Developer
          </p>
          <p className="text-xs sm:text-base">Jul. 2020 - Feb. 2022</p>
        </div>
        <p className="text-base sm:text-xl pt-2 font-normal">Nutrien</p>
        <ul className="list-disc list-outside pt-4 pl-8 text-sm sm:text-base">
          <li>
            Assist in the development of Nutrien’s full stack applications for
            Sustainability and Agronomy pillars.
          </li>
          <li>Develop responsive and user friendly SPAs in React.</li>
          <li>
            Develop scalable customer-facing mobile applications in React
            Native.
          </li>
          <li>
            {" "}
            Build and enhance Node.js backends and GraphQL layers to validate
            and display persistent agronomic and sustainability data.
          </li>
          <li>
            Create and update unit and integration tests with Mocha and Jest to
            secure reliable application behavior
          </li>
          <li>
            Practice Agile principles throughout the development cycle of
            planning, development, testing, deployment, and retrospection.
          </li>
          <li>
            Work with product teams to gather requirements and write bugs and
            user stories.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
