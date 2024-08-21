import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc } from "firebase/firestore";
import { db, auth } from '../firebase';
import Recommend from './Recommend'
import Navbar from './Navbar';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
const FetchOptions = ({ userId }) => {
  const [labels, setLabels] = useState([]);
  const navigate=useNavigate();
  
  useEffect(() => {
    const fetchUserOptions = async () => {
      try {
        const userDocRef = doc(db, "users", userId);
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log(userData);
          if (userData && userData.options) {
            const fetchedLabels = userData.options.map(option => option.label);
            setLabels(fetchedLabels);
          }
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error('Error fetching user options: ', error);
      }
    };

    fetchUserOptions();
  }, [userId]);// Execute fetchUserOptions() when userId changes
  const prefer=()=>{
    navigate("/prefer");
 }
  return (
    < div>
      <Navbar/>
      <div style={{backgroundColor:'#591da9',height:'60px'}} >
        
       <div style={{display:'flex',justifyContent: 'space-between',paddingTop:'11px'}}>

        <div class="dropdown" style={{marginLeft:'10px',}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" style={{backgroundColor:'#DCD0FF',fontSize:'14PX',color:'blue'}} data-bs-toggle="dropdown" aria-expanded="false">
  <strong>PREFERENCES</strong>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  {labels.map((label, i) => (
    <li><a class="dropdown-item" href="#">{label}</a></li>
  ))}
   
  </ul>
 
</div>
<div style={{marginLeft:'15%'}}>
<p className='fetch' style={{fontSize:'20px',fontStyle:'bold',marginLeft:'0px'}}><strong>Here's the news preferences based on your selections.. </strong></p>
</div>
<div style={{marginLeft:'50%'}}>
<button onClick={prefer}  style={{marginRight:'10px',borderRadius:'5px',borderStyle:'none',backgroundColor:'#DCD0FF',height:'37px',width:'180px',fontSize:'14px',color:'blue'}}><strong>UPDATE PREFERENCES</strong></button>
</div>

</div>
       </div>
     
     
        {labels.map((label, i) => (
          <Recommend key={label} pageSize={6} country="in" category={label} />
        ))}
      
    </div>
  );
};

// Add the following check before using `user.uid`


export default FetchOptions;