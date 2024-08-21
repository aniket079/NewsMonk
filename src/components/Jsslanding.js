import React, { useEffect, useState, Component } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import nav from './navi.jpeg';
import jssland from './jssland.jpeg'
import yog from './yogajss.jpeg'
import NSS from './NSS.jpeg'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
} from 'mdb-react-ui-kit';
import Cards from './Cards';
import About from './About';

const GradientStyle = {


    color: 'white',

    borderShadow: 'none',



};
export class Jsslanding extends Component {

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
                <nav className="navbar navbar-expand " style={{ backgroundColor: '#DCD0FF', width: '100vw' }}>
                    <div className="container-fluid" style={{ width: '90%' }}>
                        <a className="navbar-brand" href="/Home" ><img src={nav} style={{ width: '4vw', height: '8vh', borderRadius: '70%' }} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " style={{ fontSize: '25px', paddingLeft: '35%', display: 'flex', justifyContent: 'space-between' }} id="navbarSupportedContent">
                            <ul className="navbar-nav " style={{}} >

                                <li className="nav-item " style={{ color: 'yellow' }} >
                                    <a className="nav-link" href="/Jsscse"><strong>CSE</strong></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/Jssise"> <strong>ISE</strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Jssnss"> <strong>NSS</strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Yoga"> <strong>YOGA</strong></a>
                                </li>



                            </ul>

                        </div>
                    </div>
                    {user ? (
                        <div style={{ color: 'black', marginRight: '35px' }}>
                            <p ><strong>Welcome, {user.displayName}!</strong></p>

                            <button onClick={this.handleSignOut}>Logout</button>
                        </div>
                    ) : (
                        <div>

                            <div style={{ color: 'black', marginRight: '35px' }}>
                                <button type="button" id="login-button" class="btn btn-success"> <a className="nav-link" href="/Log">Login</a></button>
                            </div>
                        </div>
                    )}
                </nav>

                <div >
                </div>
                <Cards />
                <About/>
            </div>

        )
    }
}

export default Jsslanding
