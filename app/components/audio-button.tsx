import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

export const AudioButton = ({ url }: { url: string }) => {
  const [play, setPlay] = useState<boolean>(false);

  const playMusic = async () => {
    setPlay(!play);
    const audio = document.getElementById("audio") as HTMLAudioElement;
    play ? audio?.pause() : audio?.play();
  };

  return (
    <div>
      <button
        className="text-white border border-transparent text-lg bg-opacity-50 rounded h-20 w-20 transition duration-300 bg-black rotate-45 hover:border hover:border-white activate:border-white"
        onClick={() => playMusic()}
      >
        <span className="inline-block transform -rotate-45 opacity-90">
          {play ? <Pause fill="white" /> : <Play fill="white" />}
        </span>
      </button>
      {url && (
        <audio id="audio">
          <source src={url} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};
