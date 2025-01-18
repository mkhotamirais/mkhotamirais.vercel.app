"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { sampelNavMenuWithDrop } from "./sampelNav";

export default function NavBAnim1() {
  const [nav, setNav] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

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
            <div
              onMouseEnter={() => setExpanded(index)}
              onMouseLeave={() => setExpanded(null)}
              key={index}
              className="group relative h-auto"
            >
              <a href="#" className="block border sm:border-none rounded p-2 group-hover:underline">
                {item.label}
                {item.drop.length > 0 && " v "}
              </a>
              <AnimatePresence>
                {item.drop.length > 0 && expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative sm:absolute overflow-hidden border"
                  >
                    <div className="flex flex-col">
                      {item.drop.map((dropItem, dropIndex) => (
                        <div key={dropIndex} className="">
                          <a href="#" className="border block p-2 pl-4 sm:pl-2 hover:underline">
                            {dropItem.label}
                          </a>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
