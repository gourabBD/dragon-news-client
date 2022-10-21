import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <div className=''>
        <h5>Brand Sponsored</h5>
        <Carousel className='w-100'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/e/ea-sports-fifa-23-nintendo-switch-legacy-edition-switch/hero"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        
      </Carousel>
        </div>
    );
};

export default BrandCarousel;