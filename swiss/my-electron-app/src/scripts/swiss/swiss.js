// pairingAlgorithms.js
const _ = require("lodash");

const firstPairing = (players, topSeedColor = "white") => {
    // Sort players by rating in descending order
    let sortedPlayers = _.sortBy(players, ["playerRating"]).reverse();
    let pairings = [];
    const numPlayers = sortedPlayers.length;

    // Split players into two groups
    const numTables = Math.floor(numPlayers / 2);
    const topHalf = sortedPlayers.slice(0, numTables);
    const bottomHalf = sortedPlayers.slice(numTables);

    for (let i = 0; i < numTables; i++) {
        const pairing = {
            board: i + 1,
            white: null,
            black: null,
        };

        // Pair players ensuring unique matches
        if (topSeedColor === "white" ) {
            //odd top seed boards playing white
            if(i%2==0){
                pairing.white = topHalf[i];
                pairing.black = bottomHalf[i];
            }else{
                pairing.black = topHalf[i];
                pairing.white = bottomHalf[i];
            }
          
        } else {
          //odd top seed boards playing black
          if(i%2!=0){
            pairing.white = topHalf[i];
            pairing.black = bottomHalf[i];
        }else{
            pairing.black = topHalf[i];
            pairing.white = bottomHalf[i];
        }
      
        }

        // Alternate color preference
        pairings.push(pairing);
    }

    // Handle odd number of players (assign bye)
    if (numPlayers % 2 !== 0) {
        const unpairedPlayer = sortedPlayers[numPlayers - 1];
        pairings.push({
            board: pairings.length + 1,
            white: unpairedPlayer,
            black: "bye",
        });
    }

   // console.log(pairings);
    

    return pairings;
};

const otherRoundsPairing = (allPlayers, round) => {
    let maxScore = round - 1;
    let scoreGroups = [];
    let id = 0;

    for (let i = 0; i <= maxScore; i += 0.5) {
        scoreGroups.push({
            id: id,
            score: i,
        });
        id++;
    }

    console.log(scoreGroups);
};
//Update points
const updatePlayer = (allPlayers,playerName) =>{
    if(allPlayers.length<1) return;
    return allPlayers.find(val => val.playerName === playerName)
}

const updatePoints = (players,result,currentBoard) =>{
    //Steps
    //capture individual player points
  
console.log("Result",result,players);
if(players.length >0){
 console.log(currentBoard);
 let whitePlayer = currentBoard.white
 let blackPlayer = currentBoard.black

 switch (result){
    case "1-0":
        whitePlayer.point+=1;
        whitePlayer.roundsPlayed +=1;
        blackPlayer.roundsPlayed +=1;
        break;
    case "0-1":
        blackPlayer.points+=1;
        whitePlayer.roundsPlayed +=1;
        blackPlayer.roundsPlayed +=1;
        break;
    case "0.5-0.5":
        blackPlayer.points+=0.5;
        whitePlayer.points+=0.5;
        whitePlayer.roundsPlayed +=1;
        blackPlayer.roundsPlayed +=1;

        break;
    case "bye":
        whitePlayer.points+=1;
        whitePlayer.roundsPlayed +=1;
        break;
        
    default:
        whitePlayer.roundsPlayed +=1;
        blackPlayer.roundsPlayed +=1;

        alert("No result");
 }
 
   //update global players points
   let black = updatePlayer(players,blackPlayer.playerName)
   let white = updatePlayer(players,whitePlayer.playerName)

   console.log(black,white);
   

}

}

module.exports = { firstPairing, otherRoundsPairing,updatePoints };

/****
 * missing tirbreak and perfomance rating calculation
 */