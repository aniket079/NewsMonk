import React, { useState, useEffect } from 'react';
import Card4 from './Card4';
import Slider from "react-slick";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPose, setSelectedPose] = useState(null);

  useEffect(() => {
    fetch('https://yoga-api-nzy4.onrender.com/v1/poses')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories.totalData);
 

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setSelectedPose(categories[next]);
    },
  };

  return (
    <div>
      <div className="slider-container" style={{ paddingTop: '50px' }}>
        <Slider {...settings}>
          {categories.map((category) => (
            <Card4
              key={category.id}
              title1={category.english_name}
              title2={category.sanskrit_name}
              title3={category.translation_name}
              text={category.pose_description}
              benefits={category.pose_benefits}
              image={category.url_png}
              
            />
          ))}
        </Slider>
      </div>
     
    </div>
  );
}

export default Categories;