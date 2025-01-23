import { memo } from "react";

interface ISearch {
  searchTerm: string | null;
   setSearchTerm: React.Dispatch<React.SetStateAction<string | null>> ;
  }

const Search = memo(({searchTerm, setSearchTerm} : ISearch) => {


  
  return (
    <div className="search flex">
      <input
        type="text"
        className="w-full rounded-s py-1 bg-section-color border-2 text-color-text-1 border-color-border focus:ring-2 focus:border-cyan-500 focus:outline-none px-2"
        placeholder="Search"
        value={searchTerm || ""}
        onChange={(e) => setSearchTerm(e.target.value)} // تحديث الحالة عند الكتابة
      />
    </div>
  );
});

export default memo(Search);