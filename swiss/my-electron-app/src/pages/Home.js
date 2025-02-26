import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import logo from "../assets/logo.webp";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Aduk Pairing System <span id="beta"> Beta Version</span></h1>
      <img  src={logo} id="logo"/>

      <section id="welcome">
  <h3>Notice:</h3>
  <p>
    <strong>Welcome to the beta version of the Aduk Pairing System! 🚀</strong>
    <br />
    <br />
    As this is an early release, some bugs and issues are expected. Your feedback is invaluable in helping us improve. If you encounter any problems or have suggestions, please report them to the developers.
    <br />
    <br />
    Thank you for being part of this journey!
    <br />
    <br />
    <strong>Exciting News!</strong> The Aduk Pairing System will soon be available as a desktop application. For now, enjoy the demo in its web app form, and stay tuned for updates on the desktop release!
  </p>
</section>

    


      <div style={{ marginTop: "30px" }}>
        <Link to="/new">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              margin: "10px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            New Tournament
          </button>
        </Link>

        <Link to="/about">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              margin: "10px",
              cursor: "pointer",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            About Us
          </button>
        </Link>

        <Link to="/contact">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              margin: "10px",
              cursor: "pointer",
              backgroundColor: "#FF5722",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Contact
          </button>
        </Link>
      </div>

   <Footer/>
    </div>
  );
};

export default Home;
