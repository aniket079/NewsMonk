import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import yog from './yogajss.jpeg'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import Nav from './Nav';
export default function Jssise() {
  const [ise, setise] = useState([]);
  const isecollectionRef = collection(db, "ise");
  useEffect(() => {
    const getise = async () => {
      //read the data
      try {
        const data = await getDocs(isecollectionRef);
        const filterData = data.docs.map((doc) => (
          { ...doc.data() }
        ));
        console.log(filterData);
        setise(filterData);
      }
      catch (err) {
        console.error(err);
      }
    };
    getise();
  }, []);
  return (
    <div>
      
        <Nav/>
        <div className="container my-3">
          <h1 className="text-center text-uppercase  my-3" style={{color:'black'}}>ise-News</h1>
          <div className="row">
            { ise.map((element) => {
              return <div className="col-md-4">
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.imageurl?element.imageurl :"https://firebasestorage.googleapis.com/v0/b/news-monk-c17ce.appspot.com/o/ISEFinal%20(1).jpg?alt=media&token=bf6d7257-b49e-48c1-9962-fa8a6158d3c7"}newsUrl={element.link}
                  author={element.author}  />
              </div>
            })}
          </div>
        </div>

      </div>
  )
}
