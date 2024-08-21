import React, { Component } from 'react'
import lg from './lpage.jpg'
import lg1 from './lpage2.jpg'
import tilo from './tilo.jpeg'
import land from './Landpage.jpeg'
import fon from './NewsMonkfont.png'
import Navbar from './Navbar'
import bg from './bg/mainwall.jpg'
import News from './News'
import nav from './navi.jpeg';
import About from './About'
import {
  MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBRipple,
  MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn

} from 'mdb-react-ui-kit';
import Headlines from './Headlines'
import Collegeheadlines from './Collegeheadlines'
const gradientStyle = {
  // backgroundImage: 'linear-gradient(-225deg, #1e3c72 0%, #2a5298 56%)',
  backgroundColor:'#8236FC',
  fontFamily: "Poppins", 
  color:'white'
};
const cardStyle = {
  backgroundImage: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',

  opacity: '1', color: 'white', boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.5)'
};

export class Landing extends Component {

  render() {
    return (
      <div style={{ backgroundColor:'#FEF3FF',padding:'0,0,0,0'}}>
       <div  style={gradientStyle}>

        <div  style={{marginBottom:'0px',marginLeft:'30%', display:'flex', justifyContent:'space-between'}}>
          {/* <h1 className="display-1" style={{marginLeft:'38%'}}><strong>NewsMonk</strong></h1> */}
          <div >

          <img src={land} alt=""  style={{height:'15vh',width:'15vh',borderRadius:'70%',marginTop:'3%',backgroundBlendMode:'multiply'}}/>
          <img src={fon} style={{ marginTop:'3%',marginLeft:'10px'}}   alt="" />
       </div>
          </div>
          <p className="lead" style={{marginLeft:'17%',fontSize:'30px',marginBottom:'0px'}}>From Global Headlines to Campus Chronicles: Your Source for All Stories That Matter</p>
        
         
        </div>
          <Navbar />
          <Headlines/>
          <Collegeheadlines/>
          <About/>
           

        
      

    
        <MDBFooter className='bg-light text-center text-white'>
          <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#3b5998' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='facebook-f'/>
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#55acee' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#dd4b39' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='google' />
              </MDBBtn>
              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='instagram' />
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#333333' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>


      </div>
    )
  }
}

export default Landing
