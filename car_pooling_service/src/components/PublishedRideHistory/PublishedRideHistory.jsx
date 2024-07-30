import { Button, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Navbar from "../NavBar/NavBar";
import route from './routedot.png'
import car from './Car.jpg'

const PublishedRideHistory = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <div style={{ Top: "0%", display: "flex", justifyContent: "center", height: "100dvh", paddingTop: "0.1%", width: "100%" }}>
                <div style={{ width: "70%", backgroundColor: "white", height: "90%" }}>

                    <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "2%", paddingBottom: "2%", backgroundColor: "rgba(178, 243, 178,0)", position: "sticky", top: "0" }}>
                        <Typography variant="h6">Completed</Typography>
                        <Typography variant="h6">UpComing</Typography>
                        <Typography variant="h6">OnGoing</Typography>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "center", padding: "2vh", flexDirection: "column",fontSize:"0.7rem" }}>
                        
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative" }}>
                            <div style={{ backgroundColor: "White", width: "70%", height: "25dvh", padding: "1vh" }}>
                                <Typography variant="h5" sx={{fontSize:"0.8rem"}}>Gandhipuram</Typography>
                                <img src={route} style={{ height: "48%", alignContent: "center" }} alt="Route" />
                                <Typography variant="h5" sx={{fontSize:"0.8rem"}}>SKCET</Typography>
                            </div>

                            <div style={{ backgroundColor: "White", width: "100%", height: "25dvh", padding: "1vh" }}>
                                <div style={{ height: "25dvh", position: "absolute", bottom: "0%" }}>
                                    <Typography variant="h4" sx={{fontSize:"1rem",fontWeight:"600"}}>MUKUNDAN</Typography>
                                    <Typography sx={{ lineHeight: "1.2rem", marginTop: "5%", fontSize: "0.9rem" }}>B-tech IT</Typography>
                                    <Typography sx={{ lineHeight: "2rem", fontSize: "0.9rem" }}>727722euit096@gmail.com</Typography>
                                    <Typography sx={{ lineHeight: "2rem", fontSize: "0.9rem" }}>8610528048</Typography>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "White", width: "100%", height: "25dvh", padding: "1vh" }}>
                                <div style={{ height: "25dvh", position: "absolute", bottom: "0%" }}>
                                    <img src={car} style={{ height: "55%", alignContent: "center" }} alt="Car" />
                                    <Typography variant="h6" sx={{ paddingLeft: "15%",fontSize:"0.9rem",fontWeight:"500" }}>TN 43 LA 1234</Typography>
                                </div>
                            </div>

                            <div style={{ marginTop: "6%", width: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="primary" variant="contained" sx={{ width: "60%", fontSize: "0.7rem" }}>Cancel Ride</Button>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        
                    </div>    
                    <div style={{ display: "flex", justifyContent: "center", padding: "2vh", flexDirection: "column",fontSize:"0.7rem" }}>
                        
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative" }}>
                            <div style={{ backgroundColor: "White", width: "70%", height: "25dvh", padding: "1vh" }}>
                                <Typography variant="h5" sx={{fontSize:"0.8rem"}}>Gandhipuram</Typography>
                                <img src={route} style={{ height: "48%", alignContent: "center" }} alt="Route" />
                                <Typography variant="h5" sx={{fontSize:"0.8rem"}}>SKCET</Typography>
                            </div>

                            <div style={{ backgroundColor: "White", width: "100%", height: "25dvh", padding: "1vh" }}>
                                <div style={{ height: "25dvh", position: "absolute", bottom: "0%" }}>
                                    <Typography variant="h4" sx={{fontSize:"1rem",fontWeight:"600"}}>MUKUNDAN</Typography>
                                    <Typography sx={{ lineHeight: "1.2rem", marginTop: "5%", fontSize: "0.9rem" }}>B-tech IT</Typography>
                                    <Typography sx={{ lineHeight: "2rem", fontSize: "0.9rem" }}>727722euit096@gmail.com</Typography>
                                    <Typography sx={{ lineHeight: "2rem", fontSize: "0.9rem" }}>8610528048</Typography>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "White", width: "100%", height: "25dvh", padding: "1vh" }}>
                                <div style={{ height: "25dvh", position: "absolute", bottom: "0%" }}>
                                    <img src={car} style={{ height: "55%", alignContent: "center" }} alt="Car" />
                                    <Typography variant="h6" sx={{ paddingLeft: "15%",fontSize:"0.9rem",fontWeight:"500" }}>TN 43 LA 1234</Typography>
                                </div>
                            </div>

                            <div style={{ marginTop: "6%", width: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="primary" variant="contained" sx={{ width: "60%", fontSize: "0.7rem" }}>Cancel Ride</Button>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        
                    </div>    
                    <div style={{ display: "flex", justifyContent: "center", padding: "2vh", flexDirection: "column",fontSize:"0.7rem" }}>
                        
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative" }}>
                            <div style={{ backgroundColor: "White", width: "70%", height: "25dvh", padding: "1vh" }}>
                                <Typography variant="h5" sx={{fontSize:"0.8rem"}}>Gandhipuram</Typography>
                                <img src={route} style={{ height: "48%", alignContent: "center" }} alt="Route" />
                                <Typography variant="h5" sx={{fontSize:"0.8rem"}}>SKCET</Typography>
                            </div>

                            <div style={{ backgroundColor: "White", width: "100%", height: "25dvh", padding: "1vh" }}>
                                <div style={{ height: "25dvh", position: "absolute", bottom: "0%" }}>
                                    <Typography variant="h4" sx={{fontSize:"1rem",fontWeight:"600"}}>MUKUNDAN</Typography>
                                    <Typography sx={{ lineHeight: "1.2rem", marginTop: "5%", fontSize: "0.9rem" }}>B-tech IT</Typography>
                                    <Typography sx={{ lineHeight: "2rem", fontSize: "0.9rem" }}>727722euit096@gmail.com</Typography>
                                    <Typography sx={{ lineHeight: "2rem", fontSize: "0.9rem" }}>8610528048</Typography>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "White", width: "100%", height: "25dvh", padding: "1vh" }}>
                                <div style={{ height: "25dvh", position: "absolute", bottom: "0%" }}>
                                    <img src={car} style={{ height: "55%", alignContent: "center" }} alt="Car" />
                                    <Typography variant="h6" sx={{ paddingLeft: "15%",fontSize:"0.9rem",fontWeight:"500" }}>TN 43 LA 1234</Typography>
                                </div>
                            </div>

                            <div style={{ marginTop: "6%", width: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="primary" variant="contained" sx={{ width: "60%", fontSize: "0.7rem" }}>Cancel Ride</Button>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        
                    </div>    
                    
                   

                    
                   
                </div>
            </div>
        </div>
    );
}

export default PublishedRideHistory;
