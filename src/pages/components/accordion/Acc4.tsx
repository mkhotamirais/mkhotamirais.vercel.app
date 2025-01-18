import { accordionData } from "./accordionData";

export default function Acc4() {
  const handleExpanded = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const content = target.nextElementSibling as HTMLElement;

    content.classList.toggle("buka");
    if (content.classList.contains("buka")) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0";
    }
  };

  return (
    <div className="w-full border rounded p-2">
      <h1>Acc4</h1>
      {accordionData.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={handleExpanded}
            className="p-2 border w-full flex justify-between items-center"
          >
            {item.title}
          </button>
          <p className={`h-0 overflow-hidden transition-all duration-500"`}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
