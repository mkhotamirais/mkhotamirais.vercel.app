import { useState } from "react";
import { FaBars, FaChevronDown, FaXmark } from "react-icons/fa6";
import { navMenu } from "./navMenu";

export default function Nav3() {
  const [openNav, setOpenNav] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  return (
    <div>
      <header className="h-16 border-y my-2">
        <div className="container h-full flex items-center justify-between">
          <div>Logo Nav3</div>
          {/* desktop nav */}
          <div className="hidden lg:flex">
            <nav className="flex">
              {navMenu.map((item, i) => (
                <div key={i} className="group relative">
                  <a href="#" className="px-4 h-10 flex gap-2 items-center">
                    <span>{item.label}</span>
                    {item.subMenu.length > 0 && (
                      <FaChevronDown size={10} className="group-hover:rotate-180 transition-all" />
                    )}
                  </a>
                  {item.subMenu.length > 0 && (
                    <div
                      className={`z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 pt-2 absolute top-full min-w-full left-0 w-auto transition-all`}
                    >
                      <div className="flex flex-col border bg-white z-50 rounded-lg">
                        {item.subMenu.map((sub, i) => (
                          <a key={i} href="#" className="px-4 hover:underline min-w-max py-2">
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          {/* mobile nav */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setOpenNav((prev) => !prev)}
              className={`${openNav ? "rotate-180" : ""} transition text-2xl`}
            >
              {openNav ? <FaXmark /> : <FaBars />}
            </button>
            <div
              onClick={() => setOpenNav(false)}
              className={`${
                openNav ? "visible opacity-100" : "invisible opacity-0"
              } fixed inset-0 bg-[rgba(0,0,0,.05)] border-r z-50 transition-all`}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`${openNav ? "translate-x-0" : "-translate-x-full"} bg-white w-[80%] h-full transition-all`}
              >
                <nav>
                  {navMenu.map((item, i) => (
                    <div key={i} onClick={() => setOpenSubMenu((prev) => (prev === i ? null : i))} className="relative">
                      <a href="#" className="px-4 h-10 flex gap-2 items-center justify-between">
                        <span>{item.label}</span>
                        {item.subMenu.length > 0 && (
                          <FaChevronDown size={10} className="group-hover:rotate-180 transition-all" />
                        )}
                      </a>
                      {item.subMenu.length > 0 && (
                        <div
                          className={`mobile-nav-3 ${
                            openSubMenu === i ? "active" : "h-0"
                          } h-0 overflow-hidden transition-all`}
                        >
                          <div className="flex flex-col">
                            {item.subMenu.map((sub, i) => (
                              <a key={i} href="#" className="pl-6 px-4 hover:underline min-w-max py-2">
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
