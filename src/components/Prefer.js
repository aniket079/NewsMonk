import React from 'react'
import  './Textanime.css'
import pre1 from './perfer3.jpeg'
import Option from './Options'
import back from './backprefer.jpeg'
import { Link, useNavigate } from "react-router-dom";
function Prefer() {
    const navigate=useNavigate();
  const move=()=>{
   navigate("/Home");
}
  return (
    <div style={{backgroundImage:`url(${back})`,height:'100vh',marginTop:'0px'}}>
        h
      <div style={{backgroundColor:'white', height:'700px',width:'1000px',marginLeft:'25%',marginTop:'100px',borderRadius:'20px'}}>
        <p class="typewriter-heading" style={{marginLeft:'18px',marginTop:''}}>
        Stories that you would love to crawl over!!!</p>
        <button style={{marginTop:'50px',marginLeft:'90%',backgroundColor:'transparent',borderStyle:'none',width:'80px',color:'#451da0'}} onClick={move}><strong>SKIP</strong></button>
     <div style={{display:'flex',flexDirection:'coloumn',alignItems:'center',justifyContent:'center',marginTop:'20px'}}>
     <div>
        <img style={{height:'550px',width:'450px',borderRadius:'20px'}} src= {pre1}alt="" />
        </div>
        <div>
              <div style={{height:'500px',width:'400px',marginLeft:'50px'}}>
                     <Option/>
              </div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Prefer
