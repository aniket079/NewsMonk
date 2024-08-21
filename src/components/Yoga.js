import React, { useState, useEffect } from 'react';
import Card2 from './Card2';
import Slider from "react-slick";
import Poses from './Poses';
import Nav from './Nav'
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPose, setSelectedPose] = useState(null);

  useEffect(() => {
    fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories.pose);
 

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
      <Nav/>
      <div className="slider-container" style={{ paddingTop: '50px' }}>
        <Slider {...settings}>
          {categories.map((category) => (
            <Card2
              key={category.id}
              title={category.category_name}
              text={category.category_description}
              image={category.poses[0].url_png}
              buttonText="View SVG"
            />
          ))}
        </Slider>
      </div>
     <div>
      <Poses/>
     
     </div>
    </div>
  );
}

export default Categories;