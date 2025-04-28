"use client"

import { destinationData } from '@/data/data';
import React from 'react'
import Image from 'next/image';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,  //
  },
};

const Features = () => {
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true}  >
        {destinationData.map((item) => {
            return (
              <div key={item.id} className="m-3">
                <div className="relative h-[400px]">
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                  {/* image */}
                  <Image
                    src={item.image}
                    alt={item.country}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* text */}
                <h1 className="text-lg font-semibold mt-4">{item.country}</h1>
                <p className="text-sm text-gray-600">{item.travelers} Travelers</p>
              </div>
            );
        })}
    </Carousel>
  )
}

export default Features