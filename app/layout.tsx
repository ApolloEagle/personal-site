import "../global.css";
import { Metadata } from "next";
import { roboto_serif } from "./assets/fonts";

export const metadata: Metadata = {
  title: {
    default: "Blake Reimer",
    template: "%s | Blake Reimer",
  },
  description: "Senior Mobile Engineer.",
  openGraph: {
    title: "Blake Reimer",
    description: "Senior Mobile Engineer.",
    url: "https://blakereimer.com",
    siteName: "Blake Reimer",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto_serif.className}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
