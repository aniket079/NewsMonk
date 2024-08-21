import React, { useState } from 'react';
import land from './Landpage.jpeg'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import maam from './maam.jpeg';
import sans from './sans.jpeg';
import yummy from './amitesh.jpeg';
import koul from './koul.jpeg';
import ani from './passphtot.jpg'

export default function App() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <div style={{ marginTop: '40px', height: '500px' }}>
            <div style={{ marginLeft: '40%' }}>

                <MDBTabs >
                    <MDBTabsItem >
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            <p style={{ fontSize: '20px' }}>About Project</p>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            <p style={{ fontSize: '20px' }}> Guide</p>

                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            <p style={{ fontSize: '20px' }}>Members</p>

                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
            </div>

            <MDBTabsContent>
                <MDBTabsPane open={basicActive === 'tab1'}>
                    <div className='project' style={{ backgroundColor: '', height: '400px', display: 'flex', flexDirection: 'coloumn' }}>
                        <div style={{ backgroundColor: '#d7c9b2', height: '400px', width: '50vw' }}>
                        <div className=' hover-zoom '  style={{height:'300px',borderRadius:'20px',marginLeft:'40%',marginTop:'5%'}}>
                            <img className=' hover-zoom ' src={land} alt="" srcset="" style={{height:'300px',borderRadius:'50%'}} />
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#4b227a', height: '400px', width: '50vw',fontSize:'20px' }}>
                        <p style={{marginTop:'7%',marginLeft:'2%',color:'white'}}>
                        "The development of News Monk indeed represents a significant leap forward in revolutionizing news consumption within college communities. Through its focus on addressing critical challenges, such as secure user authentication and centralized communication, News Monk offers a dynamic and personalized news experience. Its integration of diverse technologies and user-centric design ensures accessibility and engagement, while rigorous testing and documentation initiatives emphasize reliability and usability. Overall, News Monk sets a new standard for personalized, secure, and user-friendly platforms tailored to educational institutions' needs, promising to foster communication, engagement, and connectivity within college communities"
                        </p>
                        </div>
                    </div>
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab2'}> <div className='project' style={{  backgroundColor: '#d7c9b2', height: '400px', display: 'flex', flexDirection: 'coloumn' }}>
                    <div style={{ backgroundColor: '', height: '400px', width: '50vw' }}>
                    <div className=' hover-zoom '  style={{height:'300px',marginLeft:'40%',marginTop:'2%', backgroundColor: '#d7c9b2'}}>
                            <img src={maam} alt="" srcset="" style={{height:'300px',borderRadius:'50%'}} />
                            </div>
                            <p style={{marginLeft:'46%',marginTop:'5px',fontSize:'18px',color:'black'}}>
                            Dr. Pavithra G S      
                            </p>
                            <p style={{marginLeft:'44%',fontSize:'18px',color:'black'}}>
                            Assistant Professor     
                            </p>
                    </div>
                    <div style={{ backgroundColor: '#4b227a', height: '400px', width: '50vw' }}>
                       <p style={{marginTop:'7%',marginLeft:'2%',color:'white',fontSize:'20px'}} >
                       Dr. Pavithra G S is an Assistant Professor at JSS Academy of Technical Education with 20 years of teaching and 8 years of research experience. She holds a Ph.D. in Wireless Sensor Networks and has published papers in Web of Science and SCOPUS-indexed journals. Dr. Pavithra has presented at various conferences and received a consultancy grant from Wipro Technologies. She is a member of professional bodies like the Institute of Engineers (India) and the International Association of Engineers.
                       </p>
                    </div>
                </div></MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab3'}>
                    <div className='project' style={{ backgroundColor: 'red', height: '400px', display: 'flex', flexDirection: 'coloumn' }}>
                        <div style={{ backgroundColor: '#d7c9b2', height: '400px', width: '25vw' }}>
                        <div  className=' hover-zoom '  style={{height:'100px',borderRadius:'20px',marginLeft:'40%',marginTop:'5%',}}>
                            <img src={ani} alt="" srcset="" style={{height:'200px',borderRadius:'50%'}} />
                            </div>
                            <div style={{fontSize:'20px',color:'black',marginTop:'80px',marginLeft:'5px'}}>
                            <p>Aniket Tiwari</p>
                            <p>Computer Science and Engineering</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#d7c9b2', height: '400px', width: '25vw' }}>
                        <div  className=' hover-zoom '  style={{height:'100px',borderRadius:'20px',marginLeft:'40%',marginTop:'5%'}}>
                            <img src={yummy} alt="" srcset="" style={{height:'200px',borderRadius:'50%'}}/>
                            </div>
                            <div style={{fontSize:'20px',color:'black',marginTop:'80px',marginLeft:'5px'}}>
                           <p>Amitesh Singh</p>
                           <p>Computer Science and Engineering</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#d7c9b2', height: '400px', width: '25vw' }}>
                        <div className=' hover-zoom '  style={{height:'100px',borderRadius:'20px',marginLeft:'50%',marginTop:'5%'}}>
                            <img src={sans} alt="" srcset="" style={{height:'200px',borderRadius:'50%'}} />
                            </div>
                            <div style={{fontSize:'20px',color:'black',marginTop:'80px',marginLeft:'5px'}}>
                            <p>Sanskriti Singh</p>
                            <p>Computer Science and Engineering</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#d7c9b2', height: '400px', width: '25vw' }}>
                        <div  className=' hover-zoom '  style={{height:'100px',borderRadius:'20px',marginLeft:'40%',marginTop:'5%'}}>
                            <img src={koul} alt="" srcset="" style={{height:'200px',borderRadius:'50%'}} />
                            </div>
                            <div style={{fontSize:'20px',color:'black',marginTop:'80px',marginLeft:'5px'}}>
                            <p>Srishti Koul</p>
                           <p>Computer Science and Engineering</p>
                            </div>
                        </div>
                    </div>
                </MDBTabsPane>
            </MDBTabsContent>
        </div>
    );
}