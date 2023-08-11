"use client";
import ThreeScene from "../components/three";
import { Play } from "lucide-react";

export default function Music() {
  return (
    <div>
      <div className="absolute animate-music h-screen w-screen">
        <h1 className="flex justify-center mt-12 text-center text-white text-4xl font-semibold tracking-[0.25em]">
          COLLECTIONS OF SOUND
        </h1>
        <h2 className="flex justify-center mt-12 text-center text-white text-xl tracking-[0.15em]">
          BY BLAKE REIMER
        </h2>
      </div>
      {/* <div>
        <ThreeScene />
      </div> */}
      {/* <button className="absolute flex justify-center items-center text-white text-lg h-20 w-20 bg-zinc-700 rotate-45">
        <span className="-rotate-45">Play</span>
      </button> */}
      <div className="animate-fade-in items-center justify-center flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-white pb-12 text-lg">SOME SONG</p>
        <button className="text-white border border-transparent text-lg rounded h-20 w-20 transition duration-300 bg-zinc-700 rotate-45 hover:bg-black hover:border hover:border-white">
          <span className="inline-block transform -rotate-45">Play</span>
        </button>
      </div>
    </div>
  );
}
