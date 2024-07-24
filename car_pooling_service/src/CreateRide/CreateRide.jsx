import RagPaper from "../CreateRide/RagPaper";
import "../../src/CreateRide/CreateRide.css";

const RagPosting = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="text-container">
          <div className="line1">
            <h1>The Hassle Free Rag Picker Services in India</h1>
          </div>
          <div className="line2">
            <h1>
              Trust Eco-Connect for efficient rag picker services in India. Our
              reliable ragger connect based service ensures safe and timely
              collection of your recyclable waste
            </h1>
          </div>
        </div>
        <RagPaper />
      </div>
      <div className="about">
        <div className="why-rag">
          <h2>Why use Eco-connect ?</h2>
          <div className="use">
            <div className="use1">
              <h3>Easy Connect with Rag Pickers</h3>
              <p>
                Our rag pickers are available around the clock to collect your
                recyclable waste conveniently.
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
              <h3>Get Anything sell</h3>
              <p>
                Our rag pickers help you sell your recyclable waste at any time.
              </p>
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
          <h2>About Eco-Connect</h2>
          <div className="about-content">
            <h3>
              Eco-Connect is a pioneering platform dedicated to connecting
              ragpickers with consumers, aiming to create a sustainable and
              inclusive waste management system. By empowering ragpickers with
              fair wages and safe working conditions, we address the
              often-overlooked segment of the waste management workforce and
              promote responsible consumption. Our platform allows consumers to
              easily schedule pickups and track the recycling journey of their
              waste, ensuring transparency and environmental impact.
              CleanConnect not only simplifies waste disposal for consumers but
              also ensures that recyclable materials are efficiently processed.
              This reduces landfill waste and promotes a circular economy.
              Additionally, by providing fair compensation and support to
              ragpickers, CleanConnect improves their livelihoods and working
              conditions, addressing social inequities. Join CleanConnect to be
              part of a community that values sustainability, supports fair
              labor practices, and strives for a cleaner, greener future.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagPosting;
