"use client";
import {
  Socials,
  Text,
  ContactForm,
  WorkList,
  ProfilePicture,
  CameraRoll,
} from "./components";
import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 pb-8 overflow-x-hidden">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <div
              className={`${pathname !== "/" ? "hidden md:block" : "block"}`}
            >
              <ProfilePicture size={16} />
            </div>
            <div className="mt-8">
              <Text text="Senior Software Engineer." title />
            </div>
            <Text text="My name is Blake and I am a software engineer based out of Colorado. I build cutting-edge web and mobile applications." />
            <Socials />
          </div>
          <CameraRoll />
          <ContactForm />
          <WorkList />
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
