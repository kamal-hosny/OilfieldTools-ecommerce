import { LayoutGrid, List } from "lucide-react";
import MainTitle from "../components/common/main/MainTitle";
import FilterByPrice from "../components/Products/FilterByPrice";
import Accordion from "../components/Products/Accordion";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import DisplayMethod from "../components/Products/DisplayMethod";
import Search from "../components/Products/Search";
import ProductCard from "../components/common/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { checkMobileWidth } from "../store/features/mobileWidth/mobileWidthThunk";

const products = [
  {
    id: 1,
    title: "Seaside",
    price: 550,
    instock: true,
    description: "A premium quality seaside shoe, perfect for casual outings.",
    imageUrl:
      "https://res.cloudinary.com/dikjox62g/image/upload/v1729365072/imges/d872u1ef0c29wtjpau0y.png",
  },
  {
    id: 2,
    title: "Mountain Hiker",
    price: 780,
    instock: false,
    description: "A sturdy shoe for mountain hiking adventures.",
    imageUrl:
      "https://i.pinimg.com/474x/c5/87/9c/c5879c2a385777158a460edc599b70a6.jpg",
  },
  {
    id: 3,
    title: "Urban Sneaker",
    price: 320,
    instock: true,
    description: "A stylish sneaker for everyday urban life.",
    imageUrl:
      "https://i.pinimg.com/236x/d0/5d/6e/d05d6ea5cfc3865c9aa0700767bef3f5.jpg",
  },
  {
    id: 4,
    title: "Classic Leather",
    price: 650,
    instock: true,
    description: "Elegant leather shoes for formal occasions.",
    imageUrl:
      "https://i.pinimg.com/736x/97/b9/2f/97b92f4d6944c9c9ce87dbd67038f40b.jpg",
  },
  {
    id: 5,
    title: "Trail Runner",
    price: 480,
    instock: true,
    description: "Lightweight running shoes for rugged trails.",
    imageUrl:
      "https://i.pinimg.com/736x/11/80/6f/11806f4263353f35741d2502a00d0eff.jpg",
  },
  {
    id: 6,
    title: "Summer Sandals",
    price: 120,
    instock: false,
    description: "Comfortable sandals for summer adventures.",
    imageUrl:
      "https://i.pinimg.com/736x/89/52/97/8952972d40117a7acba8dcf8f225fb0b.jpg",
  },
  {
    id: 7,
    title: "High-top Sneakers",
    price: 410,
    instock: true,
    description: "Trendy high-top sneakers for casual wear.",
    imageUrl:
      "https://i.pinimg.com/236x/61/ba/39/61ba3939637a0ce4adf4f484a3033f1f.jpg",
  },
  {
    id: 8,
    title: "Winter Boots",
    price: 900,
    instock: false,
    description: "Durable boots to keep your feet warm and dry.",
    imageUrl:
      "https://i.pinimg.com/736x/cf/8b/be/cf8bbe5ff03f156c6b6980b8b14c56c2.jpg",
  },
  {
    id: 9,
    title: "Fitness Trainers",
    price: 300,
    instock: true,
    description: "Perfect trainers for gym and fitness sessions.",
    imageUrl:
      "https://i.pinimg.com/736x/de/e3/9f/dee39f8252d198db0f85b52757798cea.jpg",
  },
  {
    id: 10,
    title: "Casual Loafers",
    price: 280,
    instock: true,
    description: "Stylish loafers for everyday wear.",
    imageUrl:
      "https://i.pinimg.com/736x/11/da/c1/11dac1483fac0a74ab3493b346d4cd8d.jpg",
  },
];

const filters = {
  category: [
    { _id: "671016d13d8f58690db0ec12", name: "unknown" },
    { _id: "6713fbaa92d1cb0e74ad9123", name: "Category 1" },
    { _id: "6713fbad92d1cb0e74ad9124", name: "Category 2" },
    { _id: "6713fbb192d1cb0e74ad9125", name: "Category 3" },
  ],
  materialCategory: [
    { _id: "671016d13d8f58690db0ec13", name: "Steel" },
    { _id: "6713fbaa92d1cb0e74ad9126", name: "Aluminum" },
    { _id: "6713fbad92d1cb0e74ad9127", name: "Plastic" },
  ],
  brand: [
    { _id: "671016d13d8f58690db0ec14", name: "Brand A" },
    { _id: "6713fbaa92d1cb0e74ad9128", name: "Brand B" },
    { _id: "6713fbad92d1cb0e74ad9129", name: "Brand C" },
  ],
  condition: [
    { _id: "671016d13d8f58690db0ec15", name: "New" },
    { _id: "6713fbaa92d1cb0e74ad9130", name: "Used" },
    { _id: "6713fbad92d1cb0e74ad9131", name: "Refurbished" },
  ],
};

const Products = () => {

  const [cardGrid, setCardGrid] = useState<boolean>(true);

  const isMobileWidth = useSelector((state: RootState) => state?.mobileWidth.isMobileWidth);

  console.log(isMobileWidth);
  

  useEffect(() => {
    if(isMobileWidth){
      setCardGrid(true)
    }
  }, [isMobileWidth])

  return (
    <div className="bg-section-color">
      <div className="container mx-auto px-2 py-6 space-y-5">
        <MainTitle title="Oilfield Products">
          Discover high-quality materials and tools essential for the oilfield
          industry. From drilling equipment to maintenance tools, we provide
          everything you need for efficient operations.
        </MainTitle>
        <div className="mat flex justify-between gap-2">
          <div className="filtration bg-main-color-background p-4 rounded border-color-border border-2 flex flex-col gap-4 w-72 max-md:hidden">
            {/*  */}
            <p className="text-cyan-500 font-medium">Filter</p>
            <Accordion title="Category" list={filters.category} />
            <Accordion
              title="Material Category"
              list={filters.materialCategory}
            />
            <Accordion title="Brand" list={filters.brand} />
            <Accordion title="Condition" list={filters.condition} />
            <span className="block bg-color-border h-0.5"></span>
            {/*  */}

            <p className="text-cyan-500 font-medium">
              Filter By Price <b>(AED)</b>
            </p>
            <FilterByPrice />
          </div>
          <div className="products w-full bg-main-color-background border-2 border-color-border flex flex-col gap-4 p-2">
            <div className="head w-full space-y-4">
              <Search />

              <div className="head-filtration flex justify-between">
                <div className="left">
                  <div className="text-color-text-1 bg-section-color border-color-border border-2 p-2 h-10 flex rounded justify-center cursor-pointer items-center text-xs">
                    Show 12 Products
                  </div>
                </div>
                <div className="right">
                  <DisplayMethod
                    cardGrid={cardGrid}
                    setCardGrid={setCardGrid}
                  />
                </div>
              </div>
            </div>

            <div className="cards">
              <div
                className={
                  cardGrid
                    ? "grid grid-cols-1 max-md:justify-items-center  md:grid-cols-1 lg:grid-cols-3 gap-4 justify-center "
                    : "flex flex-col gap-4"
                }
              >
                {products.map((product) => (
                  <ProductCard
                  key={product.id}
                    grid={cardGrid}
                    title={product.title}
                    price={product.price}
                    instock={product.instock}
                    description={product.description}
                    imageUrl={product.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
