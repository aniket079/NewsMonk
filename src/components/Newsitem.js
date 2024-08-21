import React, { Component } from 'react'
import { auth, onAuthStateChanged } from '../firebase'
const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
     console.log(user.displayName);
      // You can access user information like user.displayName, user.email, etc.
    } else {
      // User is signed out
      unsubscribe();
    }
  });
  const truncateDescription = (description) => {
    return description.length > 200 ? description.substring(0, 200) + '...' : description;
  };
export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card bg-image hover-zoom my-3 p-3"  style={{backgroundImage:' linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%)',boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.5)'}} >
        <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill " style={{left:'90%',zIndex:'1',backgroundColor:'red'}}>
              {source}
            </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{color:'yellow'}}>{title}
            </h5>
            <p className="card-text" style={{color:'yellow'}}>{truncateDescription(description)}...</p>
            <p className="card-text" style={{color:'yellow'}}><small className="muted-text">By-{author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl?newsUrl:'./navi.jpeg'} target="_blank" className="btn btn-sm btn-info" style={{backgroundColor:'red'}}>Read More</a>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
