import { useContext } from "react";
import { GameStausContext } from "../App";


const Controls = ()=>{
    const [gameStatus,setGameStatus] = useContext(GameStausContext)
    return <div>

        <button>White Illegal</button>
        <button onClick ={()=>{
            if(gameStatus === "not-started"){
                return
            }
            if(gameStatus === "started"){
                setGameStatus("paused")
                //pause clock logic comes here
            }
            if(gameStatus === "paused"){
                setGameStatus("started")
                    //Resume clock logic comes here
                
            }
        }}>Play/Pause</button>
        <button>Black Illegal</button>

    
    </div>
}
export default Controls;