import {
    Dialog,
    Divider,
    Paper,
    Typography,
    Checkbox,
  } from "@mui/material";
  import { Button } from "@/components/ui/button";
  import {
    DialogTitle,
    DialogContent,
    DialogActions,
    Autocomplete,
    TextField,
    ThemeProvider,
    createTheme,
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
  import { Link, useNavigate } from "react-router-dom";
  
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            color: "black",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
        },
      },
    },
  });
  
  const BookRide = () => {
    const passLongitude = localStorage.getItem("passLongitude");
    const passLatitude = localStorage.getItem("passLati");
    const dispatch = useDispatch();
    const selectedid = useSelector((state) => state.selectedIdReducer);
    const [opendilog, setOpendilog] = useState(false);
    const nav = useNavigate();
  
    const f = () => {
      axios.get("http://localhost:8080/app/bookride/getallrides").then((res) => {
        const updatedRidesData = res.data.map((ride) => {
          const distance = haversine(
            ride.leavingFromLatitude,
            ride.leavingFromLongitude,
            passLatitude,
            passLongitude
          );
  
          return {
            ...ride,
            distance: distance.toFixed(2), // Update the distance property
          };
        });
        setRideData(updatedRidesData);
        setAllRideData(updatedRidesData);
        dispatch(setIdselected(1));
      });
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
  
    const op = () => {
      rideData.map((ride) => {
        const distance = haversine(
          ride.leavingFromLatitude,
          ride.leavingFromLongitude,
          passLatitude,
          passLongitude
        );
  
        return {
          ...ride,
          distance: distance.toFixed(2),
        };
      });
    };
  
    useEffect(() => {
      op();
    }, [rideData]);
  
    useEffect(() => {
      f();
    }, []);
  
    const [leavingFromFilters, setLeavingFromFilters] = useState([]);
    const [goingToFilters, setGoingToFilters] = useState([]);
    let [isOpen, setIsOpen] = useState(true);
    const [passengerLocation, setPassengerLocation] = useState("");
    const [passLatitud, setPassLatitude] = useState();
    const [passLongitud, setPassLongitude] = useState();
    const [suggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
      if (passengerLocation !== "") {
        fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${passengerLocation}&format=json&apiKey=7150d3d1879642babb4e29c827ae645b`
        )
          .then((response) => response.json())
          .then((result) => {
            const newSuggestions = result.results.map((item) => ({
              label: `${item.address_line1} ${item.address_line2}`,
              value: item,
            }));
            setSuggestions(newSuggestions);
          })
          .catch((error) => console.log("error", error));
      }
    }, [passengerLocation]);
  
    function open() {
      setIsOpen(true);
    }
  
    function close() {
      setIsOpen(false);
    }
    const handleLeavingFromcheckbox = (event) => {
      const value = event.target.value;
      setLeavingFromFilters((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    };
    useEffect(() => {
      localStorage.setItem("passLati", passLatitud);
      localStorage.setItem("passLongitude", passLongitud);
      localStorage.setItem("passengerLocation", passengerLocation);
      op();
    }, [passLatitud, passLongitud]);
  
    const handleGoingTocheckbox = (event) => {
      const value = event.target.value;
      setGoingToFilters((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    };
    const logindata = useSelector((state) => state.loginReducer);
    const handleBookRide = () => {
      if (logindata.email === "") {
        alert("please login first");
      } else {
        axios
          .put(
            `http://localhost:8080/app/bookride/updateRideCompletionStatus/${selectedRideData.id}`
          )
          .then()
          .catch((err) => {
            console.log(err);
          });
        axios
          .post(
            `http://localhost:8080/app/userRideHistory/${logindata.email}/${selectedRideData.id}`
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("error occured in posting a booking ride", error);
          });
        console.log("Ride Booked with Driver Id : ", selectedRideData.id);
        console.log("Ride Booked By ", logindata.email);
        f();
        nav("/dummy");
      }
    };
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
    function haversine(lat1, lon1, lat2, lon2) {
      // Convert latitude and longitude from degrees to radians
      const toRadians = (degree) => degree * (Math.PI / 180);
  
      lat1 = toRadians(lat1);
      lon1 = toRadians(lon1);
      lat2 = toRadians(lat2);
      lon2 = toRadians(lon2);
  
      // Haversine formula
      const dLat = lat2 - lat1;
      const dLon = lon2 - lon1;
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      // Earth's radius in kilometers
      const R = 6371;
      const distance = R * c;
  
      return distance;
    }
  
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
          <div className="pt-1 pb-1 pl-1 flex gap-3 m-3">
            <button
              className="py-2 px-4 rounded-full text-xs bg-white border border-lightgray flex items-center"
              onClick={() => {
                const sorted = [...rideData].sort((a, b) => a.distance - b.distance);
                setRideData(sorted);
              }}
            >
              <Typography>Sort by</Typography>
              <KeyboardArrowDownIcon />
            </button>
  
            <button className="py-2 px-4 rounded-full text-xs bg-white border border-lightgray flex items-center transition-all hover:pl-3 hover:pr-3 hover:pt-2">
              <Typography onClick={() => setOpendilog(!opendilog)}>Filter</Typography>
              <FilterListIcon className="ml-2" />
            </button>
  
            <Button
              onClick={open}
              variant="contained"
              style={{ backgroundColor: "black" }}
              className="py-2 px-4 text-sm font-medium text-white rounded-md bg-black"
            >
              Change your location
            </Button>
  
            <Dialog
              open={isOpen}
              onClose={close}
              className="rounded-lg"
              maxWidth="xs"
              fullWidth
            >
              <DialogTitle className="text-base font-medium text-primary">Current Location:</DialogTitle>
              <DialogContent className="bg-secondary p-6">
                <p className="mt-2 text-sm text-primary">
                  Enter your Current Location :{" "}
                  <ThemeProvider theme={theme}>
                    <Autocomplete
                      options={suggestions}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          onChange={(e) => setPassengerLocation(e.target.value)}
                        />
                      )}
                      onChange={(event, newValue) => {
                        if (newValue) {
                          setPassengerLocation(newValue.label);
                          setPassLatitude(newValue.value.lat);
                          setPassLongitude(newValue.value.lon);
                        }
                      }}
                    />
                  </ThemeProvider>
                </p>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black" }}
                  className="py-1.5 px-3 text-sm font-semibold text-white"
                  onClick={() => {
                    close();
                    op();
                    f();
                  }}
                >
                  Got it, thanks!
                </Button>
              </DialogActions>
            </Dialog>
          </div>
  
          <Divider />
  
          <div className="content text-black">
            <div className="ride-papers">
              {rideData.map((data) => (
                <RidePaper key={data.id} value={data} />
              ))}
            </div>
  
            <div className="ride-content flex justify-around">
              {selectedRideData ? (
                <div className="flex flex-col w-3/5">
                  <h1 className="text-5xl text-center">Mon 23 JUL</h1>
                  <img
                    src={routepng}
                    className="w-11/12 mt-10 px-10"
                    alt="Route"
                  />
                  <div className="flex flex-col justify-between pt-2">
                    <div className="flex justify-between">
                      <Typography variant="h5">{selectedRideData.locationFirstName}</Typography>
                      <Typography variant="h5">
                        {selectedRideData.goingLocationFirstName === "Sri Krishna College of Engineering and Technology"
                          ? "SKCET"
                          : selectedRideData.goingLocationFirstName}
                      </Typography>
                    </div>
                    <div className="flex justify-between pt-3">
                      <Typography color="primary" variant="h6" className="text-xl">
                        {selectedRideData.startTime}
                      </Typography>
                      <Typography color="primary" variant="h6" className="text-xl">
                        {selectedRideData.endTime}
                      </Typography>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <Typography className="py-2 text-xl">Price per person</Typography>
                      <Typography className="py-2 text-4xl">Rs.{selectedRideData.price}</Typography>
                    </div>
                    <Divider className="pt-3" />
                  </div>
                  <div className="pt-4">
                    <h1 className="pb-5 text-center text-3xl">Car Info</h1>
                    <div className="flex justify-between items-center">
                      <img src={car} className="h-[18dvh]" alt="Car" />
                      <div>
                        <Typography variant="h4">{selectedRideData.carNumber}</Typography>
                        <Typography variant="h6">{selectedRideData.carName}</Typography>
                        <Typography color="primary" variant="h6" className="text-xl">
                          {selectedRideData.availableSeats} seats available
                        </Typography>
                      </div>
                    </div>
                    <Divider className="pt-5 mt-10" />
                    <div className="pb-4 ">
                      <h1 className="pb-4 pt-5 text-center text-3xl">Driver Profile</h1>
                      <div className="flex justify-between items-center">
                        <div className="w-1/3 flex justify-center">
                          <img src={man} className="h-[24dvh]" alt="Driver" />
                        </div>
                        <div>
                          <Typography variant="h4">{selectedRideData.name}</Typography>
                          <Typography variant="h6">Male</Typography>
                          <Typography variant="h6">Btech IT</Typography>
                          <Typography variant="h6" className="text-xl">
                            {selectedRideData.email}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex justify-center py-8">
                    <Button onClick={() => handleBookRide()}>Book Ride</Button>
                    <Link to="/map">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "black", marginLeft: "10px", color: "white" }}
                      >
                        More Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default BookRide;
  