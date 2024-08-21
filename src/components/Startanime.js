import React from 'react'
import  './Image.css' 
import logo from './navi.jpeg';
function Startanime() {
  return (
    <div className='land'>
        <img src={logo} style={{width:'250px' ,backgroundColor:'transparent',borderColor:'black', borderRadius:'100%',border:'none',marginLeft:'0%'}}  alt="" srcset="" />
      <h1 id='start'><strong>NEWS-MONK</strong></h1>
      <button style={{backgroundColor:'#aac4e7' , height:'70px',width:'150px' ,borderRadius:'15px'}}><a style={{color:'#eb631b' , fontSize:'20px'}} href="/Home">Lets Start</a></button>
    </div>
  )
}

export default Startanime
