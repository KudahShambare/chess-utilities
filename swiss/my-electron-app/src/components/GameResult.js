import { useState, useEffect, use, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";

//lOCAL IMPORTS

import { DisplayResultPopup } from "../App";
import { set } from "lodash";

const GameResult = ({ players, currentBoard }) => {

  /* Hooks */

  const { display, setDisplay } = useContext(DisplayResultPopup);

  const [result, setResult] = useState(null);
  const [allPlayers, setAllPlayers] = useState([...players]); // Clone to avoid mutating the prop
  const [showPopup, setShowPopup] = useState(display);

  /* Handle Result Selection */
  const handleScoreChange = (e) => {
    setResult(e.target.value);
  };

  /* Handle Confirm Button */
  const handleResult = () => {
    console.log(currentBoard, result);
    
  setDisplay(false);
    

    const updatedPlayers = allPlayers.map((player) => {
      if (result === "1-0" && player.playerName === currentBoard.white) {
        return { ...player, score: player.score + 1 };
      } else if (result === "0-1" && player.playerName === currentBoard.black) {
        return { ...player, score: player.score + 1 };
      } else if (
        result === "0.5-0.5" &&
        (player.playerName === currentBoard.white || player.playerName === currentBoard.black)
      ) {
        return { ...player, score: player.score + 0.5 };
      }
      return player;
    });

    setAllPlayers(updatedPlayers);
  };

  useEffect(() => {
    console.log("Dispaly",display);
    
    setShowPopup(display); // Ensure showPopup updates when display changes
  }, [display]);

  if(!display) return null;

  return (
    <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Enter Game Result</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
       
          <div className="d-flex flex-column gap-2">
            <Form.Check
              type="radio"
              name="result"
              value="1-0"
              label="✅ White Wins"
              onChange={handleScoreChange}
            />
            <Form.Check
              type="radio"
              name="result"
              value="0-1"
              label="🖤 Black Wins"
              onChange={handleScoreChange}
            />
            <Form.Check
              type="radio"
              name="result"
              value="0.5-0.5"
              label="🤝 Draw"
              onChange={handleScoreChange}
            />
            <Form.Check
              type="radio"
              name="result"
              value="0-0"
              label="⏳ No Result"
              onChange={handleScoreChange}
            />
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" className="px-4" onClick={() => setShowPopup(false)}>
          ❌ Cancel
        </Button>
        <Button variant="success" className="px-4" onClick={handleResult}>
          ✅ Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameResult;
