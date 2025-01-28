const TableDetails = () => {
  return (
    <table className="table-auto w-full my-8 border-color-border border text-xs">
      <thead>
        <tr className="bg-section-color">
          <th className="px-4 py-3 text-left text-color-text-1 font-medium">
            General
          </th>
          <th className="px-4 py-3 text-left text-color-text-1 font-medium">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">category</td>
          <td className="px-4 py-3 text-color-text-1">Malcolm Lockyer</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">Dimension</td>
          <td className="px-4 py-3 text-color-text-1">The Eagles</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">Unit_of_Measurement</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">condition</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">brand</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">weight</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">size</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">HNS_code</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
        <tr className="border-b border-color-border">
          <td className="px-4 py-3 text-color-text-2">material_Category</td>
          <td className="px-4 py-3 text-color-text-1">Earth, Wind, and Fire</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableDetails;
