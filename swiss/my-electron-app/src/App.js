import './App.css';
import { createContext,useState } from 'react';
import Home from './pages/Home';

import {Routes, Route} from "react-router-dom"
import NewTournament from './pages/NewTournament';
import AddPlayers from './pages/AddPlayers';
import Pairings from './pages/Pairings';
import About from './pages/About';

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
   <Route path='/new' element={<NewTournament/>} />
   <Route path='/new/addplayers' element={<AddPlayers/>} />
   <Route path='/pairings' element={<Pairings/>} />


    </Routes>
    </DisplayResultPopup.Provider>
    </PlayersContext.Provider>
    </div>
  );
}

export default App;
