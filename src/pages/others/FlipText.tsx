import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FlipText() {
  const [num, setNum] = useState(1);
  const [arr] = useState(["Halo", "Nama saya Khotami", "Terima kasih atas kunjugannya"]);
  const [arrId, setArrId] = useState(0);

  useEffect(() => {
    const detik = setInterval(() => {
      setNum((prev) => prev + 1);
      return num;
    }, 1000);
    return () => clearInterval(detik);
  }, [num]);

  useEffect(() => {
    const showArr = setInterval(() => {
      if (arrId >= arr.length - 1) {
        setArrId(0);
      } else {
        setArrId((prev) => prev + 1);
      }
    }, 2000);
    return () => clearInterval(showArr);
  }, [arrId, arr]);

  const variants = {
    initial: { rotateX: 90 },
    animate: { rotateX: 0, delay: 2 },
    exit: { rotateX: 90 },
  };

  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <div>{num}</div>
      <AnimatePresence mode="wait">
        <motion.div
          key={arrId}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center"
        >
          {arr[arrId]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
