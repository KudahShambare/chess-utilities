import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { createContext, useState } from 'react';

export const GameStausContext = createContext()
export const TopTimeContext = createContext()
export const BottomTimeContext = createContext()
export const RunningClockContext = createContext()


function App() {
  const [gameStatus, setGameStatus] = useState("not-started")
  const [topTime, setTopTime] = useState(300)
  const [bottomTime, setBottomTime] = useState(300)
  const [running, setRunning] = useState(null) // keeps track of the clock that is currently running


  return (
    <div className="App">
      <GameStausContext.Provider value={[gameStatus, setGameStatus]}>
        <BottomTimeContext.Provider value={[bottomTime, setBottomTime]}>
          <TopTimeContext.Provider value={[topTime, setTopTime]}>
            <RunningClockContext.Provider value={[running, setRunning]}>
              <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/settings" element={<Settings />} />

              </Routes>

            </RunningClockContext.Provider>
          </TopTimeContext.Provider>
        </BottomTimeContext.Provider>
      </GameStausContext.Provider>

    </div>
  );
}

export default App;
