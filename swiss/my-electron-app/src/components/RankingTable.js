const RankingTable = ({ players, caption }) => {
  
  players = players.sort((a,b)=>{return b.points - a.points}).sort((a,b)=>{return b.playerRating - a.playerRating})
  
  
  const headerCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  fontWeight: "bold",
};

const cellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>{caption}</h2>
      {players.length > 0 ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                textAlign: "left",
              }}
            >
              <th style={headerCellStyle}>Rank</th>
              <th style={headerCellStyle}>Player Name</th>
              <th style={headerCellStyle}>Rating</th>
              <th style={headerCellStyle}>Province</th>
              <th style={headerCellStyle}>FIDE Title</th>
              <th style={headerCellStyle}>Points</th>
              <th style={headerCellStyle}>Performance Rating</th>
              <th style={headerCellStyle}>Tiebreak</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <td style={cellStyle}>{index + 1}</td>
                <td style={cellStyle}>{player.playerName}</td>
                <td style={cellStyle}>{player.playerRating}</td>
                <td style={cellStyle}>{player.province}</td>
                <td style={cellStyle}>{player.fideTitle}</td>
                <td style={cellStyle}>{player.points}</td>
                <td style={cellStyle}>{player.performanceRating || "N/A"}</td>
                <td style={cellStyle}>{player.tiebreak || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", color: "#666", marginTop: "20px" }}>
          No players found.
        </p>
      )}
    </div>
  );
};



export default RankingTable;
