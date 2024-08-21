import React from 'react'
import kala from './Landpage.jpeg'

function Card(props) {
  return (
    <div style={{ width: '35rem'}}>
      <div class="card" style={{height:'700px'}}>
        {props.image && <img class="card-img-top"  style={{height:'500px'}} src={props.image} alt="Card image cap" />}
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text"><p style={{color:'red',fontWeight:'bold',display:'inline'}}>VISON:</p>"{props.text}"</p>
          <a href={props.link} class="btn btn-primary">{props.buttonText}</a>
        </div>
      </div>
    </div>
  )
}

export default Card