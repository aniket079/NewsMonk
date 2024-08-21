import React from 'react'
import kala from './Landpage.jpeg'

function Card2(props) {
    const truncatedText = props.text ? props.text.substring(0, 300) + '...' : '';

  return (
    <div style={{ width: '35rem'}}>
      <div class="card" style={{height:'750px'}}>
        {props.image && <img class="card-img-top"  style={{height:'500px'}} src={props.image} alt="Card image cap" />}
        <div class="card-body">
          <h5 class="card-title">{props.key}</h5>
          <h5 class="card-title">{props.title1}</h5>
          <h5 class="card-title">{props.title2}</h5>
          <h5 class="card-title">{props.title3}</h5>
          <p class="card-text"><p style={{color:'red',fontWeight:'bold',display:'inline'}}></p>{truncatedText}</p>
          <p class="card-text"><p style={{color:'red',fontWeight:'bold',display:'inline'}}></p>{props.benfits}</p>
        </div>
      </div>
    </div>
  )
}

export default Card2