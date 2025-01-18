"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { sampelNavMenu } from "./sampelNav";

export default function NavA() {
  const [nav, setNav] = useState(false);
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
            <div key={index} className="hover:underline">
              <a href="#" className="block border sm:border-none rounded p-2">
                {item.label}
              </a>
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
