import { FaBlog, FaHouse, FaPhone, FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const flaotNavMenus = [
  { label: "home", icon: <FaHouse /> },
  { label: "about", icon: <FaUser /> },
  { label: "contact", icon: <FaPhone /> },
  { label: "blog", icon: <FaBlog /> },
];

export default function FloatNav1() {
  const scrollDirection = useScrollDirection();
  return (
    <section className="min-h-[200vh]">
      <motion.nav
        className="border left-1/2 fixed top-5 rounded-full p-3 shadow-xl"
        initial={{ x: "-50%", y: 0 }}
        animate={{ x: "-50%", y: scrollDirection === "up" ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex capitalize gap-3">
          {flaotNavMenus.map((item) => (
            <button key={item.label}>{item.label}</button>
          ))}
        </div>
      </motion.nav>
      <div className="flex items-center w-full justify-center h-screen text-center px-3 fixed top-0">
        Navbar hilang ketika scroll ke bawah dan muncuk ketika scroll ke atas
      </div>
    </section>
  );
}

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "up" : "down";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection); // Add event listener

    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // Clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
};
