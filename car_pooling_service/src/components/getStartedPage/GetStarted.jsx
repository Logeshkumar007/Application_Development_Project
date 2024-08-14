import React from 'react';
import './GetStarted.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
const GetStarted = () => {
    const nav=useNavigate();
    const handleButton=()=>{
        nav("/homepage");
    }
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='container-content'>
                <TypeAnimation
        sequence={[
          "Hi Skcetians Car La Selvoma?",
          2000,
          "Hi Skcetians Car La drop pandringala?",
          2000,
        ]}
        speed={30}
        repeat={Infinity}
        style={{ fontSize:"4vh",color:"white",wordSpacing:"1vh",letterSpacing:"0.7vh",marginTop:"24dvh",fontFamily:"" }}
      />
                    <Button onClick={handleButton} variant='outlined' sx={{mt:"12vh",height:'9vh',width:'35vh',color:"white",borderBlockColor:"white",borderColor:"white"}}>Get started</Button>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
