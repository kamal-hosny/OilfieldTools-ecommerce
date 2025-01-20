import { useState } from "react";

const FilterByPrice = () => {
  const [price, setPrice] = useState({ from: "", to: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPrice((prev) => ({
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
          value={price.from}
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
          value={price.to}
          onChange={handleChange}
          placeholder="99999"
          className="p-2 bg-section-color text-sm w-full border border-color-border rounded placeholder-color-text-2 text-color-text-1 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
