//Buchholz Tiebreak Calculation

export const buchholz = (player) => {
  if (player === "bye") {
    return;
  }


  //all oponents
  let opponents = player.opponents;

  //loop each opponent to use their point for tiebreaks

  let score = player.tiebreakBuchholz;
  let arr = opponents.filter(val => {
    return val.name != "bye"
  })


  arr.forEach(val => {
    console.log(val);

    score += val.points
  })

  return { ...player, tiebreakBucholz: score }
}

/*Perfomance Rating Calculation*/
export const perfomanceRating = (player) => {
  //get all opponents
  let opponents = player.opponents;


  opponents = opponents.filter(val => {
    return val.name != "bye"
  })
  //average opponents rating
  let avarageOppontentRating = 0
  opponents.forEach(val => {
    avarageOppontentRating += val.playerRating
  })
  avarageOppontentRating = avarageOppontentRating / opponents.length

  console.log("avarageOppontentRating", avarageOppontentRating);
  

  //expected score
  let expectedScore = 0
  opponents.forEach(val => {
    expectedScore += calculateExpectedScore(player, val)
  }

  )
  console.log("expectedScore", expectedScore);

  let perfomanceRating = avarageOppontentRating + 400 * (player.points - expectedScore) 

  return { ...player,  perfomanceRating: perfomanceRating }


}


const calculateExpectedScore = (player, opponent) => {

  const playerRating = player.playerRating;
  const opponentRating = opponent.playerRating;

  const expectedScore = 1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
  return expectedScore;

}