import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const navMenu = [
  { label: "home", href: "#" },
  { label: "about", href: "#" },
  { label: "contact", href: "#" },
  { label: "privacy", href: "#" },
];

export default function Nav1() {
  const [activeHover, setActiveHover] = useState("");
  const [activeClick, setActiveClick] = useState("home");

  return (
    <section>
      <div className="container">
        <div className="flex items-center h-16">
          {navMenu.map((item, i) => (
            <Link to={item.href} key={i}>
              <motion.div
                className="relative px-4 py-2 rounded cursor-pointer"
                onClick={() => setActiveClick(item.label)}
                onMouseEnter={() => setActiveHover(item.label)}
                onMouseLeave={() => setActiveHover("")} // Optional: Reset background when hover leaves
              >
                <div>{item.label}</div>
                <AnimatePresence>
                  {activeHover === item.label && (
                    <motion.div
                      layoutId="activeBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="-z-10 bg-primary absolute inset-0"
                    />
                  )}
                </AnimatePresence>
                {activeClick === item.label && (
                  <motion.div layoutId="activeLine" className="h-1 absolute bottom-0 left-0 right-0 bg-white" />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
