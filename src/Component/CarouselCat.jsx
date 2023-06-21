import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import { useNavigate, createSearchParams } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";

const CarouselCat = () => {
    const navigate = useNavigate();
    const searchCategory= (category)=>{
        navigate({
            pathname: "search",
            search: `${
              createSearchParams({
                category: `${category}`,
                searchTerm: ``
              })
            }`   
          
          })
    }
   
  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Shop by Category</div>
        <Swiper slidesPerView={5}
                loop= {true}
                spaceBetween={10}
                navigation= {true}
                modules={[Navigation]}> 
                <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("deals")}>
                    <img src="/images/category_0.jpg" alt='cat' />
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("Amazon")}>
                    <img src="/images/category_1.jpg" alt='cat' />
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("Fashion")}>
                    <img src="/images/category_2.jpg" alt='cat' />
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("Computers")}>
                    <img src="/images/category_3.jpg" alt='cat' />
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("Home")}>
                    <img src="/images/category_4.jpg" alt='cat' />
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("Mobiles")}>
                    <img src="/images/category_5.jpg" alt='cat' />
                </SwiperSlide>
                

        </Swiper>
    </div>
  )
}

export default CarouselCat