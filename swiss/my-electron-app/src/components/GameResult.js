import { useState, useEffect, use, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";

//lOCAL IMPORTS

import { DisplayResultPopup } from "../App";
import { updatePoints } from "../scripts/swiss/swiss";

const GameResult = ({ players, currentBoard }) => {
  /* Hooks */

  const { display, setDisplay } = useContext(DisplayResultPopup);

  const [result, setResult] = useState(null);
  const [allPlayers, setAllPlayers] = useState([...players]); // Clone to avoid mutating the prop

  /* Handle Result Selection */
  const handleScoreChange = (e) => {
    setResult(e.target.value);
  };

  /* Handle Confirm Button */
  const handleResult = () => {
    //updte player points
    let updatedPlayers = [];
    updatePoints(players, result,currentBoard);

    setDisplay(false);

    setAllPlayers(updatedPlayers);
  };

  if (!display) return null;

  return (
    <Modal show={display} onHide={() => setDisplay(false)} centered>
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
              value="bye"
              label="⏳ 🤝 Bye"
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
        <Button
          variant="secondary"
          className="px-4"
          onClick={() => setDisplay(false)}
        >
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
