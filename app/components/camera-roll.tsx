"use client";
import Image from "next/image";

const CameraRoll = () => {
  const cameraroll = [
    {
      id: 0,
      source: "/cam-roll-1.jpg",
      rotate: "rotate-2",
    },
    {
      id: 1,
      source: "/cam-roll-2.jpg",
      rotate: "-rotate-2",
    },
    {
      id: 2,
      source: "/cam-roll-3.jpg",
      rotate: "-rotate-2",
    },
    {
      id: 3,
      source: "/cam-roll-4.jpg",
      rotate: "rotate-2",
    },
    {
      id: 4,
      source: "/cam-roll-5.jpg",
      rotate: "-rotate-2",
    },
  ];
  return (
    <div className="flex flex-row w-screen gap-5 sm:gap-8 my-24 -ml-72">
      {cameraroll.map(({ id, source, rotate }) => (
        <div
          key={id}
          className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${rotate}`}
        >
          <Image
            key={id}
            priority
            src={source}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            alt="Picture of the author"
          />
        </div>
      ))}
    </div>
  );
};

export default CameraRoll;
