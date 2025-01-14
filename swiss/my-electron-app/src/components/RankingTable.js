const RankingTable = ({ players, caption }) => {
  return (
    <>
      <h2>{caption}</h2>
      {players.length > 0 ? (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Rating</th>
              <th>Province</th>
              <th>FIDE Title</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.playerName}</td>
                <td>{player.playerRating}</td>
                <td>{player.province}</td>
                <td>{player.fideTitle}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No players found.</p>
      )}
    </>
  );
};

export default RankingTable;
