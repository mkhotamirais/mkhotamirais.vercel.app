const navbarMenu = ["Home", "Shop", "About Us", "Contact"];
import { useState } from "react";
import { FaBars, FaChevronLeft, FaChevronRight, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

export default function Landing1() {
  const [nav, setNav] = useState(false);
  return (
    <main
      onClick={() => setNav(false)}
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('/images/pex-nature3.jpg') center/cover no-repeat",
      }}
      className="font-lora w-full min-h-screen text-white"
    >
      <header className="h-16 border-b md:border-none flex items-center justify-between px-4 md:px-24">
        <a href="#" className="font-ubuntu uppercase text-2xl">
          logo
        </a>
        <NavBtn nav={nav} setNav={setNav} />
        <NavSmUp />
        <NavSmDown nav={nav} />
        <NavSearch className={"hidden md:flex"} />
      </header>
      <section className="flex flex-col md:items-start text-center md:text-left gap-4 items-center px-4 md:px-24 h-[calc(100vh-4rem)]">
        <h1 className="font-ubuntu text-6xl mt-16 md:mt-32">Hello World</h1>
        <p className="text-xl">landing page for carousel background and search navbar with two viewport</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="z-10 relative group hover:after:scale-100 after:scale-0 bg-cyan-500 bg-opacity-70 p-2 w-32 rounded-full after:absolute after:inset-0 after:bg-cyan-600 after:rounded-full after:transition-all duration-150 after:-z-10">
            Visit
          </button>
          <button className="border hover:border-cyan-600 border-cyan-500 rounded-full w-32 py-2 transition-all duration-150">
            Cta
          </button>
          <div className="flex items-center flex-col gap-8 absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex gap-2">
              <button
                type="button"
                title="button"
                className="p-4 rounded-full bg-black bg-opacity-10 hover:bg-opacity-40"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                title="button"
                className="p-4 rounded-full bg-black bg-opacity-10 hover:bg-opacity-40"
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="flex gap-2 md:gap-5">
              <div className="bg-white h-[0.2rem] rounded-full w-10" />
              <div className="bg-white bg-opacity-50 h-[0.2rem] rounded-full w-10" />
              <div className="bg-white bg-opacity-50 h-[0.2rem] rounded-full w-10" />
              <div className="bg-white bg-opacity-50 h-[0.2rem] rounded-full w-10" />
              <div className="bg-white bg-opacity-50 h-[0.2rem] rounded-full w-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// className={`relative hover:outine hover:after:scale-100 after:scale-0 after:origin-left after:bg-cyan-500 after:absolute after:w-full after:h-[0.1rem] after:bottom-0 after:left-0 after:transition-all`}

function NavContent({ className }: { className: string }) {
  return navbarMenu.map((item) => (
    <a href="#" key={item} className={`${className} hover:text-cyan-500 transition-all duration-150`}>
      {item}
    </a>
  ));
}

function NavBtn({ nav, setNav }: { nav: boolean; setNav: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setNav((p) => !p);
      }}
      className={`${nav ? "rotate-180" : ""} block md:hidden p-1 text-xl transition-all duration-150`}
    >
      {nav ? <FaXmark /> : <FaBars />}
    </button>
  );
}

function NavSmUp() {
  return (
    <nav className="hidden md:block min-w-max">
      <NavContent className={"px-3 lg:px-6"} />
    </nav>
  );
}

function NavSearch({ className }: { className: string }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={`${className} w-full md:w-auto flex`}>
      <input
        type="search"
        className="bg-inherit border-b w-full outline-none p-2 px-0 placeholder:text-gray-200"
        placeholder="Search here..."
        onClick={(e) => e.stopPropagation()}
      />
      <button type="submit" title="button" className="w-12 flex items-center justify-center focus:border">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}

function NavSmDown({ nav }: { nav: boolean }) {
  return (
    <nav
      className={`${
        nav ? "scale-y-100" : "scale-y-0"
      } origin-top flex md:hidden absolute top-16 backdrop-blur-sm inset-x-0 rounded-b-lg p-4 flex-col transition-all duration-150`}
    >
      <NavSearch className={"mb-3"} />
      <NavContent className="py-3" />
    </nav>
  );
}
