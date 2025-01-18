import { FaBars, FaXmark } from "react-icons/fa6";
import { navMenu } from "./navMenu";
import { useState } from "react";

export default function Nav0() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <header className="h-auto border-y">
        <div className="container">
          <div className="flex h-16 justify-between items-center">
            <div>Logo Nav0</div>
            {/* desktop nav */}
            <div className="hidden lg:flex">
              <nav className="flex">
                {navMenu.map((item, i) => (
                  <a key={i} href="#" className="px-4 hover:underline">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* mbile nav btn */}
            <button
              type="button"
              onClick={() => setOpenNav(!openNav)}
              title="nav btn"
              className={`${openNav ? "rotate-180" : ""} flex lg:hidden text-2xl transition-all`}
            >
              {openNav ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {/* mobile nav */}
          <div className={`mobile-nav-0 ${openNav ? "active" : "h-0"} flex lg:hidden overflow-hidden transition-all`}>
            <nav className="flex flex-col">
              {navMenu.map((item, i) => (
                <a key={i} href="#" className="p-2 hover:bg-gray-100 transition-all">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
