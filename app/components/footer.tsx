import { routes } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-8 flex-none">
      <div className="mx-auto w-full">
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <div className="relative sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {routes.map(({ title, route }) => (
                    <a
                      key={title}
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href={route}
                    >
                      {title}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  © 2024 Blake Reimer. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
