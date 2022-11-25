import React from "react";
import { Logo, Intro, Links, Skills } from "./components";
import "./index.css";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen sm:landscape:h-auto sm:landscape:w-screen lg:landscape:h-screen lg:landscape:w-screen p-6 sm:p-10">
      <div className="flex flex-row justify-between items-center pb-2 sm:pb-0">
        <Logo />
        <Links />
      </div>
      <div className="grid grid-flow-row auto-grid-rows lg:grid-flow-cols lg:grid-cols-2 lg:grid-rows-1 gap-6 h-3/4 lg:h-4/5 mt-4 lg:mt-0">
        <Intro />
        <Skills />
      </div>
    </div>
  );
};

export default App;
