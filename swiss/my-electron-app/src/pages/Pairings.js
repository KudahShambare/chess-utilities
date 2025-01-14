// Pairings.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { firstPairing, otherRoundsPairing } from "../scripts/swiss/swiss";
import RankingTable from "../components/RankingTable";
import PairingTable from "../components/PairingTable";

const Pairings = () => {
  /*Hooks*/
  const location = useLocation();
  let players = location.state?.players || []; // Retrieve sorted players array
let tournamentDetails = location.state?.tournamentDetails || []

  const [pairings, setPairings] = useState([]); // Store pairings
  const [scoreGroups, setScoreGroups] = useState([]);
  const [showResult, setShowResult] = useState("none");
  const [result, setResult] = useState(null);
  const [currentBoard, setCurrentBoard] = useState({});

  const handleScoreChange = (e) => {
    //console.log(e.target.value);

    setResult(e.target.value);
  };

  useEffect(() => {
    if (players.length > 0) {
      const generatedPairings = firstPairing(players, "white"); // or "black" depending on topSeedColor
      setPairings(generatedPairings); // Set the generated pairings in state
      //console.log(generatedPairings[0]);

      // Generate score groups for round 5 (for example)
      // otherRoundsPairing(players, 5);
    }
  }, [players]);

  /*Handle Points*/
  const handlePoints = (index) => {
    setShowResult("block");
    //console.log(index);
    //console.log(pairings[index]);
    setCurrentBoard(pairings[index]);
    //currentBoard.result = result;
  };

  useEffect(()=>{
    console.log(tournamentDetails);
    
  },[])

  return (
    <div>
      <section style={{ display: `${showResult}` }}>
        <form>
          <h1>Game Result</h1>
          <label>White wins</label>
          <input
            type="radio"
            name="result"
            value="1-0"
            onChange={handleScoreChange}
          />
          <label>Black wins</label>
          <input
            type="radio"
            name="result"
            value="0-1"
            onChange={handleScoreChange}
          />
          <label>Draw</label>
          <input
            type="radio"
            name="result"
            value="0.5-0.5"
            onChange={handleScoreChange}
          />
          <label>No result</label>
          <input
            type="radio"
            name="result"
            value="0-0"
            onChange={handleScoreChange}
          />

          <button
            onClick={(e) => {
              e.preventDefault();

              //set game results

              currentBoard.result = result;
              let currentPlayer = currentBoard.white;
              let opponent = currentBoard.black;
              //console.log(currentBoard);
              let arr = [];
              players.forEach((val) => {
                if (val == currentPlayer) {
                  if (result === "1-0") {
                    currentPlayer.points += 1;
                  } else if (result === "0.5-0.5") {
                    currentPlayer.points += 0.5;
                    opponent.points += 0.5;
                  } else if (result === "0-1") {
                    opponent.points += 1;
                  }
                  arr.push(currentPlayer);
                } else {
                  arr.push(val);
                }

               //11 console.log(16 / 64);
                players = arr;
                //reset result state
                setResult(null);
                //hide the popover
                setShowResult("none");
              });
              //setPairings(arr)
              console.log(pairings);
            }}
          >
            Confirm
          </button>
        </form>
      </section>
     <RankingTable caption="Initial Ranking" players={players}/>

    <PairingTable/>
    </div>
  );
};

export default Pairings;
