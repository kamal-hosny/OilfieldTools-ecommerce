import { useState } from "react";
import { string } from "zod";

interface IProps  {
  fliterPrice: {
    from: string;
    to: string;
  }
   setFliterPrice : React.Dispatch<
   React.SetStateAction<{
    from: string;
    to: string;
   }>
 >;
}

const FilterByPrice = ({ fliterPrice, setFliterPrice }: IProps) => {
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFliterPrice((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="from flex flex-col gap-1">
        <label htmlFor="from" className="text-color-text-2">
          Min
        </label>
        <input
          type="number"
          min={0}
          id="from"
          value={fliterPrice.from}
          onChange={handleChange}
          placeholder="0"
          className="p-2 bg-section-color text-sm w-full border border-color-border rounded placeholder-color-text-2 text-color-text-1 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
      </div>
      <div className="to flex flex-col gap-1">
        <label htmlFor="to" className="text-color-text-2">
        Max
        </label>
        <input
          type="number"
          id="to"
          min={0}
          value={fliterPrice.to}
          onChange={handleChange}
          placeholder="99999"
          className="p-2 bg-section-color text-sm w-full border border-color-border rounded placeholder-color-text-2 text-color-text-1 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
