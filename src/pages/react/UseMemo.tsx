import { useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="size-[300px] bg-white">
        UseMemo
        <div>
          count: {count}; count2: {count2}
        </div>
        <div>
          <div>
            count:
            <button onClick={() => setCount((p) => p + 1)} className="underline mx-2">
              plus
            </button>
            <button onClick={() => setCount((p) => p - 1)} className="underline mx-2">
              minus
            </button>
          </div>
          <div>
            count2:
            <button onClick={() => setCount2((p) => p + 1)} className="underline mx-2">
              plus
            </button>
            <button onClick={() => setCount2((p) => p - 1)} className="underline mx-2">
              minus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useMemo, useState } from "react";

// export default function UseMemo() {
//   return (
//     <div>
//       UseMemo
//       <p>Penjelasannya lihat di memo component</p>
//       <UseMemo1 />
//     </div>
//   );
// }

// function UseMemo1() {
//   const [count, setCount] = useState(2);
//   const [count2, setCount2] = useState(0);
//   const squaredValue = () => {
//     console.log(`nilai ini rerender karena tanpa useMemo`);
//     return count * count;
//   };
//   const squaredValueLagi = useMemo(() => {
//     console.log(`nilai ini tidak rerender karena dengan useMemo`);
//     return count * count;
//   }, [count]);

//   return (
//     <div className="flex flex-col gap-2 items-center p-2 rounded border">
//       <div>Count: {count}</div>
//       <div>Count2: {count2}</div>
//       <div>Kuadrat Count tanpa useMemo: {squaredValue()}</div>
//       <div>Kuadrat Count dengan useMemo: {squaredValueLagi}</div>
//       <button onClick={() => setCount((prev) => prev + 1)}>+ count</button>
//       <button onClick={() => setCount2((prev) => prev + 1)}>+ count2</button>
//     </div>
//   );
// }
