import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navbarMenu = ["Home", "Shop", "About Us", "Contact"];

export default function Landing2() {
  const [nav, setNav] = useState(false);
  return (
    <main
      id="lp2"
      onClick={() => setNav(false)}
      className="text-white font-bitter h-screen min-h-screen w-full relative"
    >
      <video muted autoPlay loop className="absolute size-full object-cover object-center">
        <source src="/images/pix-nature2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <header className="relative h-16 border-b sm:border-none w-full flex justify-between items-center px-4 md:px-24">
        <a href="#" className="font-montserrat uppercase font-semibold text-xl">
          Logo
        </a>
        <NavBtn nav={nav} setNav={setNav} />
        <NavLgUp />
        <NavSmUp nav={nav} />
        <NavSmDown nav={nav} />
      </header>
      <section className="relative h-[calc(100vh-4rem)] flex flex-col gap-4 items-start sm:items-center px-4 md:px-24">
        <h1 className="font-montserrat text-6xl md:text-7xl mt-24">Hello World</h1>
        <p className="text-xl md:text-2xl text-left sm:text-center px-0 sm:px-12">
          A landing page with a background video and three types of viewport navigation bars.
        </p>
        <button className="border mt-8 rounded-full p-2 px-6 hover:scale-105 active:scale-95 bg-cyan-500 bg-opacity-50 text-white transition-all duration-150">
          Call To Action
        </button>
      </section>
    </main>
  );
}

function NavContent({ className }: { className: string }) {
  return navbarMenu.map((item) => (
    <a href="#" key={item} className={`${className} hover:text-cyan-500 transition-all duration-150`}>
      {item}
    </a>
  ));
}

function NavLgUp() {
  return (
    <nav className="hidden lg:flex gap-6 relative">
      <NavContent
        className={`relative hover:outine hover:after:scale-100 after:scale-0 after:origin-left after:bg-cyan-500 after:absolute after:w-full after:h-[0.1rem] after:bottom-0 after:left-0 after:transition-all`}
      />
    </nav>
  );
}

function NavBtn({ nav, setNav }: { nav: boolean; setNav: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setNav((p) => !p);
      }}
      className={`${nav ? "-rotate-180" : ""} block lg:hidden p-1 text-xl transition-all duration-150`}
    >
      {nav ? <FaXmark /> : <FaBars />}
    </button>
  );
}

function NavSmUp({ nav }: { nav: boolean }) {
  return (
    <nav
      className={`${
        nav ? "scale-100" : "scale-0"
      } origin-top-right z-10 backdrop-blur hidden sm:flex lg:hidden absolute top-14 right-4 md:right-24 border p-6 px-8 rounded-2xl flex-col transition-all duration-150`}
    >
      <NavContent className={"py-3"} />
    </nav>
  );
}

function NavSmDown({ nav }: { nav: boolean }) {
  return (
    <div
      className={`${
        nav ? "scale-y-100" : "scale-y-0"
      } origin-top z-10 flex sm:hidden flex-col absolute top-16 backdrop-blur border-b py-5 inset-x-0 p-3 transition-all duration-150`}
    >
      <NavContent className={"py-3"} />
    </div>
  );
}
