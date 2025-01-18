import { useEffect, useState } from "react";
import { FaBlog, FaHouse, FaPhone, FaUser } from "react-icons/fa6";
import { motion } from "motion/react";
import { Link } from "react-router";

const flaotNavMenus = [
  { label: "home", icon: <FaHouse /> },
  { label: "about", icon: <FaUser /> },
  { label: "contact", icon: <FaPhone /> },
  { label: "blog", icon: <FaBlog /> },
];

export default function FloatNav2() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState<number | null>(null);
  const [active, setActive] = useState("home");

  const handleClick = (label: string) => {
    setActive(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    const handleTimeout = setTimeout(() => {
      if (lastScrollY > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }, 2000);

    if (isScrolling) {
      setVisible(true);
      clearTimeout(handleTimeout);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(handleTimeout);
    };
  }, [lastScrollY, isScrolling]);

  return (
    <section className="min-h-screen">
      <motion.nav
        initial={{ x: "-50%", y: 0 }}
        animate={{ x: "-50%", y: visible ? 0 : -100 }}
        whileHover={{ y: 0 }}
        className="border left-1/2 fixed top-5 rounded-full p-2 shadow-lg"
      >
        <motion.div className="relative flex gap-1 bg-white">
          {flaotNavMenus.map((item) => (
            <Link
              onClick={() => handleClick(item.label)}
              to={`#${item.label}`}
              key={item.label}
              className={`${
                active === item.label ? "bg-gray-200" : ""
              } relative z-10 hover:text-cyan-500 capitalize rounded-full p-1 px-2`}
            >
              {item?.label}
            </Link>
          ))}
        </motion.div>
      </motion.nav>
      <div id="home" className="min-h-[90vh] border rounded-xl mx-2 text-center mt-20 scroll-mt-0">
        <h2 className="uppercase text-4xl">home</h2>
      </div>
      <div id="about" className="min-h-[90vh] border rounded-xl mt-20 mx-2 text-center scroll-mt-20">
        <h2 className="uppercase text-4xl">about</h2>
      </div>
      <div id="contact" className="min-h-[90vh] border rounded-xl mt-20 mx-2 text-center scroll-mt-20">
        <h2 className="uppercase text-4xl">contact</h2>
      </div>
      <div id="blog" className="min-h-[90vh] border rounded-xl mt-20 mx-2 text-center scroll-mt-20">
        <h2 className="uppercase text-4xl">blog</h2>
      </div>
    </section>
  );
}
