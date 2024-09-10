import  { useState, useEffect } from 'react';

import shiri from "../assets/shiri.png"

const ChessClock = () => {
  const initialTime = 300; // 5 minutes in seconds

  const [playerOneTime, setPlayerOneTime] = useState(initialTime);
  const [playerTwoTime, setPlayerTwoTime] = useState(initialTime);
  const [activePlayer, setActivePlayer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && activePlayer !== null) {
      timer = setInterval(() => {
        if (activePlayer === 'playerOne') {
          setPlayerOneTime((prevTime) => Math.max(prevTime - 1, 0));
        } else if (activePlayer === 'playerTwo') {
          setPlayerTwoTime((prevTime) => Math.max(prevTime - 1, 0));
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, activePlayer]);

  const switchPlayer = () => {
    setActivePlayer((prevPlayer) =>
      prevPlayer === 'playerOne' ? 'playerTwo' : 'playerOne'
    );
    setIsRunning(true);
  };

  const resetClock = () => {
    setIsRunning(false);
    setActivePlayer(null);
    setPlayerOneTime(initialTime);
    setPlayerTwoTime(initialTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isPlayerOneTurn = activePlayer === 'playerOne';
  const isPlayerTwoTurn = activePlayer === 'playerTwo';

  return (
    <div>
      <div className='clock-side' onClick={switchPlayer} disabled={!isPlayerOneTurn && activePlayer !== null}>
        <h2>Player 1</h2>

        <h3>{formatTime(playerOneTime)}</h3>
       
      </div>
      <div id="branding">

<img src={shiri} />

<div>
        <button onClick={resetClock}>Reset</button>
      </div>

</div>
      <div className='clock-side' onClick={switchPlayer} disabled={!isPlayerTwoTurn && activePlayer !== null}>
        <h2>Player 2</h2>
          
          <h3>           {formatTime(playerTwoTime)}
          </h3>
       
      </div>
   
    
    </div>
  );
};

export default ChessClock;
