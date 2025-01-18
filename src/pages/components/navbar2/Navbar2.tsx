import { useState } from "react";
import NavA from "./NavA";
import NavAAnim1 from "./NavAAnim1";
import NavAAnim2 from "./NavAAnim2";
import NavAAnim3 from "./NavAAnim3";
import NavAAnim4 from "./NavAAnim4";
import NavB from "./NavB";
import NavBAnim1 from "./NavBAnim1";

const headerMenu = [
  { title: "nav a", content: NavA },
  { title: "nav a anim 1", content: NavAAnim1 },
  { title: "nav a anim 2", content: NavAAnim2 },
  { title: "nav a anim 3", content: NavAAnim3 },
  { title: "nav a anim 4", content: NavAAnim4 },
  { title: "nav b", content: NavB },
  { title: "nav b animate 1", content: NavBAnim1 },
];

export default function Navbar2() {
  const [active, setActive] = useState(0);
  return (
    <>
      {headerMenu.map((item, index) => (
        <div key={index}>{index === active && <item.content />}</div>
      ))}
      <div className="flex gap-3 mt-[50vh] justify-center border rounded p-4 flex-wrap">
        {headerMenu.map((item, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setActive(index)}
            className={`${active === index ? "bg-gray-200" : "bg-white"}`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
}
