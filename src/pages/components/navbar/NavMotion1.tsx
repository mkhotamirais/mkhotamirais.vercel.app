import { FaBars } from "react-icons/fa6";
import { navMenu } from "./navMenu";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function NavMotion1() {
  const [activeClick, setActiveClick] = useState<number>(0);
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <header className="h-16 my-2 border-y">
      <div className="container flex items-center justify-between h-full">
        <div>Logo NavMotion1</div>
        {/* desktop nav */}
        <div className="hidden lg:flex">
          <nav className="flex">
            {navMenu.map((item, i) => (
              <div
                onMouseEnter={() => setActiveHover(i)}
                onMouseLeave={() => setActiveHover(null)}
                onClick={() => setActiveClick(i)}
                key={i}
                className="relative rounded-lg"
              >
                <a href="#" className="relative z-10 px-4 h-10 flex items-center">
                  {item.label}
                </a>
                {activeClick === i && (
                  <motion.div
                    layoutId="activeClick"
                    className="absolute left-0 right-0 h-[0.1rem] bottom-0 bg-gray-500"
                  />
                )}
                <AnimatePresence>
                  {activeHover === i && (
                    <motion.div
                      layoutId="activeBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-[rgba(0,0,0,.1)] h-full rounded-lg"
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
        {/* mobile nav */}
        <div className="flex lg:hidden">
          <button type="button" title="nav btn">
            <FaBars className="text-2xl" />
          </button>
          <nav className="hidden">moile nav</nav>
        </div>
      </div>
    </header>
  );
}
