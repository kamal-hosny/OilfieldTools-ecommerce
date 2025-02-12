import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Img from "../components/ui/Img";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetOneProduct } from "../store/products/act/actGetOneProduct";
import { ArrowBigLeftDash, ArrowBigRightDash, Heart } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Breadcrumb from "../components/Products/Breadcrumb";
import Button from "../components/ui/Button";
import { cleanUpProductsRecords } from "../store/products/productsSlice";
import { TProduct } from "../types";
import { formatCurrency } from "../utils";
import TableDetails from "../components/SingleProduct/TableDetails";
import LottieHandler from "../components/common/feedback/LottieHandler/LottieHandler";
import FileDownload from "../components/SingleProduct/FileDownload";
import { addToWishlist, removeFromWishlist } from "../store/wishlist/wishlistActions";
import { addToCart, increaseQuantity } from "../store/cart/cartActions";
import { addToast } from "../store/toasts/toastsSlice";

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
  const [counter, setCounter] = useState<number>(1);
  const [descriptionState, setDescriptionState] = useState("information");
  const { record, loading, error } = useAppSelector((state) => state.products ?? { record: null, loading: "idle", error: null });
  
  const defaultImg = "https://dummyimage.com/300x300";
  
  // Wishlist
  const wishlist = useAppSelector((state) => state?.wishlist?.items ?? []);
  const product = (record as IProductResponse)?.data as TProduct;
  const isProductInWishlist = wishlist.some((item: TProduct) => item._id === product?._id);
  const [isHeartFilled, setIsHeartFilled] = useState(isProductInWishlist);

  useEffect(() => {
    setIsHeartFilled(isProductInWishlist);
  }, [isProductInWishlist]);

  const handleAddToWishlist = (product: TProduct) => {
    dispatch(addToWishlist(product));
  };

  const handleRemoveFromWishlist = (product: TProduct) => {
    dispatch(removeFromWishlist(product));
  };

  const toggleHeart = (product: TProduct) => {
    if (isHeartFilled) {
      handleRemoveFromWishlist(product);
    } else {
      handleAddToWishlist(product);
      dispatch(addToast({
        message: "Item has been added to the wishlist.",
        type: "success"
    }));
    }
    setIsHeartFilled((prev: boolean) => !prev);
  };

  // Cart
  const cart = useAppSelector((state) => state.cart?.items ?? []);

  
  const addProductToCart = (product: TProduct) => {
    const isProductInCart = cart.some((item: TProduct) => item._id === product?._id);
    
    console.log(product, counter);

    if (!isProductInCart) {
      
      dispatch(addToCart(product, counter));
      dispatch(addToast({
        message: `"${product.data.product_name}" has been added to the cart`,
        type: "success"
      }));
    } else {
      dispatch(increaseQuantity(product?._id, counter))
    }
    setCounter(1); 
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
    return (
      <div className="relative bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center">
        <LottieHandler type="loading" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { imgs, mainImg } = product;
  const allImages = [mainImg, ...(Array.isArray(imgs) ? imgs : [])];
  const images = allImages?.map((img) => img?.url).filter(Boolean) || [];

  return (
    <div>
      <div className="container mx-auto px-2 py-6 space-y-5 bg-section-color">
        <Breadcrumb
          items={breadcrumbItems}
          itemNow={product?.data?.product_name || "Product"}
        />
        <div className="productPage flex justify-evenly max-lg:flex-col gap-y-8">
          <div className="imageSection flex p-2 rounded border-color-border border bg-main-color-background">
            <div className="w-[570px] max-lg:w-full space-y-2">
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
                        className="w-full border-color-border rounded object-cover h-[500px] hover:scale-105 transition-all"
                        src={img ?? defaultImg}
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
                    <div className="swiper-next-singleProduct opacity-70 hover:opacity-100 transition-all bg-section-color border-2 border-color-border p-1.5 text-color-text-2 hover:text-color-text-1 rounded-full cursor-pointer">
                      <ArrowBigRightDash size={20} />
                    </div>
                  </div>
                )}
              </Swiper>

              <div className="images flex gap-4 overflow-x-auto">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="s-images cursor-pointer rounded flex-shrink-0 w-[100px]"
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
          <div className="detailsSection flex justify-end">
            <div className="head bg-main-color-background max-lg:w-full h-full space-y-2 w-[500px] p-5">
              <p className="title text-color-text-1 font-medium text-xl capitalize">
                {product?.data?.product_name}
              </p>
              <p className="price text-color-text-1 text-xl font-medium">
                {formatCurrency(product?.data?.price || 0)}
              </p>
              <p className="price text-color-text-2 font-medium">model_number</p>

              <TableDetails product={product} />

              <div className="btn flex">
                <div className="numberProduct">
                  <input
                    type="number"
                    min={1}
                    value={counter}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      setCounter(isNaN(value) ? 1 : value);
                    }}
                    className="cursor-pointer text-color-text-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none text-center bg-section-color top-2 left-2 rounded-s p-1.5 h-10 w-24 border-2 border-color-border transition-all"
                  />
                </div>

                <div className="AddToCart w-full">
                  <Button
                    onClick={() => addProductToCart(product)}
                    className="bg-button-color rounded-none hover:bg-button-hover-color text-main-color-background w-full"
                  >
                    Add To Cart
                  </Button>
                </div>
                <div className="AddToWishlist">
                  <Heart
                    onClick={() => toggleHeart(product)}
                    className={`cursor-pointer bg-section-color hover:text-red-500 top-2 left-2 rounded-e p-1.5 w-10 h-10 border-2 border-color-border transition-all ${
                      isHeartFilled ? "text-red-500" : "text-gray-400"
                    }`}
                    fill={isHeartFilled ? "red" : "none"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line li relative h-[1px] w-full bg-color-border"></div>
        <div className="description relative border-2 border-color-border bg-main-color-background">
          <div className="head flex gap-4 border-b-2 border-color-border">
            <Button
              onClick={() => setDescriptionState("information")}
              className={`${
                descriptionState === "information" &&
                "bg-button-hover-color text-main-color-background"
              } border-color-text-2 border-2 text-color-text-1 hover:bg-button-hover-color hover:text-main-color-background text-sm !p-1.5 rounded-none`}
            >
              Information
            </Button>

            {product?.data?.pdf !== undefined && (
              <Button
                onClick={() => setDescriptionState("documents")}
                className={`${
                  descriptionState === "documents" &&
                  "bg-button-hover-color text-main-color-background"
                } border-color-text-2 border-2 text-color-text-1 hover:bg-button-hover-color hover:text-main-color-background text-sm !p-1.5 rounded-none`}
              >
                Documents
              </Button>
            )}
          </div>
          {descriptionState === "information" && (
            <p className="p-2 text-sm min-h-28 text-color-text-1">
              {product?.data?.Description ?? "No description"}
            </p>
          )}

          {descriptionState === "documents" && (
            <div className="p-2 text-sm min-h-28">
              <FileDownload fileId={product?.data?.pdf} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;