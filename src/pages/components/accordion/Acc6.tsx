import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { accordionData } from "./accordionData";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Acc6() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleAction = (index: number) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((i) => i !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  return (
    <div className="w-full border rounded p-2">
      <h1>Acc6</h1>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => toggleAction(index)}
            className="p-2 border w-full flex justify-between items-center"
          >
            {item.title}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: expanded.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded.includes(index) ? <FaMinus /> : <FaPlus />}
            </motion.div>{" "}
          </button>
          <AnimatePresence>
            {expanded.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {item.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
