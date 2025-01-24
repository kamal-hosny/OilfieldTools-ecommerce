import MainTitle from "../components/common/main/MainTitle";
import FilterByPrice from "../components/Products/FilterByPrice";
import Accordion from "../components/Products/Accordion";
import { useEffect, useMemo, useState, useCallback } from "react";
import DisplayMethod from "../components/Products/DisplayMethod";
import Search from "../components/Products/Search";
import ProductCard from "../components/common/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { actGetAllProducts } from "../store/products/productsSlice";
import { TProductResponse } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetAllBrands, actGetAllCategories, actGetAllConditions, actGetAllMaterialCategories } from "../store/query/querySlice";
import Breadcrumb from "../components/ui/Breadcrumb";


const breadcrumbItems = [
  { label: "Home", link: "/" },
];

const Products = () => {
  const dispatch = useAppDispatch();

  // إدارة الحالة
  const [cardGrid, setCardGrid] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  
  const isMobileWidth = useSelector(
    (state: RootState) => state.mobileWidth.isMobileWidth
  );

  const productResponse = useSelector(
    (state: RootState) => state.products.records
  ) as TProductResponse | null;

  const products = useMemo(() => productResponse?.data?.data || [], [productResponse]);
  const meta = useMemo(
    () => productResponse?.data?.meta || { page: 1, limit: 10, last_page: 1 },
    [productResponse]
  );

  


  // دالة جلب المنتجات
  const fetchProducts = useCallback(() => {
    dispatch(
      actGetAllProducts({
        materialCategory: null,
        category: null,
        brand: null,
        condition: null,// استخدام البحث
        search: debouncedSearchTerm, 
        page: meta?.page,
        limit: meta?.limit,
      }) as any
    );
  }, [dispatch, meta?.page, meta?.limit, debouncedSearchTerm]);

    // Update the debounced search term
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, 200); 
  
      return () => {
        clearTimeout(handler); // Cleanup the previous timeout
      };
    }, [searchTerm]);

  // استدعاء البيانات عند أول تحميل
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // التحكم في عرض الشبكة بناءً على الشاشة
  useEffect(() => {
    if (isMobileWidth && !cardGrid) {
      setCardGrid(true);
    }
  }, [isMobileWidth, cardGrid]);


  // Allquery
const {brandRecords,categoryRecords, conditionRecords, materialCategoryRecords} = useAppSelector((state) => state?.query)

const categoryData = (categoryRecords as any)?.data;
const brandData = (brandRecords as any)?.data;
const conditionData = (conditionRecords as any)?.data;
const materialCategoryData = (materialCategoryRecords as any)?.data;

console.log({
  brandData
});


const fetchquerys = useCallback(() => {
  dispatch(actGetAllBrands());
  dispatch(actGetAllCategories());
  dispatch(actGetAllConditions());
  dispatch(actGetAllMaterialCategories());
}, [dispatch]);

useEffect(() => {
  fetchquerys();
}, [fetchquerys]);


  return (
    <div className="bg-section-color">
      <div className="container mx-auto px-2 py-6 space-y-5">
      <Breadcrumb items={breadcrumbItems} itemNow={"Products"} />
        <MainTitle title="Oilfield Products">
          Discover high-quality materials and tools essential for the oilfield
          industry. From drilling equipment to maintenance tools, we provide
          everything you need for efficient operations.
        </MainTitle>
        <div className="mat flex justify-between gap-2">
          {/* قسم الفلاتر */}
          <div className="filtration bg-main-color-background p-4 rounded border-color-border border-2 flex flex-col gap-4 w-72 max-md:hidden">
            <p className="text-cyan-500 font-medium">Filter</p>
            <Accordion title="Category" list={categoryData} />
            <Accordion
              title="Material Category"
              list={materialCategoryData}
            />
            <Accordion title="Brand" list={brandData} />
            <Accordion title="Condition" list={conditionData} />
            <span className="block bg-color-border h-0.5"></span>
            <p className="text-cyan-500 font-medium">
              Filter By Price <b>(AED)</b>
            </p>
            <FilterByPrice />
          </div>
          {/* قسم المنتجات */}
          <div className="products w-full bg-main-color-background border-2 border-color-border flex flex-col gap-4 p-2">
            <div className="head w-full space-y-4">
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
                    ? "grid grid-cols-1 max-md:justify-items-center md:grid-cols-1 lg:grid-cols-3 gap-4 justify-center"
                    : "flex flex-col gap-4"
                }
              >
                {products.map((product: any) => (
                  <ProductCard
                    key={product._id}
                    grid={cardGrid}
                    productData={product}
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
