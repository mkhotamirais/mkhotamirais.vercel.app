import { useState } from "react";
import { navMenu } from "./navMenu";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Nav1Up() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative h-16 border-y my-2 z-50">
      <div className="container h-full flex justify-between items-center">
        <div>Logo Nav1</div>
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
          <nav>
            {navMenu.map((item, i) => (
              <a href="#" key={i} className="px-4 hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
