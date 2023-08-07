"use client";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const navigation = [
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="flex flex-row-reverse items-center justify-between py-6 px-6 sm:px-12 w-screen">
          <div className="hidden sm:flex justify-between gap-8">
            {navigation.map((nav, idx) => (
              <Link
                key={idx}
                href={nav.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex sm:hidden">
            <MoreHorizontal className="w-6 h-6" />
          </div>
          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <img src="/favicon.png" className="w-12 h-12 rounded-md" />
          </Link>
        </div>
      </div>
    </header>
  );
};
