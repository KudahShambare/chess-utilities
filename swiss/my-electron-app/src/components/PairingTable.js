import React from "react";

const PairingTable = () => {
  const sampleData = [
    {
      board: 1,
      white: {
        name: "Magnus Carlsen",
        rating: 2852,
        points: 5.5,
        tiebreak: 12.3,
      },
      black: {
        name: "Ian Nepomniachtchi",
        rating: 2789,
        points: 4.5,
        tiebreak: 11.1,
      },
    },
    {
      board: 2,
      white: {
        name: "Fabiano Caruana",
        rating: 2802,
        points: 5.0,
        tiebreak: 10.5,
      },
      black: {
        name: "Hikaru Nakamura",
        rating: 2781,
        points: 4.0,
        tiebreak: 9.8,
      },
    },
    // Add more sample rows here...
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Board</th>
          <th
            colSpan="4"
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
            Add Result
          </th>
          <th
            colSpan="4"
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
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Rating</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Points</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Tiebreak</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}></th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Rating</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Points</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Tiebreak</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((row, index) => (
          <tr key={index}>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.board}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{row.white.name}</td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.white.rating}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.white.points}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.white.tiebreak}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Add Result
              </button>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{row.black.name}</td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.black.rating}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.black.points}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {row.black.tiebreak}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PairingTable;
