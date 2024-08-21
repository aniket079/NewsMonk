import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { getDocs, collection, query, limit } from 'firebase/firestore';
import Card2 from './Card2';
import Slider from "react-slick";

function Collegeheadlines() {
  const [cse, setcse] = useState([]);
  const csecollectionRef = collection(db, "nss");
  const date="";

  useEffect(() => {
    const getcse = async () => {
      try {
        const q = query(csecollectionRef, limit(10));
        const querySnapshot = await getDocs(q);
        const filterData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
        setcse(filterData);
      } catch (err) {
        console.error(err);
      }
    };
    getcse();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true
  };

  return (
    <div>
      <div className="slider-container" style={{paddingTop:'50px'}}>
        <Slider {...settings}>
          {cse.map((card) => (
            <Card2
              key={card.title}
              title={card.title}
              text={card.description}
              image={card.imageurl}
              link={card.link}
              buttonText="More info"
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Collegeheadlines