import { useState } from "react";
// URL("../../public/images/me-angel.jpg");
const background = [
  {
    background: "url('/images/uns-female3-h-xs.jpg') top/contain no-repeat content-box padding-box fixed",
  },
  {
    background:
      "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,100,.5), rgba(0,0,0,1)), url('/images/uns-female3-h-xs.jpg') center/contain",
    backgroundAttachment: "fixed",
  },
  { backgroundColor: "cyan" },
  { backgroundImage: "url('/images/uns-female3-h-xs.jpg')" },
  { backgroundImage: "url('/images/uns-female3-h-xs.jpg')", backgroundRepeat: "no-repeat" },
  { backgroundImage: "url('/images/uns-female3-h-xs.jpg')", backgroundRepeat: "repeat-x" },
  { backgroundImage: "url('/images/uns-female3-h-xs.jpg')", backgroundRepeat: "repeat-y" },
  {
    backgroundImage: "url('/images/uns-female3-h-xs.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  {
    backgroundImage: "url('/images/uns-female3-h-xs.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
  },
  {
    backgroundImage: "url('/images/uns-female3-h-xs.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  {
    backgroundImage: "url('/images/uns-female3-h-xs.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100vh",
  },
  {
    backgroundImage: "url('/images/uns-female3-h-xs.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  {
    backgroundImage: "url('/images/uns-female3-h-xs.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
];

type StyleType = {
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundAttachment?: string;
};

export default function CssBackground() {
  const [active, setActive] = useState(0);
  const [style, setStyle] = useState<StyleType>({
    background: "url('images/uns-female3-h-xs.jpg') top/contain no-repeat content-box padding-box fixed",
  });

  return (
    <section id="css1" style={style} className="min-h-[120vh] size-1 w-full p-3">
      <div className="text-inherit text-center border rounded-xl text-gray-400">
        background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
      </div>
      <div className="flex flex-col gap-2 fixed inset-2 right-10 top-24 sm:top-16 overflow-y-scroll">
        {background.map((item, i) => (
          <button
            onClick={() => {
              setActive(i);
              setStyle(item);
            }}
            key={i}
            className={`${
              active === i ? "bg-gray-200" : "bg-white bg-opacity-50"
            } border text-sm rounded-xl text-left hover:bg-gray-200 p-1 px-2 transition-all duration-150`}
          >
            {JSON.stringify(item).replace(/,/g, ", ")}
          </button>
        ))}
      </div>
    </section>
  );
}
