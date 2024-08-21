import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import yog from './yogajss.jpeg'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import Nav from './Nav';
export default function Jssnss() {
  const [nss, setnss] = useState([]);
  const nsscollectionRef = collection(db, "nss");
  useEffect(() => {
    const getnss = async () => {

      //read the data
      try {
        const data = await getDocs(nsscollectionRef);
        const filterData = data.docs.map((doc) => (
          { ...doc.data() }
        ));
        console.log(filterData);
        setnss(filterData);

      }
      catch (err) {
        console.error(err);
      }
    };
    getnss();
  }, []);
  return (
    <div>
      
        <Nav/>
        <div className="container my-3">
          <h1 className="text-center text-uppercase  my-3" style={{color:'black'}}>nss-News</h1>
          <div className="row">
            { nss.map((element) => {
              return <div className="col-md-4">
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.imageurl?element.imageurl:"https://firebasestorage.googleapis.com/v0/b/news-monk-c17ce.appspot.com/o/NSSFinal.jpg?alt=media&token=da8a1686-8ea0-494f-a4bf-021cf46f8ff6"} newsUrl={element.link}
                  author={element.author}  />
              </div>
            })}
          </div>
        </div>

      </div>
  )
}
