import React from 'react'
import kala from './Landpage.jpeg'

function Card2(props) {
    const truncatedText = props.text ;

  return (
    <div style={{ width: '35rem'}}>
      <div class="card" style={{height:'500px'}}>
        {props.image && <img class="card-img-top"  style={{height:'300px'}} src={props.image} alt="Card image cap" />}
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-title">{props.english}</h5>
          <h5 class="card-title">{props.sanskrit}</h5>
          <p class="card-text"><p style={{color:'red',fontWeight:'bold',display:'inline'}}></p>{truncatedText}</p>
          <a href={props.link} class="btn btn-primary">{props.buttonText}</a>
        </div>
      </div>
    </div>
  )
}

export default Card2