import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import "./Homepage.css";
import TextTransition, { presets } from "react-text-transition";
import png1 from "./carowner.png";
import { motion } from "framer-motion";

const TEXTS = ["For", "By", "Of"];

const Homepage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    container: false,
    section1: false,
    section2: false,
    about: false,
    whyUse: false,
  });

  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const aboutRef = useRef(null);
  const whyUseRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (whyUseRef.current) observer.observe(whyUseRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (whyUseRef.current) observer.unobserve(whyUseRef.current);
    };
  }, []);

  return (
    <div>
      <motion.div
        ref={containerRef}
        id="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible.container ? 1 : 0,
          y: isVisible.container ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
        className="container-home"
      >
        <div className="text-container">
          <div
            className="line1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h1 style={{ fontSize: "3rem" }} onClick={()=>{
              navigate('/profile')
            }}>Car Pooling Service </h1>
            &nbsp;&nbsp;
            <h1 style={{ fontSize: "3rem" }}>
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            &nbsp;&nbsp;
            <h1 style={{ fontSize: "3rem" }}> Skcetians</h1>
          </div>
          <div className="line2">
            <h1>
              The Car Pooling Service for SKCETians is a convenient platform
              designed to connect students and staff of SKCET for shared rides,
              promoting cost-effective and eco-friendly commuting
            </h1>
          </div>
        </div>
      </motion.div>

      <div style={{ display: "flex" }}>
        <motion.div
          ref={section1Ref}
          id="section1"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isVisible.section1 ? 1 : 0,
            y: isVisible.section1 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "rgba(178, 243, 178,0)",
            height: "70dvh",
            width: "50dvw",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              marginLeft: "16%",
              display: "flex",
              flexDirection: "column",
              marginRight: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "1.3rem",
                padding: "0rem",
              }}
            >
              <h2>For </h2>
              <h1 style={{ color: "green" }}>Co-Rider</h1>
            </div>
            <h4
              style={{
                fontWeight: "500",
                fontSize: "125%",
                paddingBottom: "6%",
              }}
            >
              Join rides with car-owning students, enjoy a comfortable journey,
              and share petrol costs. Experience convenient and cost-effective
              commuting.
            </h4>
            <Button
              variant="contained"
              sx={{
                width: "25%",
                backgroundColor: "green",
                marginTop: "1%",
              }}
              onClick={() => navigate("/createRide")}
            >
              Create Ride
            </Button>
          </div>
        </motion.div>

        <motion.div
          ref={section2Ref}
          id="section2"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isVisible.section2 ? 1 : 0,
            y: isVisible.section2 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "rgba(178, 243, 178,0.3)",
            height: "70dvh",
            width: "50dvw",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              marginLeft: "16%",
              display: "flex",
              flexDirection: "column",
              marginRight: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "1.3rem",
                gap: "vh",
                padding: "0rem",
              }}
            >
              <h2>For </h2>
              <h1 style={{ color: "green" }}>Owner</h1>
            </div>
            <h4
              style={{
                fontWeight: "500",
                fontSize: "125%",
                paddingBottom: "6%",
              }}
            >
              Publish your ride and let fellow students join you. Share the
              journey and petrol costs, making commuting more affordable.
            </h4>
            <Button
              variant="contained"
              sx={{
                width: "25%",
                backgroundColor: "green",
                marginTop: "1%",
              }}
              onClick={() => navigate("/bookRide")}
            >
              Book ride
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={aboutRef}
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible.about ? 1 : 0,
          y: isVisible.about ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
        className="about"
        style={{ marginTop: "5%", paddingLeft: "5%" }}
      >
        <h2>Why use Car-La-Selvom ?</h2>
        <div
          className="useService"
          ref={whyUseRef}
          id="whyUse"
          style={{ paddingTop: "5%" }}
        >
          <div className="use1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://static3.bigstockphoto.com/3/3/8/large1500/83345828.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Easy Connect for Rides
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Connect easily with other students for shared rides.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="use2">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.shutterstock.com/shutterstock/photos/2167027755/display_1500/stock-vector-autonomous-car-highway-traffic-top-view-comfortable-automobile-with-driver-assistance-system-2167027755.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Comfortable Ride
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enjoy a comfortable ride with fellow students.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="use3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://static.vecteezy.com/system/resources/previews/002/239/926/original/businessman-trying-to-push-cost-to-minimum-position-illustration-cost-reduction-strategy-concept-vector.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Share Expense
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reduce travel costs by sharing the petrol expense with co
                  riders.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="use4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://media.licdn.com/dms/image/C4E12AQEg_B8_wDHn7w/article-cover_image-shrink_600_2000/0/1520180391036?e=2147483647&v=beta&t=ECARxfTLTPC2zKZDMADXg_KQtPKTYiu4SFYp_OsS4FE"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Eco-Friendly
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Promote eco-friendly commuting by carpooling.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={whyUseRef}
        id="whyUse"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible.whyUse ? 1 : 0,
          y: isVisible.whyUse ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
        style={{
          height: "40dvh",
          backgroundColor: "white",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            width: "30%",
            marginLeft: "10%",
            alignContent: "center",
            lineHeight: "1.5rem",
            fontSize: "1.025rem",
          }}
        >
          <p>
            Heading home or college ? Why not turn your empty car seats into
            cash with Sri Krishna&apos;s students ! Publish a ride and let other
            students hop in along your route. Not only will you be helping your
            fellow classmates save money on transportation, but you&apos;ll also
            earn some extra cash to cover your petrol expenses.
          </p>
        </div>
        <img
          style={{ marginRight: "10%" }}
          height="80%"
          width="35%"
          src={png1}
        />
      </motion.div>
    </div>
  );
};

export default Homepage;
