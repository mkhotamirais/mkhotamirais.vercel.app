import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function InView2() {
  const ref2 = useRef<HTMLDivElement>(null);
  const ref2Title = useRef<HTMLDivElement>(null);

  // const ref2InView = useInView(ref2);
  const ref2TitleInView = useInView(ref2Title);

  return (
    <div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={`border min-h-screen flex items-center justify-center`}
      >
        <div ref={ref2Title}>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: ref2TitleInView ? 0 : 100, transition: { duration: 0.3 } }}
            className="text-4xl"
          >
            kedua
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}
