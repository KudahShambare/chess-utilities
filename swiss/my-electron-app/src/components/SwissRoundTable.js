const SwissRoundsTable = () => {
    const getRounds = (players) => {
      if (players <= 4) return 2; // Standard for 3-4 players
      return Math.ceil(Math.log2(players));
    };
  
    const playerRanges = [
      { min: 3, max: 4 },
      { min: 5, max: 8 },
      { min: 9, max: 16 },
      { min: 17, max: 32 },
      { min: 33, max: 64 },
      { min: 65, max: 128 },
      { min: 129, max: 200 }
    ];
  
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Player Range</th>
            <th>Number of Rounds</th>
          </tr>
        </thead>
        <tbody>
          {playerRanges.map((range, index) => (
            <tr key={index}>
              <td>{`${range.min} - ${range.max} players`}</td>
              <td>{getRounds(range.max)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default SwissRoundsTable;