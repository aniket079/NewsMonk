import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import Newsitem from './Newsitem';
import yog from './yogajss.jpeg'
import nav from './navi.jpeg';
import Spinner from './Spinner';
import Nav from './Nav';

export default function Jsscse() {
  const [cse, setcse] = useState([]);
  const csecollectionRef = collection(db, "cse");
  const date="";
  useEffect(() => {
    const getcse = async () => {

      //read the data
      try {
        const data = await getDocs(csecollectionRef);
        const filterData = data.docs.map((doc) => (
          { ...doc.data() }
        ));
        setcse(filterData);
        console.log(filterData);
      
        
        // Create a date string with UTC offset
      
        
      }
      catch (err) {
        console.error(err);
      }
    };
    getcse();
  }, []);
  return (
    <div>
         <Nav/>
        <div className="container my-3">
          <h1 className="text-center text-uppercase  my-3" style={{color:'black'}}>cse-News</h1>
          <div className="row">
            { cse.map((element) => {
              return <div className="col-md-4">
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.imageurl?element.imageurl:"https://firebasestorage.googleapis.com/v0/b/news-monk-c17ce.appspot.com/o/FinalCSE%20(1).jpg?alt=media&token=d8910772-ee5f-48d4-9ab2-bf0e2a048307"}newsUrl={element.link}
                  author={element.author} date={Date(element.time)}   />
              </div>
            })}
          </div>
        </div>

      </div>
  )
}
