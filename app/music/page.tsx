"use client";
import { Music as MusicIcon } from "lucide-react";

export default function Music() {
  return (
    <div className="flex justify-center items-center h-screen flex-col animate-[fade-in_0.5s_ease-in-out_forwards]">
      <MusicIcon color="#e5e7eb" size={100} />
      <h2 className="text-gray-200 font-semibold text-3xl py-4">
        Be Back Soon!
      </h2>
    </div>
  );
}
