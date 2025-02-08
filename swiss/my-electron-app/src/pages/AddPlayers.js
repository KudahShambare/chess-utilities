import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PlayersContext } from "../App";

const AddPlayers = () => {
  /*Hooks*/
  //use context
  const {players,setPlayers} = useContext(PlayersContext)
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state?.formData;
  const [tournamentDetails, setTournamentDetails] = useState(formData);
  const [player, setPlayer] = useState({
    playerName: "",
    playerRating: "",
    fideID: "",
    province: "",
    points: 0, //keeping trackof player results
    opponents: [], //keeping track of a player's opponents
    roundsPlayed: 0, //keeping track of number of rounds a player has been paired
    fideTitle: "",
    ageGroups: [], // age group or Ladies/Open
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgeGroupChange = (e) => {
    const { value } = e.target;
    setPlayer((prev) => {
      const ageGroups = prev.ageGroups.includes(value)
        ? prev.ageGroups.filter((group) => group !== value)
        : [...prev.ageGroups, value];
      return { ...prev, ageGroups };
    });
  };

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (
      !player.playerName ||
      !player.playerRating ||
      !player.fideID ||
      !player.province
    ) {
      alert("Please fill out all required fields before adding a player.");
      return;
    }
    setPlayers((prev) => [...prev, player]);
    setPlayer({
      playerName: "",
      playerRating: "",
      fideID: "",
      province: "",
      points: 0,
      fideTitle: "",
      ageGroups: [],
      roundsPlayed: 0,
      opponents: [],
    });
  };

  const handleRemovePlayer = (index) => {
    let toBeRemoved = players[index];
    let arr = players.filter((val) => val !== toBeRemoved);
   
    
    
    setPlayers(arr);
  };

  const handleSubmitToDatabase = () => {
    if (!players.length) {
      alert("Please add at least one player before submitting.");
      return;
    }
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit players?"
    );
    if (!confirmSubmit) return;

    navigate("/pairings", { state: { players, tournamentDetails } });
  };

  const sortedPlayers = [...players].sort(
    (a, b) => b.playerRating - a.playerRating
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Add Players</h2>

      <form onSubmit={handleAddPlayer} style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <label>
              FIDE ID:
              <input
                type="text"
                name="fideID"
                value={player.fideID}
                onChange={handleChange}
                placeholder="Enter FIDE ID"
                required
                style={inputStyle}
              />
            </label>
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <label>
              Player Name:
              <input
                type="text"
                name="playerName"
                value={player.playerName}
                onChange={handleChange}
                placeholder="Enter Player Name"
                required
                style={inputStyle}
              />
            </label>
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <label>
              Player Rating:
              <input
                type="number"
                name="playerRating"
                value={player.playerRating}
                onChange={handleChange}
                min="1000"
                max="2900"
                placeholder="Enter Rating"
                required
                style={inputStyle}
              />
            </label>
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <label>
              Province:
              <select
                name="province"
                value={player.province}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="" disabled>
                  Select Province
                </option>
                <option value="Bulawayo">Bulawayo</option>
                <option value="Harare">Harare</option>
                <option value="Manicaland">Manicaland</option>
                <option value="Mashonaland Central">Mashonaland Central</option>
                <option value="Mashonaland East">Mashonaland East</option>
                <option value="Mashonaland West">Mashonaland West</option>
                <option value="Masvingo">Masvingo</option>
                <option value="Matabeleland North">Matabeleland North</option>
                <option value="Matabeleland South">Matabeleland South</option>
                <option value="Midlands">Midlands</option>
                <option value="International">International</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          <label>
            FIDE Title:
            <select
              name="fideTitle"
              value={player.fideTitle}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="" disabled>
                Select Title
              </option>
              <option value="None">None</option>
              <option value="GM">GM</option>
              <option value="IM">IM</option>
              <option value="FM">FM</option>
              <option value="CM">CM</option>
              <option value="WGM">WGM</option>
              <option value="WIM">WIM</option>
              <option value="WFM">WFM</option>
              <option value="WCM">WCM</option>
            </select>
          </label>
        </div>

        <div style={{ marginTop: "5%", height: "20vh" }}>
          <h3>Categories:</h3> <br />
          {["U8", "U10", "U14", "U16", "U18", "U20", "Open", "Ladies"].map(
            (group) => (
              <div key={group} id="age-checkbox">
                <input
                  type="checkbox"
                  value={group}
                  checked={player.ageGroups.includes(group)}
                  onChange={handleAgeGroupChange}
                />
                <label>{group}</label>
              </div>
            )
          )}
        </div>

        <button type="submit" style={buttonStyle}>
          Add Player
        </button>
      </form>

      <h3>Players Added</h3>
      {sortedPlayers.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Rating</th>
              <th>FIDE ID</th>
              <th>Province</th>
              <th>Categories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((p, index) => (
              <tr key={index}>
                <td>{p.fideTitle}</td>
                <td>{p.playerName}</td>
                <td>{p.playerRating}</td>
                <td>{p.fideID}</td>
                <td>{p.province}</td>
                <td>{p.ageGroups.join(", ")}</td>
                <td>
                  <button
                    onClick={() => handleRemovePlayer(index)}
                    style={buttonStyle}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No players added yet.</p>
      )}

      <button onClick={handleSubmitToDatabase} style={buttonStyle}>
        Submit All Players
      </button>
    </div>
  );
};

// Inline styles for inputs and buttons
const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "5px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AddPlayers;
