import './App.css';
import { createContext,useState } from 'react';
import Home from './pages/Home';

import {Routes, Route} from "react-router-dom"
import NewTournament from './pages/NewTournament';
import AddPlayers from './pages/AddPlayers';
import Pairings from './pages/Pairings';
import About from './pages/About';

export const DisplayResultPopup  = createContext()


function App() {

const [display, setDisplay] = useState(false);

  return (
    <div className="App">
 

    <DisplayResultPopup.Provider value={{display, setDisplay}}>
   <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/new' element={<NewTournament/>} />
   <Route path='/new/addplayers' element={<AddPlayers/>} />
   <Route path='/pairings' element={<Pairings/>} />


    </Routes>
    </DisplayResultPopup.Provider>
    </div>
  );
}

export default App;
