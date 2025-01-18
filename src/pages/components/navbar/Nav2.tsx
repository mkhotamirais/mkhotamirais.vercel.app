import { useState } from "react";
import { navMenu } from "./navMenu";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Nav2() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <header className="relative h-16 border-y my-2 z-40">
      <div className="container h-full flex justify-between items-center">
        <div>Logo Nav2</div>
        {/* mobile nav */}
        <div className="flex lg:hidden z-50">
          <button
            onClick={() => setOpen((prev) => !prev)}
            type="button"
            title="button"
            className={`${open ? "rotate-180" : ""} transition text-2xl`}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
          <div
            className={`${
              open ? "scale-y-100" : "scale-y-0"
            } transition border-b absolute top-full left-0 right-0 bg-white origin-top z-10`}
          >
            <nav className="flex flex-col">
              {navMenu.map((item, i) => (
                <a href="#" key={i} className="px-4 py-2 hover:bg-gray-100 transition">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        {/* desktop nav */}
        <div className="hidden lg:flex">
          <nav className="flex">
            {navMenu.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded overflow-hidden"
              >
                <a href="#" key={i} className="relative z-20 px-4 h-10 flex items-center">
                  {item.label}
                </a>
                <div
                  className={`${
                    hovered === i ? "scale-100" : "scale-0"
                  } transition-all origin-top-right z-10 absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.05)] h-full`}
                />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
