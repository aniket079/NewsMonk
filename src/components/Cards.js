import React, { Component } from "react";
import Card from './Card';
import Slider from "react-slick";
import kala from './Landpage.jpeg'
import cardsData from './Data.js';
function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    
  };
  return (
    <div className="slider-container" style={{backgroundColor:'#222222',height:'1200px',paddingTop:'50px'}}>
  <Slider {...settings}> {cardsData.map((card) => (
<Card
  title={card.name}
  text={card.description}
  image={card.image}
  link="https://example.com"
  buttonText="Go somewhere"
/>))}
 </Slider>
</div>
  );
}

export default PauseOnHover;
