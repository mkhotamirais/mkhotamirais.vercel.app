import { useEffect, useState } from "react";

export default function Clock({ className, size = 300 }: { className?: string; size?: number }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} bg-white fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 border-2 rounded-full shadow-lg border-cyan-500`}
    >
      <circle cx="100" cy="100" r="95" stroke="black" strokeWidth="2" fill="none" />
      {/* Angka jam */}
      {[...Array(12)].map((_, i) => {
        const angle = (i + 1) * 30;
        const x = 100 + 80 * Math.sin((Math.PI / 180) * angle);
        const y = 100 - 80 * Math.cos((Math.PI / 180) * angle);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="12">
            {i + 1}
          </text>
        );
      })}

      {/* Gerigi menit */}
      {[...Array(60)].map((_, i) => {
        const angle = i * 6;
        const x1 = 100 + 85 * Math.sin((Math.PI / 180) * angle);
        const y1 = 100 - 85 * Math.cos((Math.PI / 180) * angle);
        const x2 = 100 + 90 * Math.sin((Math.PI / 180) * angle);
        const y2 = 100 - 90 * Math.cos((Math.PI / 180) * angle);
        const strokeWidth = i % 5 === 0 ? 2 : 1;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth={strokeWidth} />;
      })}
      {/* Angka jam, menit, dan detik di tengah */}
      <text
        x="100"
        y="105"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="black"
        style={{ filter: "blur(0.5px)" }}
      >
        {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
      </text>
      <line
        x1="100"
        y1="100"
        x2={100 + 50 * Math.sin((Math.PI / 180) * hourAngle)}
        y2={100 - 50 * Math.cos((Math.PI / 180) * hourAngle)}
        stroke="black"
        strokeWidth="4"
      />
      <line
        x1="100"
        y1="100"
        x2={100 + 70 * Math.sin((Math.PI / 180) * minuteAngle)}
        y2={100 - 70 * Math.cos((Math.PI / 180) * minuteAngle)}
        stroke="black"
        strokeWidth="3"
      />
      <line
        x1="100"
        y1="100"
        x2={100 + 80 * Math.sin((Math.PI / 180) * secondAngle)}
        y2={100 - 80 * Math.cos((Math.PI / 180) * secondAngle)}
        stroke="red"
        strokeWidth="2"
      />
    </svg>
  );
}
