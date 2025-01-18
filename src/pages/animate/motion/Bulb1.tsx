import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import { FaRotateRight } from "react-icons/fa6";

const boxColorMenu = [
  { label: "red", color: "bg-red-500" },
  { label: "green", color: "bg-green-500" },
  { label: "blue", color: "bg-blue-500" },
  { label: "purple", color: "bg-purple-500" },
  { label: "yellow", color: "bg-yellow-500" },
];

export default function Bulb1() {
  const [animKey, setAnimKey] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setAnimKey(animKey + 1);
    setRotation(rotation + 360); // Menambah sudut rotasi
  };

  return (
    <div className="min-h-[200vh]">
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: 0.3 }}
        className="rounded-full w-fit border fixed right-4 top-4 "
      >
        <Button onClick={handleClick} size="icon" variant="outline" className="rounded-full text-cyan-500">
          <FaRotateRight />
        </Button>
      </motion.div>
      <motion.div
        key={animKey}
        id="blub1"
        className="flex flex-wrap gap-5 w-[95vw] md:w-1/2 mx-auto min-h-32 p-6 border rounded mt-32 items-center justify-center"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {boxColorMenu.map((item, i) => (
          <motion.div
            key={i}
            className={`w-16 h-16 rounded ${item.color} flex items-center justify-center text-white`}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              },
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
