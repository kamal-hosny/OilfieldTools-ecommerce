import { LayoutGrid, List } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

interface IDisplayMethod {
  cardGrid: boolean;
  setCardGrid: Dispatch<SetStateAction<boolean>>;
}

const DisplayMethod = ({cardGrid, setCardGrid}: IDisplayMethod) => {

  const isMobileWidth = useSelector((state: RootState) => state?.mobileWidth?.isMobileWidth);


  const changeGridTrue = () => {
    setCardGrid(true);
  };
  const changeGridFalse = () => {
    setCardGrid(false);
  };

  return (
    <div className="flex gap-2">
      <button className="Lgrid" >
        <LayoutGrid
          onClick={changeGridTrue}
          className={` ${cardGrid ? "border-cyan-500 text-cyan-500" : ""} text-color-text-2 cursor-pointer bg-section-color p-1.5 h-10 w-10 rounded border-color-border border-2` }
        />
      </button>
      <button className="list" disabled={isMobileWidth}>
        <List
        
          onClick={changeGridFalse}
          className={`${!cardGrid ? "border-cyan-500 text-cyan-500" : ""} text-color-text-2 cursor-pointer bg-section-color p-1.5 h-10 w-10 rounded border-color-border border-2`}
        />
      </button>
    </div>
  );
};

export default DisplayMethod;
