import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col justify-center items-start lg:h-full px-8 pt-8 pb-24 lg:pb-0"
    >
      <div id="education-mob" className="text-4xl sm:text-5xl font-semibold">
        Education
      </div>
      <div className="flex flex-col pt-8 w-full">
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg sm:text-2xl font-semibold">
            University of Colorado
          </p>
          <p className="text-xs sm:text-base">Aug. 2010 - Dec. 2015</p>
        </div>
        <p className="text-xs sm:text-base pt-2">B.A., Physics</p>
      </div>
    </div>
  );
};

export default Education;
