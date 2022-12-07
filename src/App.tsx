import React from "react";
import "./index.css";
import {
  NavBar,
  Bio,
  Skills,
  Projects,
  Experience,
  Education,
} from "./components";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#FEFCF9] h-screen w-screen">
      <NavBar />
      <div className="text-gray-700 w-full h-full overflow-auto scroll-smooth">
        <Bio />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default App;
