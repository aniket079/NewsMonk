import React, { useEffect,useState,Component } from 'react'

import { onAuthStateChanged ,signOut} from "firebase/auth";
import {  auth,googleProvider } from "../firebase";
import nav from './Landpage.jpeg';

const GradientStyle = {
  backgroundColor:'white',
  position:'sticky',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  marginTop:'0px',
  marginBottomh :'0px',
  height:'70px'
};

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(auth, (user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  };
  handleSignOut() {
    signOut(auth)
      .then(() => alert("SignedOut"))
      .catch((error) => console.error('Error signing out:', error));
  }
  
  render() {
    const { user } = this.state;
    return (
      <div style={GradientStyle}>
      <nav className="navbar navbar-expand "style={{backgroundColor:'' ,height:'70px'}}>
  <div className="container-fluid" style={{paddingLeft:'18px'}}>
    <a className="navbar-brand" href="#" ><img src={nav} style={{width:'3vw',height:'5vh',borderRadius:'70%'}} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " style={{marginLeft:'30%', fontSize:'18px'}} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item "style={{color:'black'}} >
          <a className="nav-link" href="/Top-Headlines"><strong>GLOBAL-NEWS</strong></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Jsslanding"> <strong>JSSATEB</strong></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Recommend"> <strong>Recommend</strong></a>
        </li>
        
      
      </ul>
      {user ? (
          <div  style={{marginLeft:'35%',  color:'black'}}>
            <p style={{display:'inline',marginRight:'5px'}}><strong>Welcome, {user.displayName}!</strong></p>
            
            <button type="button"  id="login-button" class="btn btn-success" onClick={this.handleSignOut}>Logout</button>
          </div>
        ) : (
          <div>
           
            <div>
        <button type="button"  id="login-button" class="btn btn-success"> <a className="nav-link" href="/Log">Login</a></button>
         </div>
          </div>
        )}


     
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar
