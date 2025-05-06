import React, { useContext, useState } from "react";
import { DisplayResultPopup, PlayersContext } from "../App";
import GameResult from "./GameResult";
import "./PairingTable.css"; // Import the CSS file

const PairingTable = ({ pairings, heading }) => {
  const { display, setDisplay } = useContext(DisplayResultPopup);
  const { players } = useContext(PlayersContext);

  const [currentBoard, setCurrentBoard] = useState({});
  const [allPlayers] = useState([...players]); // Clone to avoid mutating the prop

  // Prompt arbiter to enter game results
  const enterResult = (board) => {
    if (!board) return;    
   
    //mark the game as played
    board.gamePlayed = true;
    setCurrentBoard(board);
    setDisplay(true);
  };

  return (
    <div className="pairing-table-container">
      <h2>{heading}</h2>
      {display && <GameResult players={allPlayers} currentBoard={currentBoard} />} {/**Display Game Result Only When The Display StATE is rue */}
      <table className="pairing-tables">
        <thead>
          <tr>
            <th>Board</th>
            <th colSpan="3">White</th>
            <th>Results</th>
            <th colSpan="3">Black</th>
          </tr>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Rating</th>
            <th>Points</th>
            <th></th>
            <th>Name</th>
            <th>Rating</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {pairings.map((row, index) => (
            
            
            <tr key={index}>
              <td>{row.board}</td>
              <td>{row.white.playerName}</td>
              <td>{row.white.playerRating}</td>
              <td>{row.white.points}</td>
              <td>
              {

(!row.gamePlayed) ? (
  <button
    onClick={(e) => {
      e.preventDefault();
      enterResult(row);
    }}
  >
    Add Result
  </button>
 ):<>Game Over</>
              }
               
              </td>
              <td>{row.black.playerName}</td>
              <td>{row.black.playerRating}</td>
              <td>{row.black.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PairingTable;