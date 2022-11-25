import React from "react";

const AWS = (): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-10 sm:w-12 h-10 sm:h-12"
      >
        <path
          className="stroke-none fill-white opacity-100"
          d="M 13.527344 21.527344 C 13.527344 22.125 13.589844 22.609375 13.703125 22.964844 C 13.832031 23.320312 13.988281 23.707031 14.214844 24.125 C 14.292969 24.253906 14.324219 24.382812 14.324219 24.496094 C 14.324219 24.65625 14.230469 24.816406 14.023438 24.980469 L 13.015625 25.65625 C 12.871094 25.753906 12.730469 25.800781 12.601562 25.800781 C 12.441406 25.800781 12.28125 25.722656 12.121094 25.574219 C 11.898438 25.335938 11.707031 25.074219 11.546875 24.816406 C 11.386719 24.542969 11.230469 24.238281 11.054688 23.867188 C 9.808594 25.351562 8.242188 26.09375 6.359375 26.09375 C 5.019531 26.09375 3.949219 25.703125 3.164062 24.929688 C 2.382812 24.15625 1.984375 23.125 1.984375 21.835938 C 1.984375 20.464844 2.464844 19.351562 3.4375 18.515625 C 4.410156 17.675781 5.703125 17.257812 7.347656 17.257812 C 7.890625 17.257812 8.449219 17.304688 9.039062 17.386719 C 9.632812 17.464844 10.238281 17.59375 10.878906 17.738281 L 10.878906 16.5625 C 10.878906 15.339844 10.621094 14.484375 10.128906 13.984375 C 9.617188 13.484375 8.753906 13.242188 7.523438 13.242188 C 6.964844 13.242188 6.390625 13.304688 5.800781 13.449219 C 5.210938 13.597656 4.636719 13.773438 4.078125 14 C 3.820312 14.113281 3.628906 14.175781 3.519531 14.210938 C 3.40625 14.242188 3.324219 14.257812 3.261719 14.257812 C 3.039062 14.257812 2.929688 14.097656 2.929688 13.757812 L 2.929688 12.96875 C 2.929688 12.710938 2.960938 12.515625 3.039062 12.402344 C 3.121094 12.289062 3.265625 12.175781 3.488281 12.0625 C 4.046875 11.773438 4.714844 11.53125 5.5 11.339844 C 6.28125 11.128906 7.109375 11.03125 7.988281 11.03125 C 9.890625 11.03125 11.277344 11.46875 12.171875 12.339844 C 13.050781 13.210938 13.496094 14.53125 13.496094 16.304688 L 13.496094 21.527344 Z M 7.046875 23.980469 C 7.570312 23.980469 8.113281 23.882812 8.6875 23.6875 C 9.265625 23.496094 9.773438 23.140625 10.207031 22.65625 C 10.460938 22.351562 10.652344 22.011719 10.75 21.625 C 10.84375 21.238281 10.910156 20.769531 10.910156 20.222656 L 10.910156 19.546875 C 10.445312 19.433594 9.949219 19.335938 9.441406 19.269531 C 8.929688 19.207031 8.433594 19.175781 7.9375 19.175781 C 6.867188 19.175781 6.085938 19.382812 5.558594 19.820312 C 5.03125 20.253906 4.777344 20.867188 4.777344 21.671875 C 4.777344 22.429688 4.96875 22.996094 5.367188 23.382812 C 5.753906 23.785156 6.3125 23.980469 7.046875 23.980469 Z M 19.863281 25.722656 C 19.578125 25.722656 19.386719 25.671875 19.257812 25.558594 C 19.128906 25.464844 19.019531 25.238281 18.921875 24.929688 L 15.171875 12.46875 C 15.074219 12.144531 15.027344 11.9375 15.027344 11.824219 C 15.027344 11.566406 15.15625 11.421875 15.410156 11.421875 L 16.976562 11.421875 C 17.277344 11.421875 17.484375 11.46875 17.597656 11.582031 C 17.726562 11.679688 17.820312 11.902344 17.917969 12.210938 L 20.597656 22.882812 L 23.089844 12.210938 C 23.167969 11.886719 23.265625 11.679688 23.390625 11.582031 C 23.519531 11.484375 23.742188 11.421875 24.03125 11.421875 L 25.308594 11.421875 C 25.609375 11.421875 25.820312 11.46875 25.945312 11.582031 C 26.074219 11.679688 26.1875 11.902344 26.25 12.210938 L 28.773438 23.011719 L 31.535156 12.210938 C 31.628906 11.886719 31.742188 11.679688 31.851562 11.582031 C 31.980469 11.484375 32.1875 11.421875 32.476562 11.421875 L 33.960938 11.421875 C 34.214844 11.421875 34.359375 11.550781 34.359375 11.824219 C 34.359375 11.902344 34.34375 11.984375 34.328125 12.082031 C 34.3125 12.179688 34.28125 12.308594 34.214844 12.484375 L 30.367188 24.945312 C 30.273438 25.269531 30.160156 25.480469 30.035156 25.574219 C 29.90625 25.671875 29.699219 25.738281 29.425781 25.738281 L 28.054688 25.738281 C 27.75 25.738281 27.542969 25.6875 27.414062 25.574219 C 27.285156 25.464844 27.175781 25.253906 27.113281 24.929688 L 24.636719 14.53125 L 22.179688 24.914062 C 22.101562 25.238281 22.003906 25.445312 21.878906 25.558594 C 21.75 25.671875 21.527344 25.722656 21.238281 25.722656 Z M 40.378906 26.15625 C 39.550781 26.15625 38.71875 26.058594 37.921875 25.867188 C 37.121094 25.671875 36.5 25.464844 36.085938 25.222656 C 35.828125 25.074219 35.652344 24.914062 35.589844 24.769531 C 35.527344 24.625 35.492188 24.464844 35.492188 24.320312 L 35.492188 23.496094 C 35.492188 23.15625 35.621094 22.996094 35.859375 22.996094 C 35.957031 22.996094 36.054688 23.011719 36.148438 23.046875 C 36.242188 23.078125 36.386719 23.140625 36.546875 23.207031 C 37.089844 23.449219 37.679688 23.640625 38.304688 23.769531 C 38.941406 23.898438 39.5625 23.964844 40.203125 23.964844 C 41.210938 23.964844 41.992188 23.785156 42.535156 23.429688 C 43.078125 23.074219 43.363281 22.558594 43.363281 21.898438 C 43.363281 21.449219 43.21875 21.078125 42.933594 20.769531 C 42.644531 20.464844 42.101562 20.191406 41.320312 19.933594 L 39.007812 19.207031 C 37.839844 18.835938 36.980469 18.285156 36.453125 17.5625 C 35.925781 16.851562 35.652344 16.0625 35.652344 15.222656 C 35.652344 14.546875 35.796875 13.949219 36.085938 13.433594 C 36.371094 12.917969 36.757812 12.464844 37.234375 12.109375 C 37.714844 11.738281 38.257812 11.464844 38.894531 11.273438 C 39.53125 11.082031 40.203125 11 40.90625 11 C 41.257812 11 41.625 11.015625 41.976562 11.0625 C 42.34375 11.113281 42.679688 11.175781 43.015625 11.242188 C 43.332031 11.320312 43.636719 11.402344 43.925781 11.5 C 44.210938 11.597656 44.433594 11.691406 44.59375 11.789062 C 44.820312 11.917969 44.976562 12.046875 45.074219 12.191406 C 45.171875 12.320312 45.21875 12.496094 45.21875 12.722656 L 45.21875 13.480469 C 45.21875 13.820312 45.089844 13.996094 44.851562 13.996094 C 44.722656 13.996094 44.515625 13.933594 44.242188 13.804688 C 43.335938 13.386719 42.3125 13.175781 41.179688 13.175781 C 40.269531 13.175781 39.550781 13.320312 39.054688 13.628906 C 38.5625 13.933594 38.304688 14.402344 38.304688 15.0625 C 38.304688 15.511719 38.464844 15.898438 38.785156 16.207031 C 39.105469 16.511719 39.695312 16.820312 40.539062 17.09375 L 42.808594 17.820312 C 43.957031 18.191406 44.789062 18.707031 45.28125 19.367188 C 45.777344 20.027344 46.015625 20.785156 46.015625 21.625 C 46.015625 22.316406 45.871094 22.945312 45.601562 23.496094 C 45.3125 24.042969 44.929688 24.527344 44.4375 24.914062 C 43.941406 25.316406 43.351562 25.605469 42.664062 25.816406 C 41.941406 26.042969 41.191406 26.15625 40.378906 26.15625 Z M 40.378906 26.15625 "
        ></path>
        <path
          className="stroke-none fill-amber-500 opacity-100"
          d="M 43.394531 33.992188 C 38.144531 37.910156 30.511719 39.988281 23.949219 39.988281 C 14.757812 39.988281 6.46875 36.554688 0.210938 30.847656 C -0.28125 30.398438 0.164062 29.785156 0.753906 30.140625 C 7.523438 34.105469 15.871094 36.507812 24.511719 36.507812 C 30.335938 36.507812 36.738281 35.28125 42.628906 32.765625 C 43.507812 32.363281 44.257812 33.347656 43.394531 33.992188 Z M 45.582031 31.476562 C 44.910156 30.605469 41.144531 31.058594 39.4375 31.265625 C 38.925781 31.332031 38.847656 30.878906 39.308594 30.539062 C 42.308594 28.414062 47.242188 29.023438 47.816406 29.734375 C 48.394531 30.460938 47.65625 35.441406 44.847656 37.828125 C 44.417969 38.199219 44.003906 38.007812 44.195312 37.523438 C 44.832031 35.925781 46.253906 32.332031 45.582031 31.476562 Z M 45.582031 31.476562 "
        ></path>
      </svg>
    </div>
  );
};

export default AWS;