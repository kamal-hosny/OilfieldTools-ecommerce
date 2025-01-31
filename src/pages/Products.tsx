import { useCallback, useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Products/Breadcrumb";
import DisplayMethod from "../components/Products/DisplayMethod";
import { DrawerDefault } from "../components/Products/DrawerDefault";
import FilterByPrice from "../components/Products/FilterByPrice";
import Search from "../components/Products/Search";
import ProductCard from "../components/common/ProductCard/ProductCard";
import MainTitle from "../components/common/main/MainTitle";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetAllProducts } from "../store/products/productsSlice";
import { actGetAllBrands, actGetAllCategories, actGetAllConditions, actGetAllMaterialCategories } from "../store/query/querySlice";
import { TProductResponse } from "../types";
import Pagination from "../components/Products/Pagination";
import LimitSelector from "../components/Products/LimitSelector";

const breadcrumbItems = [
  { label: "Home", link: "/" },
];

const Products = () => {
  const dispatch = useAppDispatch();

  // State management
  const [cardGrid, setCardGrid] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState({ from: "", to: "" });
  const [pageNumber, setPageNumber] = useState<number | null>(1);
  const [limit, setLimit] = useState<number | null>(10);

  // Filters
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

  const { brand, category, condition, materialCategory } = filterValues;

  const isMobileWidth = useAppSelector(
    (state) => (state.mobileWidth as { isMobileWidth: boolean }).isMobileWidth
  );
  const productResponse = useAppSelector(
    (state) => state?.products?.records
  ) as TProductResponse | null;

  
  const products = useMemo(() => productResponse?.data?.data || [], [productResponse]);
  const meta = useMemo(
    () => productResponse?.meta || { page: 1, limit: 10, last_page: 1 },
    [productResponse]
  );

  // Fetch products
  const fetchProducts = useCallback(() => {
    dispatch(
      actGetAllProducts({
        materialCategory: materialCategory,
        category: category,
        brand: brand,
        condition: condition,
        search: debouncedSearchTerm,
        page: pageNumber,
        limit: limit,
        min: filterPrice.from,
        max: filterPrice.to,
      }) as any
    );
  }, [dispatch, materialCategory, category, brand, condition, debouncedSearchTerm, pageNumber, limit, filterPrice]);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch products on component mount or when dependencies change
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Handle mobile width
  useEffect(() => {
    if (isMobileWidth && !cardGrid) {
      setCardGrid(true);
    }
  }, [isMobileWidth, cardGrid]);

  // Fetch all queries
  const fetchQueries = useCallback(() => {
    dispatch(actGetAllBrands());
    dispatch(actGetAllCategories());
    dispatch(actGetAllConditions());
    dispatch(actGetAllMaterialCategories());
  }, [dispatch]);

  useEffect(() => {
    setPageNumber(1);
  }, [debouncedSearchTerm, filterValues]);

  useEffect(() => {
    fetchQueries();
  }, [fetchQueries]);


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
          {/* Filters section */}
          <div className="filtration bg-main-color-background p-4 rounded border-color-border border-2 flex flex-col gap-4 w-72 max-md:hidden">
            <p className="text-cyan-500 font-medium">Filter</p>
            <DrawerDefault filterValues={filterValues} setFilterValues={setFilterValues} />
            <span className="block bg-color-border h-0.5"></span>
            <p className="text-cyan-500 font-medium">
              Filter By Price <b>(AED)</b>
            </p>
            <FilterByPrice
              filterPrice={filterPrice}
              setFilterPrice={setFilterPrice}
              onPriceChange={(price) => setFilterPrice(price)}
            />
          </div>
          {/* Products section */}
          <div className="products w-full bg-main-color-background border-2 border-color-border flex flex-col gap-4 p-2">
            <div className="head w-full space-y-4">
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <div className="head-filtration flex justify-between">
                <div className="left">
                  <LimitSelector limit={limit} setLimit={setLimit} />
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