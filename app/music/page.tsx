import { ReactNode } from "react";
import {
  Text,
  GitHub,
  LinkedIn,
  Email,
  SpotifyIcon,
  AppleMusicIcon,
  PandoraIcon,
  IHeartRadioIcon,
  TikTokIcon,
  SoundCloudIcon,
} from "../components";
import Image from "next/image";

interface Social {
  label: string;
  icon: ReactNode;
  link: string;
}

export default function Music() {
  const socials: Social[] = [
    {
      label: "Listen on Spotify",
      icon: <SpotifyIcon />,
      link: "https://open.spotify.com/artist/2gBefV7HeOXQti7itVXKBz",
    },
    {
      label: "Listen on Apple Music",
      icon: <AppleMusicIcon />,
      link: "https://music.apple.com/us/artist/blake-reimer/1738791116",
    },
    {
      label: "Listen on Pandora",
      icon: <PandoraIcon />,
      link: "https://www.pandora.com/artist/blake-reimer/ARwrwtdXrf4K2n6",
    },
    {
      label: "Listen on iHeart Radio",
      icon: <IHeartRadioIcon />,
      link: "https://www.iheart.com/artist/blake-reimer-42725327/",
    },
    {
      label: "Listen on TikTok",
      icon: <TikTokIcon />,
      link: "https://www.tiktok.com/t/ZPRTGg4oj/",
    },
    {
      label: "Listen on SoundCloud",
      icon: <SoundCloudIcon />,
      link: "https://soundcloud.com/blake-reimer-749464291",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 pb-8 overflow-x-hidden ">
      <div className="relative px-4 sm:px-8 lg:px-12 mt-2 sm:mt-24">
        <div className="mx-auto max-w-2xl lg:max-w-5xl ">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 ">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  priority
                  src="/test.jpeg"
                  height={400}
                  width={400}
                  alt="Picture of the author"
                  className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 mb-8"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <Text text="My Music." title />
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                After listening to{" "}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Them_Crooked_Vultures"
                  className="font-semibold hover:text-teal-500 dark:text-zinc-300 text-zinc-800"
                >
                  Them Crooked Vultures,{" "}
                </a>
                for the first time in 2016, I became inspired to pick up my
                first guitar and start learning how to play. Since then I have
                become a songwriter, vocalist, and multi-instrumentalist. I have
                enjoyed playing every instrument and singing each and every
                note. Now I look forward to taking my music to the stage and
                sharing my love with others 🤘
              </p>
            </div>
            <div className="lg:pl-20">
              <ul role="list" className="flex flex-col gap-4">
                {socials.map(({ label, link, icon }) => (
                  <a
                    key={label}
                    aria-label={label}
                    href={link}
                    target="_blank"
                    className="group flex flex-row gap-4 "
                  >
                    <div key={label} className="-m-1 p-1 hover:fill-teal-500">
                      {icon}
                    </div>
                    <span className="group-hover:text-teal-500">{label}</span>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Music - Blake Reimer",
};
