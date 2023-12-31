"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../app/styles/swiper.css";
import { testimonial } from "@/constants/testimonial";

const Testimonial = () => {
  return (
    <div className=" px-10 font-roboto sm:px-24 py-10 mt-10 sm:py-16">
      <div className="py-5 flex items-center gap-3">
        <hr className="w-10 h-[3px] bg-primary my-2" />{" "}
        <span className="text-sm">TESTIMONIAL</span>
      </div>
      <h1 className="font-medium mb-8 sm:text-4xl sm:font-bold font-poppins text-secondary  text-sm">
      Real Happy Customers
      </h1>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper grid grid-cols-1 sm:grid-cols-3 mt-8"
      >
        {testimonial.map((test: any) => (
          <SwiperSlide key={test.title}>
            <div className="min-h-[300px] w-full">
              <div className="min-h-[300px] bg-gray-100 p-8 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{test.des}</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-roboto text-black font-bold">
                      {test.title}
                    </span>
                    <span className="text-primary font-poppins text-sm">
                      {test.designation}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
