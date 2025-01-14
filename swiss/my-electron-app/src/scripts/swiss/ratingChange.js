const ratingChange = (myRating, opponentRating, Kfactor, Vfactor, Lfactor, myPoints, opponentPoints, gameResult) => {
    let myQ = 10 ** (myRating / 400);
    let opponentQ = 10 ** (opponentRating / 400);

    console.log("myQ:", myQ, "opponentQ:", opponentQ);
    
    let expectedResult = myQ / (myQ + opponentQ);
    console.log("expectedResult:", expectedResult);
    
    let newRating = myRating + 
                    Kfactor * (gameResult - expectedResult) + 
                    ((Lfactor * myPoints) * (myPoints + opponentPoints)) + 
                    gameResult * Vfactor;

    console.log("new rating:", newRating);
    return newRating;
};

// Example Usage
ratingChange(1500, 1540, 40, 10, 20, 1, 0, 1);
