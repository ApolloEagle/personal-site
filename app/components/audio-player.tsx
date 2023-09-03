import React, { useState } from "react";
import { Play, Pause, Rewind, FastForward } from "lucide-react";

interface AudioPlayerProps {
  url: string;
}

export const AudioPlayer = ({ url }: AudioPlayerProps) => {
  const [play, setPlay] = useState<boolean>(false);

  const playSong = async () => {
    setPlay(!play);
    const audio = document.getElementById("audio") as HTMLAudioElement;
    play ? audio?.pause() : audio?.play();
  };

  const rewindSong = async (fully: boolean) => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    if (!fully) {
      audioElement.currentTime -= 10;
    } else {
      audioElement.currentTime = 0;
      audioElement.pause();
      setPlay(false);
    }
  };

  const forwardSong = async (fully: boolean) => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    if (!fully) {
      audioElement.currentTime += 10;
    } else {
      audioElement.currentTime = audioElement.duration;
      setPlay(false);
    }
  };

  const handleSongEnd = () => {
    setPlay(false);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className={`flex justify-center items-center text-white border border-transparent text-lg bg-opacity-50 rounded h-12 w-12 transition duration-300 bg-black rotate-45 hover:border ${
          !play ? "hover:border-transparent" : "hover:border-white"
        } activate:border-white`}
        onClick={() => rewindSong(false)}
        onDoubleClick={() => rewindSong(true)}
        disabled={!play}
      >
        <span
          className={`inline-block transform -rotate-45 opacity-90 mr-1 ${
            !play ? "opacity-30" : "opacity-100"
          }`}
        >
          <Rewind fill="white" size={20} />
        </span>
      </button>
      <button
        className="flex justify-center items-center text-white border border-transparent text-lg bg-opacity-50 rounded h-20 w-20 transition duration-300 bg-black rotate-45 hover:border hover:border-white activate:border-white mx-12"
        onClick={() => playSong()}
      >
        <span className="inline-block transform -rotate-45 opacity-90 ml-1">
          {play ? <Pause fill="white" /> : <Play fill="white" />}
        </span>
      </button>
      <button
        className={`flex justify-center items-center text-white border border-transparent text-lg bg-opacity-50 rounded h-12 w-12 transition duration-300 bg-black rotate-45 hover:border ${
          !play ? "hover:border-transparent" : "hover:border-white"
        } activate:border-white`}
        onClick={() => forwardSong(false)}
        onDoubleClick={() => forwardSong(true)}
        disabled={!play}
      >
        <span
          className={`inline-block transform -rotate-45 opacity-90 ml-1 ${
            !play ? "opacity-30" : "opacity-100"
          }`}
        >
          <FastForward fill="white" size={20} />
        </span>
      </button>
      {url && (
        <audio id="audio" onEnded={() => handleSongEnd()}>
          <source src={url} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};
