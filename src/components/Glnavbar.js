import React, { Component } from 'react'
import nav from './navi.jpeg';
import { auth, onAuthStateChanged } from '../firebase'
const styling = {
    backgroundColor:'#8236FC'


};
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
export class Glnavbar extends Component {
 
    render() {
        return (
            <div style={styling}>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ fontSize: '25px', paddingLeft: '20%' }}  >
                    <a href="/Home" ><img src={nav} alt="" srcset="" style={{ width: '4vw', height: '8vh', borderRadius: '70%' }} /></a>
                    <button className="navbar-toggler" style={{ color: 'dark' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"  >

                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Top-Headlines">Top-Headlines</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Business">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Health">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Science">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Technology">Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/Search">Search</a>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Glnavbar
