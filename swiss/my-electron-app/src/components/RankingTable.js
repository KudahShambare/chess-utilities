import { useContext } from "react";
import { PlayersContext } from "../App";

const RankingTable = ({ caption }) => {
  const { players } = useContext(PlayersContext);

  // Sort players before rendering
  const sortedPlayers = [...players].sort((a, b) => b.points - a.points || b.playerRating - a.playerRating);

  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#282c34", // Match body background
    },
    headerCell: {
      padding: "10px",
      border: "1px solid #3E4451",
      fontWeight: "bold",
      color: "#E5C07B", // Accent color for headers (bright yellow)
      textAlign: "left",
      backgroundColor: "#2C313C", // Slightly darker background for headers
    },
    cell: {
      padding: "10px",
      border: "1px solid #3E4451",
      color: "#1D2B53", // Bright white for text
    },
    rowEven: {
      backgroundColor: "#3E4451", // Light gray for even rows
    },
    rowOdd: {
      backgroundColor: "#2C313C", // Slightly darker for odd rows
    },
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>{caption}</h2>
      {sortedPlayers.length > 0 ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={styles.headerCell}>Rank</th>
              <th style={styles.headerCell}>Player Name</th>
              <th style={styles.headerCell}>Rating</th>
              <th style={styles.headerCell}>Province</th>
              <th style={styles.headerCell}>FIDE Title</th>
              <th style={styles.headerCell}>Points</th>
              <th style={styles.headerCell}>Rounds Played</th>
              <th style={styles.headerCell}>Performance Rating</th>
              <th style={styles.headerCell}>Tiebreak</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                <td style={styles.cell}>{index + 1}</td>
                <td style={styles.cell}>{player.playerName}</td>
                <td style={styles.cell}>{player.playerRating}</td>
                <td style={styles.cell}>{player.province}</td>
                <td style={styles.cell}>{player.fideTitle}</td>
                <td style={styles.cell}>{player.points}</td>
                <td style={styles.cell}>{player.roundsPlayed }</td>
                <td style={styles.cell}>{player.performanceRating || "N/A"}</td>
                <td style={styles.cell}>{player. tiebreakBucholz|| "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", color: "#666", marginTop: "20px" }}>No players found.</p>
      )}
    </div>
  );
};

export default RankingTable;
