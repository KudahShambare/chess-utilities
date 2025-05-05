import './App.css';
import { createContext,useState } from 'react';

import {Routes, Route} from "react-router-dom"

import Home from './pages/Home';

import NewTournament from './pages/NewTournamment/NewTournament';
import AddPlayers from './pages/AddPlayers/AddPlayers';
import Pairings from './pages/Pairings/Pairings';
import About from './pages/About';
import Contact from './pages/Contact';
import Hub from './pages/Hub/Hub';
import CloudTournament from './pages/NewTournamment/CloudTournament';
import PlayerDB from './pages/Hub/PlayerDB';

export const DisplayResultPopup  = createContext()
export const PlayersContext = createContext()

function App() {

const [display, setDisplay] = useState(false);
const [players,setPlayers] = useState([])

  return (
    <div className="App">
 
  <PlayersContext.Provider value={{players,setPlayers}}>
    <DisplayResultPopup.Provider value={{display, setDisplay}}>
   <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/contact' element={<Contact/>} />
      <Route path='/new' element={<NewTournament/>} />
   <Route path='/addplayers' element={<AddPlayers/>} />
   <Route path='/pairings' element={<Pairings/>} />
   <Route path='/hub' element={<Hub/>} />
   <Route path="/cloud" element={<CloudTournament />} />
   <Route path="/player-database" element={<PlayerDB />} />


    </Routes>
    </DisplayResultPopup.Provider>
    </PlayersContext.Provider>
    </div>
  );
}

export default App;
