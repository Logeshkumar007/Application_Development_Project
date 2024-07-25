import { Paper, Typography } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const RidePaper=(props)=>{
    console.log(props.value.name);
    return(
        <Paper elevation={1} sx={{padding:"3%",backgroundColor:"white",width:"65%",position:"relative",borderRadius:"0.5vh",paddingRight:"5%",height:"15dvh",marginBottom:"2%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        
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