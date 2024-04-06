"use client";
import Image from "next/image";
import {
  SpotifyIcon,
  AppleMusicIcon,
  ITunesIcon,
  PandoraIcon,
  IHeartRadioIcon,
  TikTokIcon,
} from "../components/icons";
import { ChevronRight } from "lucide-react";

export default function Music() {
  const streamingPlatforms = [
    {
      id: 0,
      icon: <SpotifyIcon />,
      label: "Spotify",
      link: "https://open.spotify.com/album/6biyqOWROlBog1FyrsIW9t",
    },
    {
      id: 1,
      icon: <AppleMusicIcon />,
      label: "Apple Music",
      link: "https://music.apple.com/us/album/dont-cry-single/1738798141?uo=4&app=music&at=1001lry3&ct=dashboard",
    },
    {
      id: 2,
      icon: <ITunesIcon />,
      label: "iTunes",
      link: "https://music.apple.com/us/album/dont-cry-single/1738798141?uo=4&app=itunes&at=1001lry3&ct=dashboard",
    },
    {
      id: 3,
      icon: <PandoraIcon />,
      label: "Pandora",
      link: "https://www.pandora.com/artist/blake-reimer/dont-cry/ALPhrtbP2r2brc2",
    },
    {
      id: 4,
      icon: <IHeartRadioIcon />,
      label: "iHeart Radio",
      link: "https://www.iheart.com/artist/blake-reimer-42725327/albums/dont-cry-263148168/",
    },
    {
      id: 5,
      icon: <TikTokIcon />,
      label: "Tik Tok",
      link: "https://www.tiktok.com/",
    },
  ];

  const navToURL = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex justify-center items-center h-full sm:h-screen w-screen flex-col animate-[fade-in_0.5s_ease-in-out_forwards] p-12">
      <div className="flex justify-center items-center flex-col mb-4 sm:mb-16">
        <Image
          src="/cover.png"
          alt="Album Cover"
          width={300}
          height={300}
          style={{ borderRadius: 16, marginBottom: 32 }}
        />
        <h2 className="text-white font-semibold text-3xl mb-4 sm:mb-0">
          Don't Cry
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full">
        {streamingPlatforms.map(({ id, icon, link, label }) => (
          <button
            key={id}
            onClick={() => navToURL(link)}
            className="flex flex-row mx-2 items-center justify-between hover:none sm:hover:scale-110 transition duration-300 bg-zinc-800 sm:bg-transparent w-full sm:w-16 mb-4 sm:mb-0 rounded-md sm:rounded-none p-1"
          >
            <div className="flex flex-row items-center">
              {icon}
              <div className="block sm:hidden">
                <p className="text-white ml-4">{label}</p>
              </div>
            </div>
            <div className="block sm:hidden">
              <ChevronRight color="white" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
