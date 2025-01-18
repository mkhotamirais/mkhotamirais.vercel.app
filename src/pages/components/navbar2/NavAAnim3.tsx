"use client";

import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { sampelNavMenu } from "./sampelNav";

export default function NavAAnim3() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const controls = useAnimation();
  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHovered(index);
    controls.start({
      left: e.currentTarget.offsetLeft,
      width: e.currentTarget.offsetWidth,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const handleMouseLeave = () => {
    setHovered(null);
    controls.start({
      width: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

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
            <motion.div
              layout
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={handleMouseLeave}
              key={index}
              className="relative w-full"
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
              {/* <div
                className={`z-0 absolute bottom-0 w-full rounded ${
                  hovered === index ? "min-h-full" : "min-h-0"
                } bg-gray-300 transition-all duration-500`}
              /> */}
              {/* untuk hover */}
              <div
                className={`z-0 absolute bottom-0 w-full rounded ${
                  hovered === index ? "min-h-full" : "min-h-0"
                } bg-gray-300 transition-all duration-500`}
              />
              {/* untuk active */}
              {active === index && (
                <motion.div
                  layoutId="active"
                  className="z-10 absolute w-1/2 left-1/4 mx-auto bottom-0 h-1 rounded-full bg-gray-800"
                />
              )}
            </motion.div>
          ))}
          {/* untuk hover lain */}
          <motion.div
            className="z-10 absolute w-1/2 left-1/4 mx-auto top-0 h-1 rounded-full bg-gray-800"
            animate={controls}
            initial={{ width: 0 }}
          />
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
