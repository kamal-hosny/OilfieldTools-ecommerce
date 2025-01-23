import { useCallback, useEffect, useMemo, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper modules
import { Navigation } from "swiper/modules";
import Button from "../../ui/Button";
import ProductCard from "../../common/ProductCard/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { actGetAllProducts } from "../../../store/products/productsSlice";
import { TProductResponse } from "../../../types";





const OurProducts = () => {
  const dispatch = useAppDispatch();
  const [currentSlide, setCurrentSlide] = useState(1); 

  const productResponse = useAppSelector(
    (state) => state.products.records
  ) as TProductResponse | null;
  const products = useMemo(() => productResponse?.data?.data || [], [productResponse]);
  const totalSlides = products.length || 5;
  

  const fetchProducts = useCallback(() => {
    dispatch(
      actGetAllProducts({
        materialCategory: null,
        category: null,
        brand: null,
        condition: null,// استخدام البحث
        search: null, 
        page: 1,
        limit: 10,
      }) as any
    );
  }, [dispatch]);

    // استدعاء البيانات عند أول تحميل
    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);
  

  return (
    <div className="OurProducts py-8 bg-main-color-background">
      <div className="container mx-auto px-4 space-y-6">
        {/* Header Section */}
        <div className="head flex justify-between items-center">
          <p className="main-title text-2xl font-bold text-color-text-1">
            Featured Products
          </p>
          <Button className="border-button-color border-2 text-color-text-1 hover:bg-button-hover-color hover:text-main-color-background">
            View All
          </Button>
        </div>

        {/* Swiper Section */}
        <Swiper
          className="cards"
          spaceBetween={20}
          slidesPerView={1}
          loop={true} 
          navigation={{
            nextEl: ".swiper-next-OurProducts",
            prevEl: ".swiper-prev-OurProducts",
          }}
          modules={[Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 15,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          onSlideChange={(swiper) => setCurrentSlide((swiper.realIndex % totalSlides) + 1)} 
        >
          {/* Swiper Slides */}
           {products.map((product: any) => (
               <SwiperSlide className="card" key={product._id}>
                  <ProductCard
                    productData={product}
                  />
                  </SwiperSlide>
                ))}
        </Swiper>

        {/* Footer Section */}
        <div className="flex items-center justify-between">
          <div className="counter text-color-text-2 space-x-1">
            <span className="text-color-text-1">{String(currentSlide).padStart(2, "0")}</span>
            <span>of</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
          <div className="swiper-navigation flex gap-4">
            <div className="swiper-prev-OurProducts border-2 border-color-border p-2 text-color-text-2 hover:text-color-text-1 rounded-full cursor-pointer">
              <ArrowLeft size={28} />
            </div>
            <div className="swiper-next-OurProducts border-2 border-color-border p-2 text-color-text-2 hover:text-color-text-1 rounded-full cursor-pointer">
              <ArrowRight size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
