import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {Link } from "react-router-dom";


const CarouselProduct = () => {

  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>
        <Swiper slidesPerView={7}
                loop= {true}
                spaceBetween={10}
                navigation= {true}
                modules={[Navigation]}> 
                 {Array.from({length:9},(_, i)=>{
                    return <SwiperSlide   key={i}> 
                    <Link to={`/product/${i}`}>
                    <img alt="pop" src={`../images/product_${i}_small.jpg`} />
                    </Link>
                    </SwiperSlide> 
                 })}
        </Swiper>
        </div>
    </div>
  )
}

export default CarouselProduct