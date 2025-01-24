import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { actGetOneProduct } from "../store/products/act/actGetOneProduct";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Img from "../components/ui/Img";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ArrowBigLeftDash, ArrowBigRightDash, Heart } from "lucide-react";
import { TProduct } from "../types";
import { cleanUpProductsRecords } from "../store/products/productsSlice";
import { formatCurrency } from "../utils";
import Button from "../components/ui/Button";
import Breadcrumb from "../components/ui/Breadcrumb";


const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
];

interface IProductResponse {
  data: TProduct;
}

const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const swiperRef = useRef<any>(null);
  const [isHeartFilled, setIsHeartFilled] = useState(false);


  const { record, loading, error } = useAppSelector((state) => state.products);


  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  const fetchProduct = useCallback(() => {
    if (id) {
      dispatch(actGetOneProduct(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    return () => {
      dispatch(cleanUpProductsRecords());
    };
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const product = (record as IProductResponse)?.data as TProduct;

  if (!product) {
    return <div>Product not found</div>;
  }

  const { imgs, mainImg } = product;
  const allImages = [mainImg, ...(Array.isArray(imgs) ? imgs : []), ...(Array.isArray(imgs) ? imgs : [])];
  const images = allImages?.map((img) => img.url) || [];

  return (
    <div>
      <div className="container mx-auto px-2 py-6 space-y-5 bg-section-color">
        <Breadcrumb items={breadcrumbItems} itemNow={product?.data?.product_name} />
        <div className="productPage flex justify-between max-md:flex-col">
          <div className="imageSection flex-1 flex justify-end">
            <div className="w-96 max-md:w-full space-y-2">
              <Swiper
                ref={swiperRef}
                className="swiper relative"
                spaceBetween={0}
                loop={true}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-next-singleProduct",
                  prevEl: ".swiper-prev-singleProduct",
                }}
                modules={[Navigation]}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="mainImg cursor-grab">
                      <Img
                        loading="lazy"
                        className="w-full border-color-border rounded object-cover h-[400px] hover:scale-105 transition-all"
                        src={img || ""}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}

                {images.length > 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full z-10 p-1">
                    <div className="swiper-prev-singleProduct opacity-70 hover:opacity-100 transition-all bg-section-color border-2 border-color-border p-1.5 text-color-text-2 hover:text-color-text-1 rounded-full cursor-pointer">
                      <ArrowBigLeftDash size={20} />
                    </div>
                    <div className="swiper-next-singleProduct opacity-70 hover:opacity-100 transition-all  bg-section-color border-2 border-color-border p-1.5 text-color-text-2 hover:text-color-text-1 rounded-full cursor-pointer">
                      <ArrowBigRightDash size={20} />
                    </div>
                  </div>
                )}
              </Swiper>

<div className="images flex gap-4 overflow-x-auto p-1">
  {images.map((img, index) => (
    <div
      key={index}
      className="s-images cursor-pointer rounded flex-shrink-0 w-[100px]" // هنا
      onClick={() => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideTo(index + 1);
        }
      }}
    >
      <Img
        loading="lazy"
        className="object-cover h-[100px] rounded w-[100px]"
        src={img || ""}
        alt=""
      />
    </div>
  ))}
</div>
            </div>
          </div>
          <div className="detailsSection flex-[3] flex justify-end">
          <div className="head bg-red-400 h-full w-[500px] p-2" >
              <p className="title text-color-text-1 font-medium text-xl capitalize">{product?.data?.product_name}</p>
              <p className="price text-color-text-1 font-medium">{formatCurrency(product?.data?.price || 0)}</p>

              {/* Add more product details here */}
            
              <div className="btn flex  bg-green-500 items-end self-end gap-2">
              <div className="AddToCart">
                <Button className="bg-button-color hover:bg-button-hover-color text-main-color-background">Add To Cart</Button>
              </div>
              <div className="AddToWishlist">
              <Heart
              onClick={toggleHeart}
              className={`cursor-pointer bg-section-color hover:text-red-500 top-2 left-2 rounded p-1.5 w-9 h-9 border-2 border-color-border transition-all ${
                isHeartFilled ? "text-red-500" : "text-gray-400"
              }`}
              fill={isHeartFilled ? "red" : "none"}
            />
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
