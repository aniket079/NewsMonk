import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import img from './forgot.jpeg';
const Passwordreset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        alert("email sent successfully, please check your mail");
        navigate("/Log");
        
      })
      .catch((error) => {
        // Error occurred while sending password reset email
        
        alert(`Invalid or Notregistered email address: ${error.message}`);
      });
      
  };

  return (
    <div style={{ height: '100vh',backgroundColor:'#0f0842' }}>
      h
      <div style={{ marginLeft: '35%', height:'700px',width:'600px',backgroundColor:'white', marginTop:'5%',paddingLeft:'2%',borderRadius:'5%'}}>
        <div>
          <img src={img} style={{height:'450px',}} alt="" srcset="" />
        </div>
        <div>
          <h2 style={{ color: 'black' }}>Reset Password</h2>
          <h6>Enter the email associated with your account and we will send an email with instructions to reset your password.</h6>
        </div>
        <input style={{ width: '70%', borderRadius: '10px',marginTop:'5%' ,marginLeft:'12%', paddingLeft:'22%'}}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button onClick={handlePasswordReset} style={{marginTop:'3%',marginLeft:'25%',borderRadius:'20px',backgroundColor:'#0f0842',color:'white',width:'40%'}}><strong>Send Email</strong></button>
        {message && <p>{message}</p>}
      </div>


    </div>

  );
};

export default Passwordreset;
