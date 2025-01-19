import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion bg-red-800 ">
      <p
        className="text-lg font-semibold text-white cursor-pointer p-4"
        onClick={toggleAccordion}
      >
        Accordion Title
      </p>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden px-2 pb-2`}
        style={{ maxHeight: open ? '200px' : '0px' }}
      >
        <ul className="flex flex-col gap-1 text-xs text-white">
          <li>aaaq</li>
          <li>aasdq</li>
          <li>adacq</li>
          <li>afwewq</li>
          <li>afrgq</li>
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
