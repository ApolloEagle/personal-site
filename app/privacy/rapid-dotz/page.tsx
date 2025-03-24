import { ReactNode } from "react";
import { Text, AppleStoreIcon, GooglePlayIcon } from "../../components";
import Image from "next/image";

interface Social {
  label: string;
  icon: ReactNode;
  link: string;
}

export default function RapidDots() {
  const socials: Social[] = [
    {
      label: "Apple's Privacy Policy",
      icon: <AppleStoreIcon />,
      link: "https://www.apple.com/legal/privacy/",
    },
    {
      label: "Google Play's Terms of Use",
      icon: <GooglePlayIcon />,
      link: "https://play.google.com/about/play-terms/",
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
                  src="/rapid-dotz.png"
                  height={400}
                  width={400}
                  alt="Picture of the author"
                  className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 mb-8"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <Text text="Privacy Policy." title />
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I do not collect nor share any kind of data.{" "}
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/rapid-dotz/id1669643824"
                  className="font-semibold hover:text-teal-500 dark:text-zinc-300 text-zinc-800"
                >
                  Rapid Dotz
                </a>{" "}
                does not collect or store any from of private data from the
                user. Apple and Google might collect data while using these
                games. More details about Apple&apos;s Privacy Policy and Google
                Play&apos;s Terms of Use below.
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
  title: "Privacy - Blake Reimer",
};
