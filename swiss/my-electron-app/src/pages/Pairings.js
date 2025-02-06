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


  useEffect(() => {
    ///Validate conditions necessary to have a swiss pairing
    if (players.length > 0) {
      const generatedPairings = firstPairing(players, "white"); // or "black" depending on topSeedColor
      setPairings(generatedPairings); // Set the generated pairings in state
      //console.log(generatedPairings[0]);

      // Generate score groups for round 5 (for example)
      // otherRoundsPairing(players, 5);
    }
  }, [players]);

  


  return (
    <div>
     
     <RankingTable caption="Initial Ranking" players={players}/>

    <PairingTable pairings={pairings}  players={players} heading="Round 1 pairing"/>
    </div>
  );
};

export default Pairings;
