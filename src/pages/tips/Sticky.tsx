import { useState } from "react";

const stickyMenu = [
  { label: "Sticky1", content: <Sticky1 /> },
  { label: "Sticky2", content: <Sticky2 /> },
  { label: "Sticky3", content: <Sticky3 /> },
  { label: "Sticky4", content: <Sticky4 /> },
];

export default function Sticky() {
  const [content, setContent] = useState(<Sticky1 />);
  const [active, setAcitve] = useState(0);
  return (
    <div className="min-h-[120vh] w-full flex flex-col justify-between">
      {content}
      <div className="h-[100vh] w-full bg-gray-400 flex items-center justify-center px-3 border-t text-white">
        Footer
      </div>
      <div
        className={`z-50 bg-gray-500 bg-opacity-50 text-white p-3 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-3`}
      >
        {stickyMenu.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setAcitve(i);
              setContent(item.content);
              scrollTo(0, 0);
            }}
            className={`${active === i ? "text-cyan-300" : "text-white"} hover:text-cyan-300`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Sticky1() {
  return (
    <header>
      <nav className="sticky top-16 bg-gray-400 text-white text-center p-5">Header Sticky1</nav>
      <section className="w-full h-[50vh] bg-gray-200 flex items-center justify-center">Section</section>
    </header>
  );
}

function Sticky2() {
  return (
    <header>
      <div>
        <nav className="sticky top-16 bg-gray-400 text-white text-center p-5 border border-y">Header Sticky2 A</nav>
        <section className="w-full h-[50vh] bg-gray-200 flex items-center justify-center">Section Sticky A</section>
      </div>
      <div>
        <nav className="sticky top-16 bg-gray-400 text-white text-center p-5 border border-y">Header Sticky2 B</nav>
        <section className="w-full h-[50vh] bg-gray-200 flex items-center justify-center">Section Sticky B</section>
      </div>
      <div>
        <nav className="sticky top-16 bg-gray-400 text-white text-center p-5 border border-y">Header Sticky2 C</nav>
        <section className="w-full h-[50vh] bg-gray-200 flex items-center justify-center">Section Sticky C</section>
      </div>
    </header>
  );
}

function Sticky3() {
  return (
    <main className="flex">
      <aside className="sticky self-start top-16 bg-gray-200 w-[30vw] h-[80vh] text-center my-[10vh] flex items-center justify-center">
        aside flex [items start]
      </aside>
      <section className="h-[150vh] bg-gray-300 w-full flex items-center justify-center">content</section>
    </main>
  );
}

function Sticky4() {
  return (
    <main className="grid grid-cols-5">
      <aside className="sticky top-16 col-span-1 bg-gray-200 h-[80vh] my-[10vh] text-center grid place-items-center">
        aside grid
      </aside>
      <section className="h-[150vh] col-span-4 bg-gray-300 w-full grid place-items-center">content</section>
    </main>
  );
}
