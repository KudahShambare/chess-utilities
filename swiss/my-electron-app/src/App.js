import './App.css';
import Home from './pages/Home';

import {Routes, Route} from "react-router-dom"
import NewTournament from './pages/NewTournament';
import AddPlayers from './pages/AddPlayers';
import Pairings from './pages/Pairings';

function App() {
  return (
    <div className="App">
 

    
   <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='/new' element={<NewTournament/>} />
   <Route path='/new/addplayers' element={<AddPlayers/>} />
   <Route path='/pairings' element={<Pairings/>} />

    </Routes>
    </div>
  );
}

export default App;
