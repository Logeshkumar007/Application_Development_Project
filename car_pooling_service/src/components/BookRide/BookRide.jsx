import { Button, Divider, Paper, Typography } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./BookRide.css";
import routepng from "./Route2.png";
import routepngblue from "./route-blue.png";
import routepngred from "./route-red.png";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RidePaper from "./RidePaper";
import car from './car.png';
import man from './man.png';
import { useEffect, useState } from "react";
import axios  from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setIdselected } from "../Store/Reducer";
const BookRide = () => {
  const dispatch=useDispatch();
 const selectedid=useSelector(state=>state.selectedIdReducer);

const [rideData, setRideData] = useState([{
  id: null,
  name: '',
  phone: '',
  email: '',
  leavingFrom: '',
  goingTo: '',
  availableSeats: 0,
  price: 0.0,
  carName: '',
  carNumber: '',
  date: '',
  startTime: '',
  endTime: ''
}]);
const [selectedRideData, setSelectedRideData] = useState({
  id: null,
    name: 'log',
    phone: '8610528048',
    email: '727722euit096',
    leavingFrom: 'Bk pudur',
    goingTo: 'adnkcjhnsd',
    availableSeats: 0,
    price: 0.0,
    carName: 'ducsd',
    carNumber: 'djdj',
    date: 'djdjd',
    startTime: 'jdjd',
    endTime: 'jdj'
    
});
useEffect(()=>{
  console.log("The selecetd data is ",selectedRideData);
},[selectedRideData])
useEffect(()=>{
  console.log("the store selected id is ",selectedid.idSelected);
  try{

    const response=axios.get(`http://localhost:8080/app/bookride/selectedValue/${selectedid.idSelected}`);
    response.then((res)=>{
      console.log(res.data);
      setSelectedRideData(res.data);
    })
  }
  catch(err)
  {
    console.log("error in fetching selected value",err);
  }
  },[selectedid.idSelected]);





useEffect(()=>{
  console.log("ride data",rideData);

},[rideData])

  useEffect(()=>{
  
      axios.get('http://localhost:8080/app/bookride/getallrides').then((res)=>{
        console.log(res.data);
      setRideData(res.data);
        dispatch(setIdselected(1));
        
      
     })
  },[])
  return (
    <div>
      <div className="sortingContainer">
        <div className="containerItems">
          <button
            style={{
              padding: "0.7vh",
              borderRadius: "10vh",
              fontSize: "75%",
              backgroundColor: "white",
              display: "flex",
              border: "1.5px solid lightgrey",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <Typography>Sort by</Typography>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </button>
          <button
            style={{
              padding: "0.7vh",
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: "10vh",
              fontSize: "75%",
              backgroundColor: "white",
              display: "flex",
              border: "1.5px solid lightgrey",
            }}
          >
            <Typography>Filter</Typography>
            <FilterListIcon style={{ paddingLeft: "4%" }}></FilterListIcon>
          </button>
          <button
            style={{
              padding: "0.7vh",
              borderRadius: "10vh",
              fontSize: "75%",
              backgroundColor: "white",
              display: "flex",
              border: "1.5px solid lightgrey",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <Typography>Sort by</Typography>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </button>
        </div>
        <Divider></Divider>
      </div>
      <div className="content">
        <div className="ride-papers">
          {rideData.map((data) => {
            return <RidePaper value={data}/>;
          })}
        </div>





        <div className="ride-content" style={{display:"flex",justifyContent:"space-around"}}>
          
          {selectedRideData?
          
          <div style={{display:"flex",flexDirection:"column",width:"60%"}}>
           
            <h1 style={{ fontSize: "5vh",textAlign:"center" }}>Mon 23 JUL</h1>
              <img
                src={routepng}
                style={{ width: "80%", marginTop: "10%",paddingLeft:"10%",paddingRight:"10%" }}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    
                  }}
                >
                  <Typography variant="h5">{selectedRideData.leavingFrom}</Typography>
                  <Typography variant="h5">{selectedRideData.goingTo}</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    
                    paddingTop: "3%",
                  }}
                >
                  <Typography color="primary" variant="h6" sx={{fontSize:"110%"}}>
                    {selectedRideData.startTime}
                  </Typography>
                  <Typography color="primary" variant="h6" sx={{fontSize:"110%"}}>
                    {selectedRideData.endTime}
                  </Typography>
                </div>
              </div>
                <div style={{  marginTop: "4%" }}>
                
                  <div style={{display:"flex",justifyContent:"space-between",paddingTop:"0vh"}}>

                  <Typography sx={{padding:"2%",fontSize:"115%",alignContent:"center"}}>Price per person </Typography>
                  <Typography sx={{padding:"2%",fontSize:"4vh",alignContent:"center"}}>Rs.{selectedRideData.price} </Typography>
                  </div>
                  <Divider sx={{paddingTop:"3%"}}></Divider>
                </div>
                <div style={{paddingTop:"4%"}}>
                    <h1 style={{paddingBottom:"5dvh",textAlign:"center"}}>Car Info</h1>
                    <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                        <img style={{height:"18dvh"}}src={car}></img>
                        <div>
                            <Typography variant="h4">{selectedRideData.carNumber}</Typography>
                            <Typography variant="h6">{selectedRideData.carName}</Typography>
                            <Typography color="primary" variant="h6" sx={{fontSize:"110%"}}>{selectedRideData.availableSeats} seats available</Typography>
                        </div>
                    </div>
                  <Divider sx={{paddingTop:"3%"}}></Divider>
                    <div style={{paddingBottom:"4%"}}>
                    <h1 style={{paddingBottom:"4dvh",paddingTop:"3dvh",textAlign:"center"}}>Driver Profile</h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{width:"35%",display:"flex",justifyContent:"center"}}>

                        <img src={man} style={{height:"22vh"}}></img>
                        </div>
                        <div>
                            <Typography variant="h4">LogeshKumar</Typography>
                            <Typography variant="h6">Male</Typography>
                            <Typography variant="h6">Btech IT</Typography>
                            <Typography variant="h6" sx={{fontSize:"115%"}}>727722euit096@skcet.ac.in</Typography>
                        </div>
                    </div>
                </div>
                        <div style={{marginTop:"10%",display:"flex",justifyContent:"center",paddingTop:"2dvh",paddingBottom:"5dvh"}}>
                            <Button variant="contained">Book Ride</Button>
                        </div>
                

            </div>
  :<div></div>}
          </div>
        </div>
      </div>
   
  );
};
export default BookRide;
