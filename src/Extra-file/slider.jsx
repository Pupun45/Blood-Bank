import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../image/card9.jpg";
import img2 from "../image/card1.jpg";
import img3 from "../image/card2.jpeg";
import img4 from "../image/card3.jpeg";
import img5 from "../image/card4.jpg";
import img6 from "../image/card5.jpeg";
import img7 from "../image/card6.jpg";
import img8 from "../image/card7.jpg";
import img9 from "../image/card8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const slider = () => {
  return (
    <>
      <div className="Text-size">
          <h3 className="hd" data-title="THE LIFE SAVER">
            THE LIFE SAVER
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
        <>
         <div className="container cner">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerGroup={1}
        breakpoints={{
          500: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1400: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="slider mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide className="image-slide" key={index}>
            <img src={src} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </>
    </>
      
   
  );
};

export default slider;
