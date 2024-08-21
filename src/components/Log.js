import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { getAuth, setPersistence, browserLocalPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import forgotpass from './Passwordreset'
import land from './Landpage.jpeg';
import sp from './loginphoto.jpeg';
import kala from './Landpage.jpeg'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { auth, googleProvider } from "../firebase";
import Landing from './Landing';
function App() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handlesumbit = () => {
    if (!values.email || !values.password) {
      seterrormsg("**Fill all Fields**");
      return;
    }
    seterrormsg("");
    console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        alert("Sucessfully Logged in");

        const auth = getAuth();

        // Set local persistence when the component mounts
        setPersistence(auth, browserLocalPersistence)
          .then(() => {
            console.log("Local persistence set successfully");
          })
          .catch((error) => {
            console.error("Error setting local persistence:", error);
          });

        navigate("/Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Credentials");
        // ..
      });
  }
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        alert("Sucessfully Logged in");
        navigate("/Home");

        const auth = getAuth();

        // Set local persistence when the component mounts
        setPersistence(auth, browserLocalPersistence)
          .then(() => {
            console.log("Local persistence set successfully");
          })
          .catch((error) => {
            console.error("Error setting local persistence:", error);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Invalid Credentials");
        // ..
      });

  }
  const tour=()=>{
    navigate("/Home");
  }


  const [errormsg, seterrormsg] = useState("");


  return (
    <div style={{backgroundColor:'#0f0842',height:'100vh',marginTop:''}}>

      <MDBContainer className="" style={{paddingTop:'10%',backgroundColor:''}} >

        <MDBCard style={{backgroundColor:'white'}}>
          <MDBRow className=''>

            <MDBCol md='6' >
              <MDBCardImage src={sp} alt="login form" className='rounded-start w-100' style={{ height:'100%' }} />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon  style={{ color: '#ff6219' }} onClick={tour}/>
                  <span className="h1 fw-bold mb-0">NewsMonk</span>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} id='formControlLg' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4' label='Password' onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} id='formControlLg' type='password' size="lg" />

                <MDBBtn className="mb-4 px-5" style={{backgroundColor:'#0f0842'}} onClick={handlesumbit} size='lg'>Login</MDBBtn>
                <MDBBtn className="mb-4 px-5" style={{backgroundColor:'#0f0842'}} onClick={handleGoogle} size='lg'>LoginWithGoogle</MDBBtn>
                <a className="small text-muted" href="/Forgot" >Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/Signup" style={{ color: '#393f81' }}>Register here</a></p>

                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>


    </div>

  );
}

export default App;