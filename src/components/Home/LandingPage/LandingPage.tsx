import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Img from "../../ui/Img";
import landingPage1 from "../../../assets/landingPage/LandingPage1.jpg";
import landingPage2 from "../../../assets/landingPage/LandingPage2.jpg";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const LandingPage = () => {
  return (
    <div className="landing-page relative">
      <div className="flex flex-col justify-center items-center gap-6 floating-content absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-[2]">
        <div style={{textShadow: "0px 0px 20px #000000"}} className="landing-page-info text-center flex flex-col justify-center items-center gap-4">
          <p className="title font-bold text-3xl space-x-2">
            <span className="text-[#ffffff]" style={{textShadow: "0px 0px 20px #000000"}}>Welcome to</span>
            <span className="text-cyan-500" style={{textShadow: "0px 0px 20px #000000"}}>OilfieldTools</span>
          </p>
          <p style={{textShadow: "0px 0px 10px #000000"}} className="description text-[#ffffff] w-10/12 max-md:w-96 leading-6 font-medium text-sm">
            Explore a comprehensive range of heavy oil machinery and tools,
            designed to meet your industrial needs efficiently with
            OilfieldTools.
          </p>
        </div>
        <div className="flex gap-4">
  <Link to={"/about"}>
    <Button
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
    >
      About Us
    </Button>
  </Link>
  <Link to={"/products"}>
    <Button
      className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500  hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
    >
      Products
    </Button>
  </Link>
</div>

      </div>

      <Swiper
        className="swiper relative"
        modules={[Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative">
            <Img
              className="swiperSlide-img w-full h-[calc(100vh-65px)] object-cover"
              src={landingPage1}
              alt="Landing Page 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Img
              className="swiperSlide-img w-full h-[calc(100vh-65px)] object-cover"
              src={landingPage2}
              alt="Landing Page 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LandingPage;