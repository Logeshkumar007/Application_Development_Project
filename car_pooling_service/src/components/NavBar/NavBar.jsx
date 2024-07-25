import { AppBar, Toolbar } from "@mui/material";

const NavBar=()=>{
    return(
        <div >
            <AppBar position="sticky">
        <Toolbar
          sx={{
            //   position:"sticky",
              display: "flex",
            fontSize: "0.9rem",
            letterSpacing: "0.2vh",
            justifyContent: "space-between",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <h3>CAR LA SELVOM</h3>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "space-between",
              marginRight: "2%",
            }}
          >
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Profile</h3>
          </div>
        </Toolbar>
      </AppBar>
        </div>
    );

}
export default NavBar;