import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../components/Products/Breadcrumb";
import DisplayMethod from "../components/Products/DisplayMethod";
import { DrawerDefault } from "../components/Products/DrawerDefault";
import FilterByPrice from "../components/Products/FilterByPrice";
import Search from "../components/Products/Search";
import ProductCard from "../components/common/ProductCard/ProductCard";
import MainTitle from "../components/common/main/MainTitle";
import { RootState } from "../store";
import { useAppDispatch } from "../store/hooks";
import { actGetAllProducts } from "../store/products/productsSlice";
import { actGetAllBrands, actGetAllCategories, actGetAllConditions, actGetAllMaterialCategories } from "../store/query/querySlice";
import { TProductResponse } from "../types";
import Pagination from "../components/Products/Pagination";


const breadcrumbItems = [
  { label: "Home", link: "/" },
];

const Products = () => {
  const dispatch = useAppDispatch();

  // إدارة الحالة
  const [cardGrid, setCardGrid] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [fliterPrice, setFliterPrice] = useState({ from: "", to: "" });
  const [pageNumber, setPageNumber] = useState<number | null>(1);
  // filters
  const [filterValues, setFilterValues] = useState<{
    materialCategory: string | null;
    category: string | null;
    brand: string | null;
    condition: string | null;
  }>({
    materialCategory: null,
    category: null,
    brand: null,
    condition: null,
  });

  const {brand, category, condition, materialCategory} = filterValues
  


  const isMobileWidth = useSelector(
    (state: RootState) => state.mobileWidth.isMobileWidth
  );

  const productResponse = useSelector(
    (state: RootState) => state.products.records
  ) as TProductResponse | null ;

  const products = useMemo(() => productResponse?.data?.data || [], [productResponse]);
  const meta  = useMemo(
    () => productResponse?.meta || { page: 1, limit: 3, last_page: 1 },
    [productResponse]
  );


  
  


  // دالة جلب المنتجات
  const fetchProducts = useCallback(() => {
    dispatch(
      actGetAllProducts({
        materialCategory: materialCategory,
        category: category,
        brand: brand,
        condition: condition,
        search: debouncedSearchTerm, 
        page: pageNumber,
        limit: meta?.limit,
        min: fliterPrice.from,
        max: fliterPrice.to,
      }) as any
    );
  }, [dispatch, meta?.page, meta?.limit, debouncedSearchTerm, filterValues, fliterPrice, pageNumber]);

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


  // get Allquery


const fetchquerys = useCallback(() => {
  dispatch(actGetAllBrands());
  dispatch(actGetAllCategories());
  dispatch(actGetAllConditions());
  dispatch(actGetAllMaterialCategories());
}, [dispatch]);

useEffect(() => {
  setPageNumber(1);
}, [debouncedSearchTerm, filterValues, setPageNumber]);

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
            <DrawerDefault filterValues={filterValues} setFilterValues={setFilterValues} />
            {/* <Accordion title="Category" list={categoryData} />
            <Accordion
              title="Material Category"
              list={materialCategoryData}
            />
            <Accordion title="Brand" list={brandData} />
            <Accordion title="Condition" list={conditionData} /> */}
            <span className="block bg-color-border h-0.5"></span>
            <p className="text-cyan-500 font-medium">
              Filter By Price <b>(AED)</b>
            </p>
            <FilterByPrice  fliterPrice={fliterPrice} setFliterPrice={setFliterPrice} />
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
            <div className="pagination">
          <Pagination lastPage={meta?.last_page} currentPage={pageNumber} setCurrentPage={setPageNumber} />
        </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
