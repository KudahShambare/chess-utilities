// Pairings.js
/***
 * The rankings table must change whenever scores are updated
 * I have to cache the players state to avoid  data loss on refresh (caaching for electron.js)
 */

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/*Local imports*/
import { firstPairing, otherRoundsPairing } from "../scripts/swiss/swiss";
import RankingTable from "../components/RankingTable";
import PairingTable from "../components/PairingTable";
import { PlayersContext } from "../App";


const Pairings = () => {
  /*Hooks*/
  
  const location = useLocation();
let tournamentDetails = location.state?.tournamentDetails || []
//useContext
const {players,setPlayers} = useContext(PlayersContext)
//useState
  const [pairings, setPairings] = useState([]); // Store pairings
  const [pairingTableHeading,setPairingTableHeading] = useState("Round 1 Pairing")



  useEffect(() => {
    ///Validate conditions necessary to have a swiss pairing
    if (players.length > 0) {
      const generatedPairings = firstPairing(players, "white"); // or "black" depending on topSeedColor
      setPairings(generatedPairings); // Set the generated pairings in state
      //console.log(generatedPairings[0]);

      // Generate score groups for round 5 (for example)
      // otherRoundsPairing(players, 5);
    }
   
  }, []);

  const nextRoundPairing = ()=>{
    let roundNumber = players[0].roundsPlayed+1;
    setPairingTableHeading(`Round ${roundNumber} pairing`)
   let newPiring = otherRoundsPairing(players,roundNumber);

   setPairings(newPiring)
    

  }


  return (
    <div>
     
     <RankingTable caption=" Ranking" />
     <button>export rankings</button>

    <PairingTable pairings={pairings}  heading={pairingTableHeading}/>
    <button>export pairings</button>
    <button onClick={nextRoundPairing}>Generate Next Round Pairings</button>

    </div>
  );
};

export default Pairings;
