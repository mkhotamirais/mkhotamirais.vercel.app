import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function Parallax() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -400]);
  const y3 = useTransform(scrollY, [0, 500], [0, -700]);
  const y4 = useTransform(scrollY, [0, 500], [0, -1000]);
  const y5 = useTransform(scrollY, [0, 500], [0, -1200]);
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 60 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 50 });
  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 40 });
  const smoothY4 = useSpring(y4, { stiffness: 100, damping: 30 });
  const smoothY5 = useSpring(y5, { stiffness: 100, damping: 20 });
  return (
    <section className="min-h-[150vh]">
      <div className="relative border w-full mx-auto max-w-screen h-screen overflow-hidden">
        <motion.div style={{ y: smoothY1 }} className="border absolute bg-blue-500 w-1/6 h-1/6 top-1/2" />
        <motion.div style={{ y: smoothY2 }} className="absolute bg-red-500 w-1/6 h-1/6 left-1/2 top-1/2" />
        <motion.div style={{ y: smoothY3 }} className="absolute bg-green-500 w-1/6 h-1/6 left-1/3 top-1/2" />
        <motion.div style={{ y: smoothY4 }} className="absolute bg-purple-500 w-1/6 h-1/6 left-1/4 top-2/3" />
        <motion.div style={{ y: smoothY5 }} className="absolute bg-orange-500 w-1/6 h-1/6 left-3/4 top-2/3" />
      </div>
    </section>
  );
}
