import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import electronics from "@/public/electronics.png";
import jwellereies from "@/public/jwelleries.png";
import men_clothing from "@/public/men_clothing.png";
import women_clothing from "@/public/women_clothing.png";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BannerSlideProps } from "@/utils/types";
import { Categories } from "@/utils/types";

const SliderImage = ({
  image,
  bgColor,
  heading1,
  description,
}: BannerSlideProps) => {
  return (
    <div className={`h-[38rem] relative ${bgColor} bg-opacity-70`}>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 z-10">
        <Image src={image} alt="image1" className="w-96" />
      </div>
      <div
        className={`absolute top-[85%] sm:top-2/3 left-5 transform -translate-y-1/2 text-white ${bgColor} pr-16 rounded-md w-4/5 sm:w-1/2 lg:w-1/3 text-start pl-3 flex flex-col space-y-3 pb-8 sm:pb-14 pt-3 z-20`}
      >
        <h3 className="font-medium text-xl sm:text-3xl uppercase">{heading1}</h3>
        <p className="text-sm sm:text-lg font-medium">{description}</p>
        <Link href={`/allProducts?searchName=""&category=${heading1}`} >
          <button className="bg-white text-xs sm:text-base text-black px-6 py-2 rounded-lg w-max button_click_effect">
            Browse Products
          </button>
        </Link>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <SliderImage
            image={electronics}
            heading1={Categories.ELECTRONICS}
            description={"Buy top end electronic items"}
            bgColor={"bg-yellow-600"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            image={jwellereies}
            heading1={Categories.JWELLERIES}
            description={"Buy cutom picked jwelleries"}
            bgColor={"bg-blue-600"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            image={men_clothing}
            heading1={Categories.MEN_CLOTHING}
            description={"Most popular brands and products for men"}
            bgColor={"bg-orange-600"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            image={women_clothing}
            heading1={Categories.WOMEN_CLOTING}
            description={"Women clothing which you cannot ignore"}
            bgColor={"bg-green-600"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
