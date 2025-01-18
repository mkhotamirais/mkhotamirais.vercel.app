"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { sampelNavMenu } from "./sampelNav";

export default function NavAAnim2() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <header className="h-16 border-b">
      <div className="flex items-center justify-between h-full px-3 md:px-12 lg:px-24">
        <a href="#">LOGO</a>
        <nav
          className={`${
            nav ? "scale-y-100" : "scale-y-0"
          } origin-top sm:scale-y-100 flex gap-1 border-b sm:border-none fixed top-16 left-0 right-0 sm:static flex-col sm:flex-row p-3 sm:p-0 transition`}
        >
          {sampelNavMenu.map((item, index) => (
            <div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              key={index}
              className="relative"
            >
              <a
                href="#"
                onClick={() => setActive(index)}
                className={`${
                  active === index ? "bg-gray-200" : "bg-none"
                } z-10 relative block border sm:border-none rounded p-2 hover:bg-gray-200/50 transition-all duration-150`}
              >
                {item.label}
              </a>
              {/* <div className="z-0 absolute top-0 left-0 h-full w-full bg-gray-300" /> */}
              {/* {hovered === index && (
                <div className="z-10 absolute top-0 left-0 h-full w-full bg-gray-300 transition-all" />
              )} */}
              <div
                className={`z-0 absolute bottom-0 w-full rounded ${
                  hovered === index ? "min-h-full" : "min-h-0"
                } bg-gray-300 transition-all duration-500`}
              />
            </div>
          ))}
          <Cta className="block sm:hidden" />
        </nav>
        <Cta className="hidden sm:block" />
        <button
          type="button"
          onClick={() => setNav((prev) => !prev)}
          className={`block sm:hidden border p-2 text-xl transition-all`}
          aria-label="button"
        >
          <div className={`${nav ? "rotate-180" : ""} transition-all`}>{nav ? <FaXmark /> : <FaBars />}</div>
        </button>{" "}
      </div>
    </header>
  );
}

function Cta({ className }: { className: string }) {
  return (
    <button type="button" className={`${className} border rounded-xl p-2`}>
      Cta
    </button>
  );
}
