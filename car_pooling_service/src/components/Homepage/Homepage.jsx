import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import "./Homepage.css";
import png1 from './carowner.png';
import png2 from './people.png';
const Homepage = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            //   position:"sticky",
              display: "flex",
            fontSize: "0.9rem",
            letterSpacing: "0.2vh",
            justifyContent: "space-between",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <h3>CAR LA SELVOM</h3>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "space-between",
              marginRight: "2%",
            }}
          >
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Profile</h3>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <div>
            <div className="container-home">

          <div className="text-container">
            <div className="line1">
              <h1>Car Pooling Service For By Of Skcetians</h1>
            </div>
            <div className="line2">
              <h1>
                The Car Pooling Service for SKCETians is a convenient platform
                designed to connect students and staff of SKCET for shared
                rides, promoting cost-effective and eco-friendly commuting
              </h1>
            </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "rgba(178, 243, 178,0)",
                height: "70dvh",
                width: "50dvw",
                
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  marginLeft: "16%",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "5%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "1.3rem",
                    gap: "vh",
                    padding: "0rem",
                  }}
                >
                  <h2>For </h2>
                  <h1 style={{ color: "green" }}>Co-Rider</h1>
                </div>
                <h3>
                  hey this is logesh ,i am currently developing this
                  component,as i dont have content i am typing this
                </h3>
                <Button
                  variant="contained"
                  sx={{
                    width: "25%",
                    backgroundColor: "green",
                    marginTop: "1%",
                  }}
                >
                  Create Ride
                </Button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgba(178, 243, 178,0.3)",
                height: "70dvh",
                width: "50dvw",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  marginLeft: "16%",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "5%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "1.3rem",
                    gap: "vh",
                    padding: "0rem",
                  }}
                >
                  <h2>For </h2>
                  <h1 style={{ color: "green" }}>Owner</h1>
                </div>
                <h3>
                  hey this is logesh ,i am currently developing this
                  component,as i dont have content i am typing this
                </h3>
                <Button
                  variant="contained"
                  sx={{
                    width: "25%",
                    backgroundColor: "green",
                    marginTop: "1%",
                  }}
                >
                  Book ride
                </Button>
              </div>
            </div>
          </div>
        </div>
       
        <div className="about" style={{marginTop:"5%"}}>
        
          <h2>Why use Car-La-Selvom ?</h2>
          <div className="use">
            <div className="use1">
              <h3>Easy Connect for Rides</h3>
              <p>
              Our rag pickers are available around the clock to collect your recyclable waste conveniently.
              </p>
            </div>
            <div className="use2">
              <h3>Comfortable Ride</h3>
              <p>
              Enjoy the convenience of our 24/7 door-to-door recyclable waste collection service.
              </p>
            </div>
          
            <div className="use3">
              <h3>Share Expense</h3>
              <p>
              Our rag pickers help you sell your recyclable waste at any time.
              </p>
            </div>
            <div className="use4" >
              <h3>Eco-Friendly</h3>
              <p>
              
              We offer flexible pricing for your recyclable waste,ensuring the best deal.              </p>
            </div>
          </div>
        </div>
        <div style={{height:"40dvh",backgroundColor:"white",display:"flex",width:"100%",justifyContent:"space-between",marginTop:"5%"}}>
          <div style={{width:"30%",marginLeft:"10%",alignContent:"center",lineHeight:"1.5rem",fontSize:"1.025rem"}}>

                  <p>Heading home or college ? Why not turn your empty car seats into cash
          with Sri Krishna's students ! Publish a ride and let other students
          hop in along your route. Not only will you be helping your fellow
          classmates save money on transportation, but you'll also earn some
          extra cash to cover your petrol expenses.</p>
          </div>
                  <img style={{marginRight:"10%"}}src={png2}></img>
        </div>
        <div style={{height:"40dvh",backgroundColor:"white",display:"flex",width:"100%",justifyContent:"space-between",marginTop:"5%"}}>
                  <img style={{marginLeft:"10%"}}src={png1}></img>
          <div style={{width:"30%",marginRight:"10%",alignContent:"center",lineHeight:"1.5rem",fontSize:"1.025rem"}}>

                  <p>Heading home or college ? Why not turn your empty car seats into cash
          with Sri Krishna's students ! Publish a ride and let other students
          hop in along your route. Not only will you be helping your fellow
          classmates save money on transportation, but you'll also earn some
          extra cash to cover your petrol expenses.</p>
          </div>
        </div>
      </div>
        </div>
      
  
  );
};

export default Homepage;
