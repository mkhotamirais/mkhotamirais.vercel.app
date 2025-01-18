"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { sampelNavMenuWithDrop } from "./sampelNav";

export default function NavB() {
  const [nav, setNav] = useState(false);
  return (
    <header className="h-16 border-b">
      <div className="flex items-center justify-between h-full px-3 md:px-12 lg:px-24">
        <a href="#">LOGO</a>
        <nav
          className={`${
            nav ? "scale-y-100" : "scale-y-0"
          } bg-white sm:bg-inherit dark:sm:bg-inherit dark:bg-gray-900 shadow sm:shadow-none origin-top sm:scale-y-100 flex gap-1 border-b sm:border-none fixed top-16 left-0 right-0 sm:static flex-col sm:flex-row p-3 sm:p-0 transition`}
        >
          {sampelNavMenuWithDrop.map((item, index) => (
            <div key={index} className="group">
              <a href="#" className="block border sm:border-none rounded p-2 group-hover:underline">
                {item.label}
                {item.drop.length > 0 && " v "}
              </a>
              {item.drop.length > 0 && (
                <div className="hidden group-hover:flex relative sm:absolute flex-col overflow-hidden border">
                  {item.drop.map((dropItem, dropIndex) => (
                    <div key={dropIndex} className="">
                      <a href="#" className="border block p-2 pl-4 sm:pl-2 hover:underline">
                        {dropItem.label}
                      </a>
                    </div>
                  ))}
                </div>
              )}
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
