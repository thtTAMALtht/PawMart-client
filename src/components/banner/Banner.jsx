import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
   
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={banner1}
              className="w-full h-[450px] object-cover"
              alt="Pet Banner 1"
            />
            <div className="banner-content mt-[-40px] hidden md:block">
              <h2>Find Your Furry Friend Today!</h2>
              <p className="text-gray-300">
                From playful puppies to cuddly cats — explore a variety of
                lovely pets waiting for a forever home. Make your family
                complete with a new best friend.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={banner2}
              className="w-full h-[450px] object-cover"
              alt="Pet Banner 2"
            />
            <div className="banner-content mt-[-40px] hidden md:block">
              <h2>Adopt, Don’t Shop — Give a Pet a Home.</h2>
              <p className="text-gray-300">
                Every rescued pet gets a new chapter of life. Choose adoption
                and bring joy, love, and hope to an animal eager to be a part of
                your family.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={banner3}
              className="w-full h-[450px] object-cover"
              alt="Pet Banner 3"
            />
            <div className="banner-content mt-[-40px] hidden md:block">
              <h2>Because Every Pet Deserves Love & Care.</h2>
              <p className="text-gray-300">
                We help connect pets with kind-hearted people like you. Give a
                stray or abandoned pet a chance to feel loved, safe, and truly
                cared for.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
