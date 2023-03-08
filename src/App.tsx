import React from "react";
import "./index.css";
import { ConstructionIcon } from "./components/Icons";

const App = () => {
  return (
    <div className="flex flex-col bg-[#FFD400] h-screen w-screen justify-center items-center">
      <ConstructionIcon />
      <div className="font-bold">Under Construction</div>
    </div>
  );
};

export default App;
