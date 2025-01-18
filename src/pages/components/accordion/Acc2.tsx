import { useState } from "react";
import { accordionData } from "./accordionData";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Acc2() {
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
      <h1>Acc2</h1>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAction(index)} className="p-2 border w-full flex justify-between items-center">
            {item.title}
            {expanded.includes(index) ? <FaMinus /> : <FaPlus />}
          </button>
          {expanded.includes(index) && <p className="overflow-hidden">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}
