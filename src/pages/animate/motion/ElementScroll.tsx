import { useRef } from "react";
import { motion, useScroll } from "motion/react";

export default function ElementScroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <section className="w-full min-h-screen p-3 flex items-center justify-center">
      <div className="relative border rounded-xl w-full sm:w-1/2 p-3 bg-blue-500">
        <svg width="100" height="100" viewBox="0 0 100 100" className="absolute top-3 left-3 rotate-90">
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            stroke="white"
            opacity={0.3}
            fill="none"
            strokeDashoffset="0"
            strokeWidth="15%"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="white"
            pathLength="1"
            fill="none"
            strokeWidth="15%"
            strokeDashoffset="0"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>

        <div ref={ref} className="flex w-full h-32 gap-2 bg-red-200 border rounded-xl mt-32 overflow-x-scroll">
          <div className="flex h-full items-center justify-center px-2 text-center">Scroll Me Horizontally</div>
          <div className="bg-gray-200 w-32 h-auto min-w-56 rounded-lg m-2" />
          <div className="bg-gray-200 w-32 h-auto min-w-56 rounded-lg m-2" />
          <div className="bg-gray-200 w-32 h-auto min-w-56 rounded-lg m-2" />
          <div className="bg-gray-200 w-32 h-auto min-w-56 rounded-lg m-2" />
          <div className="bg-gray-200 w-32 h-auto min-w-56 rounded-lg m-2" />
        </div>
      </div>
    </section>
  );
}
