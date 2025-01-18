import { useEffect, useState } from "react";
import { FaBlog, FaHouse, FaPhone, FaUser } from "react-icons/fa6";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useInView } from "react-intersection-observer";

const floatNavMenus = [
  { label: "home", icon: <FaHouse /> },
  { label: "about", icon: <FaUser /> },
  { label: "contact", icon: <FaPhone /> },
  { label: "blog", icon: <FaBlog /> },
];

const useSectionInView = (setActive: (label: string) => void) => {
  const options = {
    threshold: 0.5,
  };

  const [homeRef, homeInView] = useInView(options);
  const [aboutRef, aboutInView] = useInView(options);
  const [contactRef, contactInView] = useInView(options);
  const [blogRef, blogInView] = useInView(options);

  useEffect(() => {
    if (homeInView) setActive("home");
    else if (aboutInView) setActive("about");
    else if (contactInView) setActive("contact");
    else if (blogInView) setActive("blog");
  }, [homeInView, aboutInView, contactInView, blogInView, setActive]);

  return [homeRef, aboutRef, contactRef, blogRef];
};

export default function FloatNav3() {
  const [active, setActive] = useState("home");
  const [homeRef, aboutRef, contactRef, blogRef] = useSectionInView(setActive);

  // const handleClick = (label) => {
  //   setActive(label);
  // };

  const handleClick = (label: string) => {
    const element = document.getElementById(label);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setActive(label);
      }, 500); // Adjust the delay based on the scroll duration
    }
  };

  return (
    <section className="min-h-screen">
      <motion.nav className="border left-1/2 -translate-x-1/2 fixed top-5 rounded-full p-2 shadow-lg">
        <motion.div className="relative flex gap-1 bg-white">
          {floatNavMenus.map((item) => (
            <div className="relative" key={item.label}>
              <Link
                onClick={() => handleClick(item.label)}
                to={`#${item.label}`}
                className={`relative z-10 hover:text-cyan-500 capitalize rounded-full p-1 px-2`}
              >
                {item?.label}
              </Link>
              {active === item.label && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-full bg-gray-200"
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </motion.nav>
      <div id="home" className="min-h-[90vh] border rounded-xl mx-2 text-center mt-20 scroll-mt-0" ref={homeRef}>
        <h2 className="uppercase text-4xl">home</h2>
      </div>
      <div id="about" className="min-h-[90vh] border rounded-xl mt-20 mx-2 text-center scroll-mt-20" ref={aboutRef}>
        <h2 className="uppercase text-4xl">about</h2>
      </div>
      <div id="contact" className="min-h-[90vh] border rounded-xl mt-20 mx-2 text-center scroll-mt-20" ref={contactRef}>
        <h2 className="uppercase text-4xl">contact</h2>
      </div>
      <div id="blog" className="min-h-[90vh] border rounded-xl mt-20 mx-2 text-center scroll-mt-20" ref={blogRef}>
        <h2 className="uppercase text-4xl">blog</h2>
      </div>
    </section>
  );
}
