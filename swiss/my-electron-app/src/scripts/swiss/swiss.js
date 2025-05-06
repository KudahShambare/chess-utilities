import { buchholz,perfomanceRating } from "./tiebreaks";

// pairingAlgorithms.js
const _ = require("lodash");

//For the first round the pairing is based on initial ratinfs

const firstPairing = (players, topSeedColor = "white") => { //players -- array with players details, topSeedColor -- color of the top seed player's pieces for Round 1
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
      gamePlayed: false,
    };

    // Pair players ensuring unique matches
    if (topSeedColor === "white") {
      //odd top seed boards playing white
      if (i % 2 == 0) {
        pairing.white = topHalf[i];
        pairing.black = bottomHalf[i];
      } else {
        pairing.black = topHalf[i];
        pairing.white = bottomHalf[i];
      }
    } else {
      //odd top seed boards playing black
      if (i % 2 != 0) {
        pairing.white = topHalf[i];
        pairing.black = bottomHalf[i];
      } else {
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

  return pairings;
};

//Pairings fro round 2 to final round
const otherRoundsPairing = (allPlayers, round) => { //allPlayers -- array with players details, round -- current round number
  console.log("allPlayers", allPlayers);
  
  const numTables = Math.floor(allPlayers.length / 2); // Number of pairs to be generated
  let maxScore = round - 1;
  let scoreGroups = [];
  let id = 0;

  // Create score groups
  for (let i = 0; i <= maxScore; i += 0.5) {
    scoreGroups.push({
      id: id,
      score: i,
      players: [],
    });
    id++;
  }

  // Assign players to their respective score groups
  for (let i = 0; i < allPlayers.length; i++) {
    let score = allPlayers[i].points;
    for (let j = 0; j < scoreGroups.length; j++) {
      if (scoreGroups[j].score === score) {
        scoreGroups[j].players.push(allPlayers[i]);
      }
    }
  }

  let pairings = []; // Store all next round pairings
  let boardNumber = 1; // Keep track of boards 

  // Reverse score groups so highest scores are paired first
  scoreGroups = scoreGroups.reverse();

  for (let i = 0; i < scoreGroups.length; i++) {
    let current = scoreGroups[i];

    // If odd number of players in this group, move one to the next group
    if (current.players.length % 2 !== 0) {
      if (i + 1 < scoreGroups.length) {
        let toGoNext = current.players[current.players.length - 1]; // Get last player

        // Remove player from current group safely
        let index = current.players.findIndex(
          (p) => p.playerName === toGoNext.playerName
        );
        if (index !== -1) current.players.splice(index, 1);

        // Move to next group
        scoreGroups[i + 1].players.unshift(toGoNext);
      }
    }

    // Generate pairings within this score group
    for (let j = 0; j < current.players.length; j += 2) {
      // Check if players have played each other before
      let hasPlayed = playedEachOther(current.players[j], current.players[j + 1]);
      console.log(current.players[j],"hasPlayed", current.players[j+1], hasPlayed);
      
      const pairing = {
        board: boardNumber,
        white: current.players[j],
        black: current.players[j + 1],
      };
      if (pairing.black == undefined) {
        pairing.black = "bye";
      }
      pairings.push(pairing);
      boardNumber++;
    }
  }


  return pairings;
};
/********************************************************************************** */
//Update points
const updatePlayer = (allPlayers, playerName) => {
  if (allPlayers.length < 1) return;
  return allPlayers.find((val) => val.playerName === playerName);
};

const updatePoints = (players, result, currentBoard) => {
  //Steps
  //capture individual player points

  if (players.length > 0) {
    let whitePlayer = currentBoard.white;
    let blackPlayer = currentBoard.black;

   

    switch (result) {
      case "1-0": //white wins
        whitePlayer.points += 1;
        whitePlayer.roundsPlayed += 1;
        blackPlayer.roundsPlayed += 1;

        whitePlayer.opponents.push(blackPlayer)
        blackPlayer.opponents.push(whitePlayer)

            //update player tiebreak 
 blackPlayer = buchholz(blackPlayer)
 whitePlayer = buchholz(whitePlayer)

 //update players perfomance rating
blackPlayer = perfomanceRating(blackPlayer)
 whitePlayer = perfomanceRating(whitePlayer) 
        break;

      case "0-1": //blackwins
        blackPlayer.points += 1;
        whitePlayer.roundsPlayed += 1;
        blackPlayer.roundsPlayed += 1;
        whitePlayer.opponents.push(blackPlayer)
        blackPlayer.opponents.push(whitePlayer)
             
            //update player tiebreak 
 blackPlayer = buchholz(blackPlayer)
 whitePlayer = buchholz(whitePlayer)

 //update players perfomance rating
  blackPlayer = perfomanceRating(blackPlayer)
  whitePlayer = perfomanceRating(whitePlayer) 

  
  
  break;


      case "0.5-0.5": //Draw
        blackPlayer.points += 0.5;
        whitePlayer.points += 0.5;
        whitePlayer.roundsPlayed += 1;
        blackPlayer.roundsPlayed += 1;
        whitePlayer.opponents.push(blackPlayer)
        blackPlayer.opponents.push(whitePlayer)
             
            //update player tiebreak 
 blackPlayer = buchholz(blackPlayer)
 whitePlayer = buchholz(whitePlayer)

 //update players perfomance rating
  blackPlayer = perfomanceRating(blackPlayer)
  whitePlayer = perfomanceRating(whitePlayer)
        break;

      case "bye": //bye
        whitePlayer.points += 1;
        whitePlayer.roundsPlayed += 1;
        whitePlayer.opponents.push({"name":"bye"})
             
            //update player tiebreak 
 whitePlayer = buchholz(whitePlayer)
 whitePlayer = perfomanceRating(whitePlayer)
        alert("Bye assigned to " + whitePlayer.playerName);
      
        break;

      default: //No result
        whitePlayer.roundsPlayed += 1;
        blackPlayer.roundsPlayed += 1;
        whitePlayer.opponents.push(blackPlayer)
        blackPlayer.opponents.push(whitePlayer)
             
            //update player tiebreak 
 blackPlayer = buchholz(blackPlayer)
 whitePlayer = buchholz(whitePlayer)

 //update players perfomance rating
  blackPlayer = perfomanceRating(blackPlayer)
  whitePlayer = perfomanceRating(whitePlayer)
        alert("No result");
    }



    //update global players points
    let black = updatePlayer(players, blackPlayer.playerName);
    let white = updatePlayer(players, whitePlayer.playerName);

    
    
  }
};

//validate number of rounds vs number of players

const validRound = (players, rounds) => {
  // Minimum number of rounds = 2
  if (rounds < 2) {
    return false;
  }

  // Minimum number of players = 3
  if (players.length < 3) {
    return false;
  }

  // Calculate minimum and maximum number of players for the given number of rounds
  const minPlayers = Math.pow(2, rounds - 1) + 1;
  const maxPlayers = Math.pow(2, rounds);

  // Check if the number of players is within the valid range
  if (players.length < minPlayers || players.length > maxPlayers) {
    return false;
  }

  return true;
};

//check if 2 players have played each other
const playedEachOther = (player1, player2) => {
  // Check if player2 is in player1's opponents list
  const hasPlayed = player1.opponents.some(
    (opponent) => opponent.playerName === player2.playerName
  );  
  return hasPlayed;
};
//Export functions

export { firstPairing, otherRoundsPairing, updatePoints, validRound };

/****
 * missing tirbreak and perfomance rating calculation
 * the minimum number of rounds and players contrints need to be updated
 */
