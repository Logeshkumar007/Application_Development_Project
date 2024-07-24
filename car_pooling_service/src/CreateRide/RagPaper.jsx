import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../CreateRide/RagPaper.css";
import axios from "axios";
const RagPaper = () => {
  const [estimatedvalue, setEstimatedvalue] = useState(0);
  const [address, setAddress] = useState("");
  const [phn, setPhn] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [ragselect, setRagselect] = useState("");

  useEffect(() => {
    console.log(quantity);
    console.log(estimatedvalue);
    setEstimatedvalue(30 * quantity);
    switch (ragselect) {
      case "metal":
        setEstimatedvalue(30 * quantity);
        break;
      case "paper":
        setEstimatedvalue(10 * quantity);
        break;
      case "Plastic":
        setEstimatedvalue(15 * quantity);
        break;
      case "Glass":
        setEstimatedvalue(25 * quantity);
        break;
      case "Mixed":
        setEstimatedvalue(20 * quantity);
        break;
      case "Other":
        setEstimatedvalue(0);
        break;
      case "":
        setEstimatedvalue(0);
        break;
    }
    console.log(name, phn, address, quantity, ragselect, estimatedvalue);
  }, [quantity, ragselect, estimatedvalue]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "30%",
        position: "relative",
        top: "54%",
      }}
    >
      <Paper
        sx={{
          width: "75%",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "1.3%",
          paddingLeft: "1%",
        }}
      >
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Phn"
            variant="standard"
            type="tel"
            value={phn}
            onChange={(e) => {
              setPhn(e.target.value);
            }}
          />
        </div>
        <div className="input-address-select">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Rag-Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={ragselect}
              label="Age"
              onChange={(e) => {
                setRagselect(e.target.value);
              }}
            >
              <MenuItem value={"Metal"}>Metal</MenuItem>
              <MenuItem value={"Paper"}>Paper</MenuItem>
              <MenuItem value={"Plastic"}>Plastic</MenuItem>
              <MenuItem value={"Glass"}>Glass</MenuItem>
              <MenuItem value={"Mixed"}>Mixed</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Quantity in kg"
            variant="standard"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Estimated value in Rs"
            variant="standard"
            value={estimatedvalue}
          />
        </div>
        <div className="button-get-address">
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              axios.post("http://localhost:8080/ecoconnect/postragger/post", {
                name: name,
                phone: phn,
                address: address,
                ragType: ragselect,
                quantity: quantity,
                estimatedAmount: estimatedvalue,
              });
            }}
          >
            Find Pickers
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default RagPaper;
