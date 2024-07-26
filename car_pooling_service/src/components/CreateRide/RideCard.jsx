import { Button, Paper, TextField, Box } from "@mui/material";
import { useState } from "react";
import "./RideCard.css";
import axios from "axios";
import Swal from "sweetalert2";

const RideCard = () => {
  //SWAL ICON

  const [status, setStatus] = useState("");

  const [leaving, setLeaving] = useState("");
  const [going, setGoing] = useState("");
  const [seats, setSeats] = useState("");
  const [price, setPrice] = useState("");
  const [carName, setCarName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [name] = useState("Sadasivam");
  const [email] = useState("727722euit131@skcet.ac.in");
  const [phNo] = useState("8667455968");

  // const swal_error = Swal.fire({
  //   icon: "error",
  //   title: "Oops...",
  //   text: "Something went wrong!",
  //   footer: '<a href="#">Why do I have this issue?</a>',
  // });
  // const swal_success = Swal.fire({
  //   icon: "success",
  //   title: "success",
  //   text: "Ride created Successfully!",
  //   footer: '<a h  ref="#">Why do I have this issue?</a>',
  // });
  const handleSubmit = (event) => {
    event.preventDefault();

    const rideDetails = {
      name,
      email,
      phNo,
      leaving,
      going,
      seats,
      price,
      carName,
      date,
      startTime,
      endTime,
    };
    axios
      .post("http://localhost:8080/app/createride", rideDetails)
      .then((response) => {
        setStatus("success");

        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error submitting the ride details:", error);
        setStatus("error");
      });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "30%",
        position: "relative",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          height: "50vh", // Reduced height
          width: "40%",
          display: "flex",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center",
          padding: "50px", // Reduced padding
          backgroundColor: "#f5f5f5",
          overflow: "auto", // Add scrollbar if content overflows
          top: "3%",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Unique box shadow effect
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "calc(50% - 16px)" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-leaving"
            label="Leaving From"
            type="text"
            value={leaving}
            onChange={(e) => setLeaving(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-going"
            label="Going To"
            type="text"
            value={going}
            onChange={(e) => setGoing(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-seats"
            label="Available seats"
            type="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            sx={{ border: "black", color: "black" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-price"
            label="Price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-name"
            label="Car Name"
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-date"
            label="Date"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-start-time"
            label="Start Time"
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-end-time"
            label="End Time"
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, width: "100%" }}
          >
            s Create Ride
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default RideCard;
