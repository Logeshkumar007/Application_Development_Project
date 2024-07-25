import { Paper, Typography } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const RidePaper=()=>{
    return(
        <Paper elevation={1} sx={{padding:"3%",backgroundColor:"white",width:"65%",position:"relative",borderRadius:"0.5vh",paddingRight:"5%",height:"15dvh",marginBottom:"2%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        
                        <div style={{display:"flex",gap:"5%"}}>
                        <DirectionsCarIcon color="primary"></DirectionsCarIcon>
                        <div style={{width:"100%",display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"space-between"}}>
                            
                        <Typography variant="h6">Gandhipuram</Typography>
                        <Typography variant="h6">--------</Typography>
                        <Typography variant="h6">coimbatore</Typography>
                            
                        <Typography variant="h6" sx={{fontSize:"95%"}}>8:00</Typography>
                        <Typography variant="h6"></Typography>
                        <Typography variant="h6" sx={{fontSize:"95%"}}>9:00</Typography>
                        </div>
                        </div>

                        <div style={{display:"flex",paddingLeft:"12%",justifyContent:"space-between",alignItems:"baseline",marginTop:"3dvh"}}>

                        <Typography  variant="h6" sx={{fontSize:"80%"}}>2 seats Available</Typography>
                        <Typography color="primary" variant="h5" sx={{}}>Rs.700</Typography>
                        </div>
                
                    </Paper>
    );
}
export default RidePaper;