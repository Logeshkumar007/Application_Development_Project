import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar
        sx={{
          backgroundColor: "white",
          color: "black",
          display: "flex",
          justifyContent: "space-around",
          lineHeight: "0.5rem",
        }}
      >
        <Link to="/" className="logo">
          <img
            src="/images/eco-ride.png"
            style={{ width: "6.5rem", height: "2rem" }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "20%",
            marginLeft: "8%",
            marginRight: "8%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "15%",
          }}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="  text-white font-bold py-2 px-4 rounded">
                Your Rides
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-40 bg-white p-4 rounded-lg shadow-lg">
              <Link
                to="/PilotsRideHistory"
                className="block mb-2 hover:bg-blue-100 p-2  rounded"
              >
                <Typography
                  sx={{ fontWeight: "550" }}
                  className="text-primary mb-4"
                >
                  Pilot
                </Typography>
              </Link>
              <div className="border-t border-primary my-2"></div>
              <Link to="/dummy" className="block hover:bg-blue-100 p-2 rounded">
                <Typography sx={{ fontWeight: "550" }} className="text-primary">
                  Passenger
                </Typography>
              </Link>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="  text-white font-bold py-2 px-4 rounded">
                Get Started
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-40 bg-white p-4 rounded-lg shadow-lg">
              <Link
                to="/passangerSignin"
                className="block mb-2 hover:bg-blue-100 p-2  rounded"
              >
                <Typography
                  sx={{ fontWeight: "550" }}
                  className="text-primary mb-4"
                >
                  SignIn
                </Typography>
              </Link>
              <div className="border-t border-primary my-2"></div>
              <Link to="/passangerSignup" className="block hover:bg-blue-100 p-2 rounded">
                <Typography sx={{ fontWeight: "550" }} className="text-primary">
                  SignUp
                </Typography>
              </Link>
            </HoverCardContent>
          </HoverCard>
          {/* <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <Typography sx={{ fontWeight: "550" }}>SignUp</Typography>
          </Link>
          <Link
            to="/signin"
            sx={{ display: "flex" }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography sx={{ fontWeight: "550" }}>SignIn</Typography>
          </Link> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
