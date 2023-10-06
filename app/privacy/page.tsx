import { Card } from "../components/card";
import { Navigation } from "../components/nav";

export default function Projects() {
  return (
    <div className="bg-gradient-to-t from-blue-500 to-bg-black/20 pb-16 min-h-screen">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 mt-10 sm:mt-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Privacy Policy
          </h2>
          <p className="mt-4 text-zinc-400">
            We do not not collect or store any form of private data from the
            user. Apple might collect data while using Formis. More details
            about that is found in the Privacy Policies by Apple:
          </p>
          <p className="my-2 text-center underline text-zinc-400 hover:text-zinc-200">
            <a href="https://www.apple.com/legal/privacy/">
              Apple's Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
