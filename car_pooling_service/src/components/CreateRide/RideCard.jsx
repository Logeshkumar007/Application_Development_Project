import { Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'
import './RideCard.css'
// import axios from "axios";
const RideCard = () => {
  const [address, setAddress] = useState('')
  const [phn, setPhn] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '30%',
        position: 'relative',
        top: '54%',
      }}
    >
      <Paper
        sx={{
          height: '90%',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          padding: '40px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Leaving from"
            variant="standard"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Going To"
            variant="standard"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>

        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Car_Model"
            variant="standard"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="Date"
            variant="standard"
            type="tel"
            value={phn}
            onChange={(e) => {
              setPhn(e.target.value)
            }}
          />
        </div>

        <div className="input-address">
          <TextField
            id="standard-basic"
            label="No of Passangers Available"
            variant="standard"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
          />
        </div>
        <div className="input-address">
          <TextField
            id="standard-basic"
            label="License Plate Number"
            variant="standard"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
          />
        </div>

        <div className="button-get-address">
          <Button
            style={{ width: '170%' }}
            variant="contained"
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Create Ride
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default RideCard
