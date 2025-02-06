import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Aduk Pairing System</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Welcome to the ultimate chess tournament pairing system. Organize and manage your tournaments with ease.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/new">
          <button style={{ padding: "10px 20px", fontSize: "16px", margin: "10px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
            New Tournament
          </button>
        </Link>

        <Link to="/about">
          <button style={{ padding: "10px 20px", fontSize: "16px", margin: "10px", cursor: "pointer", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "5px" }}>
            About Us
          </button>
        </Link>

        <Link to="/contact">
          <button style={{ padding: "10px 20px", fontSize: "16px", margin: "10px", cursor: "pointer", backgroundColor: "#FF5722", color: "white", border: "none", borderRadius: "5px" }}>
            Contact
          </button>
        </Link>
      </div>

      <footer style={{ marginTop: "50px", fontSize: "14px", color: "#888" }}>
        © {new Date().getFullYear()} Sigmoid Softwares. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
