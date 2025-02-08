import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleNext = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/new/addplayers", { state: { formData } });
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Create New Chess Tournament</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
            placeholder="Enter location"
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
            min="1"
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
          <label style={{ display: "block", marginBottom: "5px" }}>Tournament Poster URL:</label>
          <input
            type="url"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleChange}
            placeholder="Enter poster URL"
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
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
            <option value="" disabled>
              Select Type
            </option>
            <option value="Swiss">Swiss</option>
            <option value="Round Robin">Round Robin (Coming Soon)</option>
            <option value="Double Round">Double Round (Coming Soon)</option>
            <option value="Knockout">Knockout (Coming Soon)</option>
          </select>
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
