import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";

const NewTournament = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tournamentName: "",
    location: "",
    startDate: "",
    endDate: "",
    rounds: "",
    arbiterName: "",
    tournamentType: "",
    posterURL: "",
    tournamentMode: "Local", // Default to Local
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const {
      tournamentName,
      location,
      startDate,
      endDate,
      rounds,
      arbiterName,
      tournamentType,
    } = formData;

    if (
      !tournamentName ||
      !location ||
      !startDate ||
      !endDate ||
      !rounds ||
      !arbiterName ||
      !tournamentType
    ) {
      alert("Please fill out all fields.");
      return false;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("End date must be after the start date.");
      return false;
    }

    return true;
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    if (formData.tournamentMode === "Local") {
      // Save to localStorage
      const localTournaments = JSON.parse(localStorage.getItem("tournaments")) || [];
      localTournaments.push(formData);
      localStorage.setItem("tournaments", JSON.stringify(localTournaments));

      alert("Tournament saved locally!");
      navigate("/addplayers", { state: { formData } });
    } else {
      // Save to cloud
      try {
        const response = await fetch("https://your-api.com/tournaments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Failed to save to cloud");

        const result = await response.json();
        alert("Tournament saved to the cloud!");
        navigate("/cloud/", { state: { formData, id: result.id } });
      } catch (error) {
        alert("Cloud save failed: " + error.message);
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <img src={logo} alt="logo" style={{ display: "block", margin: "0 auto", width: "100px" }} />
      <h2 style={{ textAlign: "center" }}>Create New Chess Tournament</h2>

      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Tournament Mode:</label>
          <select
            name="tournamentMode"
            value={formData.tournamentMode}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          >
            <option value="Local">Local (Offline)</option>
            <option value="Cloud">Cloud</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Tournament Type:</label>
          <select
            name="tournamentType"
            value={formData.tournamentType}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          >
            <option value="" disabled>Select Type</option>
            <option value="Swiss">Swiss</option>
            <option value="Round Robin" disabled={formData.tournamentMode === "Cloud"}>
              Round Robin (Coming Soon)
            </option>
            <option value="Double Round" disabled={formData.tournamentMode === "Cloud"}>
              Double Round (Coming Soon)
            </option>
            <option value="Knockout" disabled={formData.tournamentMode === "Cloud"}>
              Knockout (Coming Soon)
            </option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Tournament Name:</label>
          <input
            type="text"
            name="tournamentName"
            value={formData.tournamentName}
            onChange={handleChange}
            placeholder="Enter tournament name"
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, Country"
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Number of Rounds:</label>
          <input
            type="number"
            name="rounds"
            value={formData.rounds}
            onChange={handleChange}
            min="2"
            max="8"
            placeholder="Enter number of rounds"
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Chief Arbiter Name:</label>
          <input
            type="text"
            name="arbiterName"
            value={formData.arbiterName}
            onChange={handleChange}
            placeholder="Enter chief arbiter name"
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Tournament Advert URL:</label>
          <input
            type="url"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleChange}
            placeholder="Enter poster URL"
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <button
          onClick={handleNext}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default NewTournament;
