import {
  Button,
  Dialog,
  Divider,
  Paper,
  Typography,
  Checkbox,
} from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./BookRide.css";
import routepng from "./Route2.png";
import routepngblue from "./route-blue.png";
import routepngred from "./route-red.png";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RidePaper from "./RidePaper";
import car from "./car.png";
import man from "./man.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIdselected } from "../Store/Reducer";
import { useNavigate } from "react-router-dom";
const BookRide = () => {
  const passLongitude=localStorage.getItem("passLongitude");
  const passLatitude=localStorage.getItem("passLatitude");
  const passLocation=localStorage.getItem("passLocation");
  const dispatch = useDispatch();
  const selectedid = useSelector((state) => state.selectedIdReducer);
  const [opendilog,setOpendilog]=useState(false);
  const nav=useNavigate();
  const f=()=>{
    axios.get("http://localhost:8080/app/bookride/getallrides").then((res) => {
      console.log("all rides are from book ride ",AllrideData);
      setRideData(res.data);
    setAllRideData(res.data);
    dispatch(setIdselected(1));
  });
  }
  useEffect(() => {
    
  f();
  }, []);
  
  const [leavingFromFilters, setLeavingFromFilters] = useState([]);
  const [goingToFilters, setGoingToFilters] = useState([]);

  const handleLeavingFromcheckbox = (event) => {
    const value = event.target.value;
    setLeavingFromFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleGoingTocheckbox = (event) => {
    const value = event.target.value;
    setGoingToFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const logindata=useSelector(state=>state.loginReducer);
  const handleBookRide=()=>{
    if(logindata.email==="")
      {
        alert("please login first");
      }
      else
      {
        axios.put(`http://localhost:8080/app/bookride/updateRideCompletionStatus/${selectedRideData.id}`)
        .then()
        .catch(err=>{
          console.log(err);
        });
        axios.post(`http://localhost:8080/app/userRideHistory/${logindata.email}/${selectedRideData.id}`)
        .then(response=>{
          console.log(response);
        })
        .catch(error=>{
          console.log("error occured in posting a booking ride",error);
          })
        console.log("Ride Booked with Driver Id : ",selectedRideData.id);
        console.log("Ride Booked By ",logindata.email);
        f();
        nav("/dummy");
    }
  };
  const [rideData, setRideData] = useState([
    {
      id: null,
      name: "",
      phone: "",
      email: "",
      leaving: "",
      going: "",
      availableSeats: 0,
      price: 0.0,
      carName: "",
      carNumber: "",
      date: "",
      startTime: "",
      endTime: "",
    },
  ]);
  const [AllrideData, setAllRideData] = useState([
    {
      id: null,
      name: "",
      phone: "",
      email: "",
      leaving: "",
      going: "",
      availableSeats: 0,
      price: 0.0,
      carName: "",
      carNumber: "",
      date: "",
      startTime: "",
      endTime: "",
      
    },
  ]);
  const [selectedRideData, setSelectedRideData] = useState({
    id: null,
    name: "log",
    phone: "8610528048",
    email: "727722euit096",
    leaving: "Bk pudur",
    going: "adnkcjhnsd",
    availableSeats: 0,
    price: 0.0,
    carName: "ducsd",
    carNumber: "djdj",
    date: "djdjd",
    startTime: "jdjd",
    endTime: "jdj",
  });

  const handleFilterChanges = (e) => {
    console.log("hello this is filter handle func");
    try {
      if (leavingFromFilters.length == 0 && goingToFilters.length == 0) {
      } else {
        const res = axios.post("http://localhost:8080/app/bookride/filter", [
          leavingFromFilters,
          goingToFilters,
        ]);
        res.then((res) => {
          setRideData(res.data);
          console.log("react data", res.data);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("The selecetd data is ", selectedRideData);
  }, [selectedRideData]);
  useEffect(() => {
    console.log("the store selected id is ", selectedid.idSelected);
    try {
      const response = axios.get(
        `http://localhost:8080/app/bookride/selectedValue/${selectedid.idSelected}`
      );
      response.then((res) => {
        console.log(res.data);
        setSelectedRideData(res.data);
      });
    } catch (err) {
      console.log("error in fetching selected value", err);
    }
  }, [selectedid.idSelected]);

  

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
          <button className="filterButton" style={{}}>
            <Typography
              onClick={() => {
                setOpendilog(!opendilog);
              }}
            >
              Filter
            </Typography>
            <Dialog open={opendilog} sx={{}}>
              <div style={{ padding: "1vh" }}>
                <label>Leaving From : </label>
                <div
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    padding: "3vh",
                    gap: "1vh",
                    gridTemplateColumns: "auto auto auto",
                    width: "max-content",
                  }}
                >
                  {AllrideData.map((data) => {
                    return (
                      <div>
                        <Checkbox
                          value={data.leaving}
                          checked={leavingFromFilters.includes(data.leaving)}
                          onChange={handleLeavingFromcheckbox}
                        ></Checkbox>
                        <label>{data.leaving}</label>
                      </div>
                    );
                  })}
                </div>
                <label>Going To : </label>
                <div
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    padding: "3vh",
                    gap: "1vh",
                    gridTemplateColumns: "auto auto auto",
                    width: "max-content",
                  }}
                >
                  {AllrideData.map((data) => {
                    return (
                      <div>
                        <Checkbox
                          value={data.going}
                          checked={goingToFilters.includes(data.going)}
                          onChange={handleGoingTocheckbox}
                        ></Checkbox>
                        <label>{data.going}</label>
                      </div>
                    );
                  })}
                </div>
                <Button
                  variant="contained"
                  sx={{ margin: "2vh" }}
                  onClick={() => {
                    setOpendilog(false);
                    console.log(goingToFilters);
                    console.log(leavingFromFilters);
                    handleFilterChanges();
                  }}
                >
                  Apply filters
                </Button>
              </div>
            </Dialog>
            <FilterListIcon style={{ paddingLeft: "4%" }}></FilterListIcon>
          </button>
        </div>
        <Divider></Divider>
      </div>
      <div className="content" style={{ color: "black" }}>
        <div className="ride-papers">
          {rideData.map((data) => {
            return <RidePaper value={data} />;
          })}
        </div>

        <div
          className="ride-content"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {selectedRideData ? (
            <div
              style={{ display: "flex", flexDirection: "column", width: "60%" }}
            >
              <h1 style={{ fontSize: "5vh", textAlign: "center" }}>
                Mon 23 JUL
              </h1>
              <img
                src={routepng}
                style={{
                  width: "93%",
                  marginTop: "10%",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingTop:"2%"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5">
                    {selectedRideData.leaving}
                  </Typography>
                  <Typography variant="h5">{selectedRideData.going}</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",

                    paddingTop: "3%",
                  }}
                >
                  <Typography
                    color="primary"
                    variant="h6"
                    sx={{ fontSize: "110%" }}
                  >
                    {selectedRideData.startTime}
                  </Typography>
                  <Typography
                    color="primary"
                    variant="h6"
                    sx={{ fontSize: "110%" }}
                  >
                    {selectedRideData.endTime}
                  </Typography>
                </div>
              </div>
              <div style={{ marginTop: "4%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "0vh",
                  }}
                >
                  <Typography
                    sx={{
                      padding: "2%",
                      fontSize: "115%",
                      alignContent: "center",
                    }}
                  >
                    Price per person{" "}
                  </Typography>
                  <Typography
                    sx={{
                      padding: "2%",
                      fontSize: "4vh",
                      alignContent: "center",
                    }}
                  >
                    Rs.{selectedRideData.price}{" "}
                  </Typography>
                </div>
                <Divider sx={{ paddingTop: "3%" }}></Divider>
              </div>
              <div style={{ paddingTop: "4%" }}>
                <h1 style={{ paddingBottom: "5dvh", textAlign: "center" ,fontSize:"155%"}}>
                  Car Info
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <img style={{ height: "18dvh" }} src={car}></img>
                  <div>
                    <Typography variant="h4">
                      {selectedRideData.carNumber}
                    </Typography>
                    <Typography variant="h6">
                      {selectedRideData.carName}
                    </Typography>
                    <Typography
                      color="primary"
                      variant="h6"
                      sx={{ fontSize: "110%" }}
                    >
                      {selectedRideData.availableSeats} seats available
                    </Typography>
                  </div>
                </div>
                <Divider sx={{ paddingTop: "3%" }}></Divider>
                <div style={{ paddingBottom: "4%" }}>
                  <h1
                    style={{
                      paddingBottom: "4dvh",
                      paddingTop: "3dvh",
                      textAlign: "center",
                      fontSize:"155%"
                    }}
                  >
                    Driver Profile
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "35%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={man} style={{ height: "22vh" }}></img>
                  </div>
                  <div>
                    <Typography variant="h4">
                      {selectedRideData.name}
                    </Typography>
                    <Typography variant="h6">Male</Typography>
                    <Typography variant="h6">Btech IT</Typography>
                    <Typography variant="h6" sx={{ fontSize: "115%" }}>
                      {selectedRideData.email}
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "10%",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2dvh",
                  paddingBottom: "5dvh",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    handleBookRide();
                  }}
                >
                  Book Ride
                </Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BookRide;
