import React, { useState } from 'react';
import { collection, doc, updateDoc } from "firebase/firestore";
import {db,auth} from '../firebase';
import Fetching from './Fetching'
import chek from './backprefer.jpeg'
import { Link, useNavigate } from "react-router-dom";
const CheckboxOptions = () => {
  const [options, setOptions] = useState([
    {id: 6, label: 'top-headlines',placeholder: 'Top-headlines', checked: false},
    {id: 1, label: 'business',placeholder: 'Business', checked: false},
    {id: 2, label: 'entertainment', placeholder: 'Entertainment',checked: false},
    {id: 3, label: 'health', placeholder: 'Health',checked: false},
    {id: 4, label: 'sports', placeholder: 'Sports',checked: false},
    {id: 5, label: 'technology', placeholder: 'Technology',checked: false},
    // Add more options as needed
  ]);
  const user = auth.currentUser;
  const navigate =useNavigate();
  const handleSave = async () => {
    try {
      if (user) {
        const selectedOptions = options.filter(option => option.checked);
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          options: selectedOptions,
          timestamp: new Date(),
        });
        alert('Options saved successfully!');
        navigate("/Home")

      } else {
        alert('Please sign in to save options.');
      }
    } catch (error) {
      console.error('Error saving options: ', error);
      alert('Error saving options. Please try again later.');
    }
  };

  const handleClick = (id) => {
    setOptions(options.map(o =>
      o.id === id ? {...o, checked: !o.checked} : o
    ));
  };

  return (
    <div>
      {options.map(option => (
        <div key={option.id} onClick={() => handleClick(option.id)} style={{display:'flex',padding:'20px',cursor: 'pointer', border: '1px solid #ccc', display: 'flex', alignItems: 'center',backgroundColor:'white',marginBottom:'19px',borderRadius:'20px',backgroundImage:`url(${chek})`,  backgroundSize: 'cover'}}>
          <div style={{marginRight: '10px', color:'white'}}>{option.checked ? '✔' : ''}</div>
          <div style={{color:'white',marginLeft:'33%',fontSize:'17px'}}>{option.placeholder}</div>
        </div>
      ))}
      <button onClick={handleSave} style={{marginLeft:'33%',borderRadius:'20px',backgroundColor:'#451da0',color:'white',width:'120px',height:'40px',fontSize:'20px'}}>Continue</button>
  
    </div>
  );
};

export default CheckboxOptions;