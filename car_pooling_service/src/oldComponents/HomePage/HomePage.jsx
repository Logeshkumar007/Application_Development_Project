import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import TextTransition, { presets } from "react-text-transition";
import png1 from "../../components/Homepage/carowner.png";

// import { motion } from "framer-motion";

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
      <div className="container-home">
        <div className="text-container">
          <div
            className="line1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h1 style={{ fontSize: "3rem" }}>Car Pooling Service </h1>
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
      </div>

      <div style={{ display: "flex" }}>
        <div
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
            <h3>
              hey this is logesh ,i am currently developing this component,as i
              dont have content i am typing this
            </h3>
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
        </div>

        <div
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
            <h3>
              hey this is logesh ,i am currently developing this component,as i
              dont have content i am typing this
            </h3>
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
        </div>
      </div>

      <div
        ref={aboutRef}
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible.about ? 1 : 0,
          y: isVisible.about ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
        className="about"
        style={{ marginTop: "5%" }}
      >
        <h2>Why use Car-La-Selvom ?</h2>
        <div className="useService" ref={whyUseRef} id="whyUse">
          <div className="use1">
            <h3>Easy Connect for Rides</h3>
            <p>
              Our rag pickers are available around the clock to collect your
              recyclable waste conveniently.
            </p>
          </div>
          <div className="use2">
            <h3>Comfortable Ride</h3>
            <p>
              Enjoy the convenience of our 24/7 door-to-door recyclable waste
              collection service.
            </p>
          </div>
          <div className="use3">
            <h3>Share Expense</h3>
            <p>
              Our rag pickers help you sell your recyclable waste at any time.
            </p>
          </div>
          <div className="use4">
            <h3>Eco-Friendly</h3>
            <p>
              We offer flexible pricing for your recyclable waste, ensuring the
              best deal.
            </p>
          </div>
        </div>
      </div>

      <div
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
      </div>
    </div>
  );
};

export default Homepage;
