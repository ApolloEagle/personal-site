import React from "react";
import { Logo, Intro, Links } from "./components";
import "./index.css";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen p-6 sm:p-10">
      <div className="flex flex-row justify-between items-center">
        <Logo />
        <Links />
      </div>
      <div className="grid grid-flow-row grid-rows-2 sm:grid-flow-cols sm:grid-cols-2 sm:grid-rows-1 gap-6 h-3/4 sm:h-4/5 pt-10">
        <Intro />
        <div className="flex flex-row justify-center items-center text-white bg-slate-900">
          Skills Here
        </div>
      </div>
    </div>
  );
};

export default App;
