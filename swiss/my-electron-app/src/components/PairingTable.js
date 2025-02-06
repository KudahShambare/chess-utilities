import React, { useContext, useEffect, useRef, useState } from "react";

//LOCAL IMPORTS
import { DisplayResultPopup } from "../App";
import GameResult from "./GameResult";



const PairingTable = ({ pairings, heading, players }) => {
  /*Hooks*/

  const {display, setDisplay} = useContext(DisplayResultPopup);

  const [showResultForm, setShowResultForm] = useState(false);
  const [currentBoard, setCurrentBoard] = useState({});
  const [allPlayers, setAllPlayers] = useState([...players]); // Clone to avoid mutating the prop
  /** Result input form will only appear when a button is clicked and must disaappear when result confirmed */



  //prompt arbiter to enter game results function
  const enterResult = (board) => {

  console.log(board);
  let arr = allPlayers.map((player) => {
    return {playerName: player.playerName, points: player.points}
  });
   
    setDisplay(true);
  
 console.log(arr);
 
  };

  

  return (
    <>
    {display && <GameResult players={allPlayers} currentBoard={currentBoard} />}
      <h2>{heading}</h2>
      <table
        style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Board</th>
            <th
              colSpan="3"
              style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
              }}
            >
              White
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                backgroundColor: "#f3f3f3",
              }}
            >
              Results
            </th>
            <th
              colSpan="3"
              style={{
                backgroundColor: "#e6f7ff",
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Black
            </th>
          </tr>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}></th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
              Rating
            </th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
              Points
            </th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
         
            </th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
              Rating
            </th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {pairings.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {row.board}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {row.white.playerName}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {row.white.playerRating}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {row.white.points}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <section id="round-result">
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    enterResult(row);
                  }}
                >
                  Add Result
                </button>
                </section>
                             </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {row.black.playerName}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {row.black.playerRating}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {row.black.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PairingTable;
