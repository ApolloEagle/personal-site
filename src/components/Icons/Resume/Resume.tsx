import React from "react";

const Resume = (): JSX.Element => {
  return (
    <a className="block" href="/resume.pdf" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-file-earmark-person-fill block w-6 h-6 sm:w-8 sm:h-8 fill-gray-400 hover:fill-white hover:scale-125 transition duration-300 ease-in-out animate-[dropIn_1.9s] sm:animate-[dropIn_1.4s]"
        viewBox="0 0 16 16"
      >
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"></path>
      </svg>
    </a>
  );
};

export default Resume;
