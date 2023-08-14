"use client";
import { useEffect, useState } from "react";
import { AudioButton } from "../components/audio-button";
import { ThreeScene } from "../components/three";

export default function Music() {
  const [title, setTitle] = useState<string>("");
  const [audioURL, setAudioURL] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/gcs", {
          method: "GET",
        });

        if (response.ok) {
          const { songs } = await response.json();
          if (songs) {
            setAudioURL(songs[0].url);
            setTitle(songs[0].name);
          }
        } else {
          console.error(
            "There appears to be an issue with loading the requested audio file."
          );
        }
      } catch (error) {
        console.error(
          "There appears to be an issue with loading the requested audio file."
        );
      }
    })();
  });

  return (
    <div>
      <div className="absolute animate-music h-screen w-screen">
        <h1 className="flex justify-center mt-12 text-center text-white text-xl sm:text-4xl font-semibold tracking-[0.25em]">
          COLLECTIONS OF SOUND
        </h1>
        <h2 className="flex justify-center mt-4 sm:mt-12 text-center text-white text sm:text-xl tracking-[0.15em]">
          BY BLAKE REIMER
        </h2>
      </div>
      <div>
        <ThreeScene />
      </div>
      <div className="animate-fade-in items-center justify-center flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-white pb-12 text-lg">{title}</p>
        <AudioButton url={audioURL} />
      </div>
    </div>
  );
}
