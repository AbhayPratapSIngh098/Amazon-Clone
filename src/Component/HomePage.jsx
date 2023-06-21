import React from 'react';
import {Carousel, HomePageCard, CarouselCat, CarouselProduct} from "./index";



const HomePage = () => {
  return (
    <div className='bg-amazonclone-background'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto'>
        <Carousel />
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          <HomePageCard title="We have a Surprise for you"alt="im"  img="/images/home_grid_1.jpg" link={"see terms and consition"}/>
          <HomePageCard title="Watch The Rings of Power" alt="im" img="images/home_grid_2.jpg" link={"Start Streaming Now"}/>
          <HomePageCard title="Unlimited Streaming" alt="im" img="images/home_grid_3.jpg" link={"Find out Moren"}/>
          <HomePageCard title="More titles to explore" alt="im" img="images/home_grid_4.jpg" link={"Browser Kindle Unlimited"}/>
          <HomePageCard title="Shop Pet Supplies" alt="im" img="images/home_grid_5.jpg" link={"See More"}/>
          <HomePageCard title="Spring Sale" alt="im" img="images/home_grid_6.jpg" link={"See the deals"}/>
          <HomePageCard title="Eco buds" alt="im" img="images/home_grid_7.jpg" link={"See More"}/>
          <HomePageCard title="Family Plan: 3 Month Free" alt="im" img="images/home_grid_8.jpg" link={"Learn More"}/>
          <div className='m-3 pt-8'>
            <img alt='pr' src="/images/banner_image_2.jpg" className='xl:hidden' />
          </div>
        </div>
      </div>
      <CarouselProduct/>
      <CarouselCat/>
      <div className='h-[200px]'>
        <img className='h-[100%] m-auto' src="/images/banner_image.jpg" alt='ban'/>
      </div>
    </div>
  )
}

export default HomePage