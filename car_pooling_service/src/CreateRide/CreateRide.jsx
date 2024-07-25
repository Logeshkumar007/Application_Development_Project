import RagPaper from "./RideCard";
import "../../src/CreateRide/CreateRide.css";
import "../CreateRide/CardAlignment.css";

const CreateRide = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="text-container">
          <div className="line1">
            <h1>The Hassle Free Services in India</h1>
          </div>
          <div className="line2">
            <h1>
              for efficient services in India. Our reliable ragger connect based
              service ensures safe and timely collection of your recyclable
              waste
            </h1>
          </div>
        </div>
        <RagPaper />
      </div>
      <div className="about">
        <div className="why-rag" style={{ paddingTop: "50%" }}>
          <h2>Why use Car-pooling ?</h2>
          <div className="use">
            <div className="use1">
              <h3>Easy Connect with Students</h3>
              <p>
                Our are available around the clock to collect your recyclable
                waste conveniently.
              </p>
            </div>
            <div className="use2">
              <h3>Door to Door Services</h3>
              <p>
                Enjoy the convenience of our 24/7 door-to-door recyclable waste
                collection service.
              </p>
            </div>
          </div>
          <div className="use">
            <div className="use3">
              <h3>Save your precious time</h3>
              <p>Our help you sell your recyclable waste at any time.</p>
            </div>
            <div className="use4" style={{ marginLeft: "12vh" }}>
              <h3>Negotiable Price</h3>
              <p>
                We offer flexible pricing for your recyclable waste,ensuring the
                best deal.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="area2">
        <div className="why-rag">
          <h2>Areas we provide service</h2>
          <div className="all-area">
            <h3>Mumbai</h3>
            <h3>Coimbatore</h3>
            <h3>Delhi</h3>
            <h3>Bangalore</h3>
            <h3>Kolkata</h3>
            <h3>Chennai</h3>
            <h3>Hyderabad</h3>
            <h3>Pune</h3>
            <h3>Ahmedabad</h3>
            <h3>Jaipur</h3>
            <h3>Surat</h3>
            <h3>Lucknow</h3>
            <h3>Kanpur</h3>
            <h3>Nagpur</h3>
            <h3>Indore</h3>
            <h3>Bhopal</h3>
            <h3>Visakhapatnam</h3>
            <h3>Patna</h3>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="why-rag">
          <h2>About Car Pooling</h2>
          <div className="about-content">
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam dicta facere numquam nihil aspernatur beatae adipisci
              aliquam nesciunt, consequatur molestias mollitia officiis
              doloribus ullam quod nisi eaque voluptatibus! Ipsum, corrupti.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRide;
