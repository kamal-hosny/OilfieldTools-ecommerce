import MainTitle from "../components/common/main/MainTitle";
import Accordion from "../components/ui/Accordion";

const Material = () => {
  return (
    <>
    <div className="bg-section-color">
      <div className="container mx-auto px-6 p-y space-y-5">
        <MainTitle title="Oilfield Materials">
          Discover high-quality materials and tools essential for the oilfield
          industry. From drilling equipment to maintenance tools, we provide
          everything you need for efficient operations.
        </MainTitle>
        <div className="mat flex  justify-between">
          <div className="filtration bg-main-color-background p-4 rounded border-color-border border-2 flex flex-col gap-4">
          <Accordion />

            <span className="block bg-color-border h-0.5"></span>



          </div>
          <div className="products">
            <div className="head-filtration"></div>
            <div className="cards">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Material;
