"use client";
import { DarkMode, LightMode } from "./icons";
import { useState } from "react";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className="flex justify-end md:flex-1">
      <div className="pointer-events-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          type="button"
          aria-label="Switch to light theme"
          className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        >
          {darkMode ? <DarkMode /> : <LightMode />}
        </button>
      </div>
    </div>
  );
};

export default DarkModeButton;
