import { useState } from "react";
import { accordionData } from "./accordionData";

export default function Acc3() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpanded = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    const target = e.currentTarget as HTMLButtonElement;
    const content = target.nextElementSibling as HTMLElement;

    const allContents = document.getElementsByClassName("autoClose");
    for (let i = 0; i < allContents.length; i++) {
      (allContents[i] as HTMLElement).style.height = "0";
    }

    if (index === expanded) {
      setExpanded(null);
      content.style.height = "0";
    } else {
      setExpanded(index);
      content.style.height = content.scrollHeight + "px";
    }
  };

  return (
    <div className="w-full border rounded p-2">
      <h1>Acc3</h1>
      {accordionData.map((item, i) => (
        <div key={i}>
          <button onClick={(e) => handleExpanded(e, i)} className="p-2 border w-full flex justify-between items-center">
            {item.title}
          </button>
          <p className="autoClose h-0 overflow-hidden transition-all duration-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
