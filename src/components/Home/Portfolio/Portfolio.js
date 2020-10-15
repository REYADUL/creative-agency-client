import React from 'react';
import image1 from '../../../images/carousel-1.png';
import image2 from '../../../images/carousel-2.png';
import image3 from '../../../images/carousel-3.png';
import image4 from '../../../images/carousel-4.png';
import image5 from '../../../images/carousel-5.png';
import './Portfolio.css';


import Slider from "react-slick";





const Portfolio = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        
        <div className='container  mb-5'  style={{backgroundColor:'black'}}>
            <h2 className="text-white text-center font-weight-bold p-2 py-md-5 my-md-5">Here are Some of <span style={{color:'green'}}>Our Works</span></h2>
           
                <Slider {...settings}>
                    <div className="image"><img className="img-fluid" src={image1} alt="Carousel1" /></div>
                    <div className="image"><img className="img-fluid" src={image2} alt="Carousel2" /></div>
                    <div className="image"><img className="img-fluid" src={image3} alt="Carousel3" /></div>
                    <div className="image"><img className="img-fluid" src={image4} alt="Carousel4" /></div>
                    <div className="image"><img className="img-fluid" src={image5} alt="Carousel5" /></div>
                    
                </Slider>
            
        </div>
    );
};

export default Portfolio;