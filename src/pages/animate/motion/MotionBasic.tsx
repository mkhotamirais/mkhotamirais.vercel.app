import { motion } from "motion/react";
import { useState } from "react";

export default function MotionBasic() {
  const [start, setStart] = useState(false);

  const handleClick = () => setStart((prev) => !prev);

  const box = "bg-green-500 w-20 h-20 border-2 border-black m-2 cursor-pointer";

  return (
    <div>
      <div className="border-b sticky top-0 bg-white p-2">
        <a href="#click">Click</a> | <a href="#hover">Hover</a> | <a href="#scroll">Scroll</a> |
      </div>
      {/* click or hover */}
      <div className="min-h-screen">
        <div id="click">
          <h2>Click</h2>
          <div className="flex">
            <motion.div onClick={handleClick} className={`${box}`} animate={{ rotate: start ? 360 : 0 }} />
            <motion.div
              onClick={handleClick}
              className={`${box}`}
              animate={{ scale: start ? 1.5 : 1, transition: { duration: 0.5 } }}
            />
            <motion.div
              onClick={handleClick}
              className={`${box}`}
              // initial={false}
              initial={{ scale: 0.5 }}
              animate={{ scale: start ? 1.5 : 1, transition: { duration: 0.5 } }}
            />
          </div>
        </div>

        <div id="hover">
          <h2>Hover / Click (lihat console)</h2>
          <motion.div
            className={`${box}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          />
        </div>
      </div>
      {/* scroll */}
      <div id="scroll">
        <h2>Scroll</h2>
        <motion.div
          className={`${box}`}
          initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
          whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
        />
      </div>
    </div>
  );
}
