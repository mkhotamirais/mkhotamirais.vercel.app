import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function InView1() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref1InView = useInView(ref1);

  if (ref1InView) {
    console.log("in view ref 1");
  } else {
    console.log("in view ref 1 hilang");
  }

  return (
    <div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={`border min-h-screen flex items-center justify-center`}
      >
        <div>
          <h1 className="text-4xl">pertama</h1>
        </div>
      </motion.div>
    </div>
  );
}
