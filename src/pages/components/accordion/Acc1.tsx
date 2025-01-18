import { useState } from "react";
import { accordionData } from "./accordionData";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Acc1() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAction = (index: number) => setExpanded(expanded === index ? null : index);

  return (
    <div className="w-full border rounded p-2">
      <h1>Acc1</h1>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => toggleAction(index)}
            className="p-2 border w-full flex justify-between items-center"
          >
            {item.title}
            {expanded === index ? <FaMinus /> : <FaPlus />}
          </button>
          {expanded === index && <p className="overflow-hidden">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}
