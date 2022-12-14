import React from "react";

const Email = (): JSX.Element => {
  return (
    <a
      className="block"
      href="mailto:sobeksea@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-envelope-fill block sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-gray-200 hover:fill-white hover:scale-110 transition duration-300 ease-in-out"
        viewBox="0 0 16 16"
      >
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
      </svg>
    </a>
  );
};

export default Email;
