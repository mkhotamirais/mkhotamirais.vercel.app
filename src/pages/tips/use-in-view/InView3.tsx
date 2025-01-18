import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ref3List = [{ label: "ref31" }, { label: "ref32" }, { label: "ref33" }];

export default function InView3() {
  const refA = useRef(null);
  const refB = useRef(null);
  const refC = useRef(null);

  const inViewA = useInView(refA);
  const inViewB = useInView(refB);
  const inViewC = useInView(refC);

  const refs = [refA, refB, refC];
  const inViews = [inViewA, inViewB, inViewC];

  return (
    <div className="grid grid-cols-3">
      {ref3List.map((item, i) => (
        <motion.div
          ref={refs[i]}
          key={i}
          initial={{ opacity: 0, y: -200, scale: 0 }}
          animate={inViews[i] ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } } : {}}
          className="border min-h-[calc(100vh-10rem)] flex items-center justify-center"
        >
          <div>
            <h1 className="text-4xl">{item.label}</h1>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
