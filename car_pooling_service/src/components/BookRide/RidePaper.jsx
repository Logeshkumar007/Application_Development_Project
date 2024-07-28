import { Paper, Typography } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './RidePaper.css';
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import {setIdselected} from '../Store/Reducer'
import { useDispatch, useSelector } from "react-redux";

const RidePaper=(props)=>{
    const dispatch=useDispatch();
    const [click,setClick]=useState(false);
    const [border,setBorder]=useState("white");
    const selectedid=useSelector(state=>state.selectedIdReducer);

    useEffect(()=>{
        if(click && selectedid===props.value.id)
        {

            setBorder("#1976d2");
        }
        else{
            setBorder("white");

        }
    },[selectedid])
    
    return(
        <Paper className="paper" elevation={1} sx={{padding:"3%",backgroundColor:"white",width:"65%",position:"relative",borderRadius:"0.5vh",paddingRight:"5%",height:"15dvh",marginBottom:"2%",display:"flex",flexDirection:"column",justifyContent:"space-between",
            borderLeft: `3px solid ${border}`
        }} onClick={()=>{
            setClick(!click);
            localStorage.setItem("clickid",props.value.id);
            dispatch(setIdselected(props.value.id));
            
            
        }}>
                        
                        <div style={{display:"flex",gap:"5%"}}>
                        <DirectionsCarIcon color="primary"></DirectionsCarIcon>
                        <div style={{width:"100%",display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"space-between"}}>
                            
                        <Typography variant="h6">{props.value.leavingFrom}</Typography>
                        <Typography variant="h6">--------</Typography>
                        <Typography variant="h6">{props.value.goingTo}</Typography>
                            
                        <Typography variant="h6" sx={{fontSize:"95%"}}>{props.value.startTime}</Typography>
                        <Typography variant="h6"></Typography>
                        <Typography variant="h6" sx={{fontSize:"95%"}}>{props.value.endTime}</Typography>
                        </div>
                        </div>

                        <div style={{display:"flex",paddingLeft:"12%",justifyContent:"space-between",alignItems:"baseline",marginTop:"3dvh"}}>

                        <Typography  variant="h6" sx={{fontSize:"80%"}}>{props.value.availableSeats} seats Available</Typography>
                        <Typography color="primary" variant="h5" sx={{}}>Rs.{props.value.price}</Typography>
                        </div>
                
                    </Paper>
    );
}
export default RidePaper;