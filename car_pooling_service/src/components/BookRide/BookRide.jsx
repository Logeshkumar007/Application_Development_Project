import { Button, Divider, Paper, Typography } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import './BookRide.css';
import routepng from './Route2.png';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RidePaper from "./RidePaper";
const BookRide=()=>{
    const arr=['1','2',,'2','3','4','5','6']
    return(
        <div >
        <NavBar/>
        <div className="sortingContainer">
            <div className="containerItems">
            <button style={{padding:"0.7vh",borderRadius:"10vh",fontSize:"75%",backgroundColor:"white",display:"flex",border:"1.5px solid lightgrey",paddingLeft:"1%",paddingRight:"1%"}}><Typography>Sort by</Typography><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
            <button style={{padding:"0.7vh",paddingLeft:"1%",paddingRight:"1%",borderRadius:"10vh",fontSize:"75%",backgroundColor:"white",display:"flex",border:"1.5px solid lightgrey"}}><Typography>Filter</Typography><FilterListIcon style={{paddingLeft:"4%"}}></FilterListIcon></button>
            <button style={{padding:"0.7vh",borderRadius:"10vh",fontSize:"75%",backgroundColor:"white",display:"flex",border:"1.5px solid lightgrey",paddingLeft:"1%",paddingRight:"1%"}}><Typography>Sort by</Typography><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
            </div>
            <Divider></Divider>
        </div>
        <div className="content">
            <div className="ride-papers">
              
                    {
                        arr.map(()=>{
                            return(

                                <RidePaper/>
                            )

                        })
                    }
                   
                    
                    
                    
                    
                    
            </div>
            <div className="ride-content">
                    <div>
                        <h1 style={{fontSize:"5vh"}}>Mon 23 JUL</h1>
                        <div style={{width:"80%",display:"flex",flexDirection:"column"}}>
                        <img src={routepng} style={{width:"55%",marginTop:"10%",paddingLeft:"35%"}}></img>
                        <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"25%"}}>

                        <Typography variant="h5">Coimbatore</Typography>
                        <Typography variant="h5">SKCET</Typography>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}
export default BookRide;