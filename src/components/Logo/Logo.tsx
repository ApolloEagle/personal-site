import React from "react";

const Logo = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-center items-center bg-slate-800 rounded-xl w-10 sm:w-16 h-10 sm:h-16 justify-self-end">
      <a className="bg-slate-800 rounded-xl" href="/">
        <p className="text-slate-300 text-lg sm:text-xl font-bold p-4 hover:text-white hover:scale-110 transition duration-300 ease-in-out">
          BR
        </p>
      </a>
    </div>
  );
};

export default Logo;
