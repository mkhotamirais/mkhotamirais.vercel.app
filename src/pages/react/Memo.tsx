import { memo, useState } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("memo parent");
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white size-[300px] p-1">
        Memo
        <div>
          count1: {count}; count2: {count2}
        </div>
        <div>
          for count1:
          <button onClick={() => setCount((p) => p - 1)} className="underline mx-2">
            minus
          </button>
          <button onClick={() => setCount((p) => p + 1)} className="underline mx-2">
            plus
          </button>
        </div>
        <div>
          for count 2:
          <button onClick={() => setCount2((p) => p - 1)} className="underline mx-2">
            minus
          </button>
          <button onClick={() => setCount2((p) => p + 1)} className="underline mx-2">
            plus
          </button>
        </div>
        <div>memo component rerender every change count</div>
        <div>memo component with mmo not rerender every count</div>
        <WithMemo count2={count2} />
        <WithoutMemo count2={count2} />
        <div>lihat console setiap rerender</div>
      </div>
    </div>
  );
}

export const WithMemo = memo(({ count2 }: { count2: number }) => {
  console.log("with memo");
  return <div>with memo {count2}</div>;
});

export const WithoutMemo = ({ count2 }: { count2: number }) => {
  console.log("without memo");
  return <div>without memo {count2}</div>;
};
