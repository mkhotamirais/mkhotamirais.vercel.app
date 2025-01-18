import { useState } from "react";
import { accordionData } from "./accordionData";
import { AnimatePresence, motion } from "motion/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Acc5() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAction = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-full border rounded p-2">
      <h1>Acc5</h1>
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
              animate={{ rotate: expanded === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded === index ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </button>
          <AnimatePresence>
            {expanded === index && (
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
