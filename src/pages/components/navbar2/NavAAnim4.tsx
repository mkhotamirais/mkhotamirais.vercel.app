"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { sampelNavMenu } from "./sampelNav";

export default function NavAAnim4() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHovered(index);
    const offset = isSmallViewport
      ? { top: e.currentTarget.offsetTop, height: e.currentTarget.offsetHeight }
      : { left: e.currentTarget.offsetLeft, width: e.currentTarget.offsetWidth };
    controls.start({
      ...offset,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const handleMouseLeave = () => {
    setHovered(null);
    const reset = isSmallViewport ? { height: 0 } : { width: 0 };
    controls.start({
      ...reset,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSmallViewport(true);
      } else {
        setIsSmallViewport(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="h-16 border-b">
      <div className="flex items-center justify-between h-full px-3 md:px-12 lg:px-24">
        <a href="#">LOGO</a>
        <nav
          ref={menuRef}
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
              <div
                className={`z-0 absolute ${isSmallViewport ? "left-0 w-full" : "bottom-0 h-1"} ${
                  hovered === index ? (isSmallViewport ? "h-full" : "w-full") : isSmallViewport ? "h-0" : "w-0"
                } bg-gray-300 transition-all duration-500`}
              />
              {active === index && (
                <motion.div
                  layoutId="active"
                  className={`z-10 absolute ${
                    isSmallViewport ? "left-0 w-full bottom-0 h-1" : "bottom-0 h-1"
                  } rounded-full bg-gray-800`}
                />
              )}
            </motion.div>
          ))}
          <motion.div
            className={`z-10 absolute ${isSmallViewport ? "left-0 w-full" : "bottom-0 h-1"} rounded-full bg-gray-800`}
            animate={controls}
            initial={isSmallViewport ? { height: 0 } : { width: 0 }}
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
        </button>
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
