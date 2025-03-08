//Buchholz Tiebreak Calculation

export const buchholz = (player)=>{ 
    if(player === "bye"){
        return;
    }
 //all oponents
    let opponents = player.opponents;

    //loop each opponent to use their point for tiebreaks

      

    let score = player.tiebreakBuchholz;
    let arr = opponents.filter(val =>{
        return val.name != "bye" 
    })
 
    
  arr.forEach(val => {
    console.log(val);
    
    score+=val.points
  })


  console.log( {...player, tiebreakBucholz:score});
  

    return {...player, tiebreakBucholz:score}
}