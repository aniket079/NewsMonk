import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, sendEmailVerification } from "firebase/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';
  import sign from './signup.jpeg'
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
function App() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handlesumbit = () => {
    if (!values.fname || !values.lname || !values.email || !values.password) {
      seterrormsg("**Fill all Fields**");
      return;
    }
    seterrormsg("");
    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        // Signed up 
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: values.fname,
        });
        navigate("/Options")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
    }
    const handleGoogle = () => {
      signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        alert("Sucessfully Logged in");
       
        navigate("/Prefer")

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
  const [errormsg, seterrormsg] = useState("");

  return (
    <div style={{ backgroundColor:'#0f0842',height:'100vh'}}>
      <div style={{backgroundColor:'#0f0842'}}>
        <p style={{color:'#0f0842'}}>
          .
        </p>
      </div>
      <MDBContainer fluid >

       
        <div style={{marginLeft:'20%',display:'flex',direction:'coloumn',backgroundColor:'white',height:'600px',width:'1200px',marginTop:'8%',justifyContent: 'space-between',alignItems:'space-between',}}>
          <div style={{width:'40%'}}>
            <img src={sign} style={{height:'500px',marginTop:'15%',}}alt="" srcset="" />
          </div>
          <MDBCard className='' style={{ height:'600px', width: '1000px',marginLeft:'100px' }}>
            <MDBCardBody className='p-5 text-center'>
              <b style={{ color: 'red', font: '50px' }}>{errormsg}</b>
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={(event) => setValues((prev) => ({ ...prev, fname: event.target.value }))} />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' onChange={(event) => setValues((prev) => ({ ...prev, lname: event.target.value }))} />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' onClick={handlesumbit} size='md' style={{backgroundColor:'#0f0842'}}>sign up </MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={handleGoogle}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} >
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>


              </div>

            </MDBCardBody>
          </MDBCard>
        </div>


      </MDBContainer>

    </div>

  );
}

export default App;