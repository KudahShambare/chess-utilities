import { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// Local Imports
import { DisplayResultPopup } from "../App";
import { updatePoints } from "../scripts/swiss/swiss";

const GameResult = ({ players, currentBoard }) => {
  /* Hooks */
  const { display, setDisplay } = useContext(DisplayResultPopup);
  const [result, setResult] = useState(null);

  /* Handle Result Selection */
  const handleScoreChange = (e) => {
    setResult(e.target.value);
  };

  /* Handle Confirm Button */
  const handleResult = () => {
    updatePoints(players, result, currentBoard);
    setDisplay(false);
  };

  if (!display) return null;

  return (
    <Modal
      show={display}
      onHide={() => setDisplay(false)}
      centered
      size="lg" // Larger modal for desktop
      className="game-result-modal"
    >
      <Modal.Header closeButton className="border-bottom-0 pb-0">
        <Modal.Title className="fw-bold fs-3">Enter Game Result</Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-0">
        <Form>
          <div className="d-flex flex-column gap-3">
            <Form.Check
              type="radio"
              name="result"
              value="1-0"
              label="✅ White Wins"
              onChange={handleScoreChange}
              className="fs-5"
            />
            <Form.Check
              type="radio"
              name="result"
              value="0-1"
              label="🖤 Black Wins"
              onChange={handleScoreChange}
              className="fs-5"
            />
            <Form.Check
              type="radio"
              name="result"
              value="0.5-0.5"
              label="🤝 Draw"
              onChange={handleScoreChange}
              className="fs-5"
            />
            <Form.Check
              type="radio"
              name="result"
              value="bye"
              label="⏳ 🤝 Bye"
              onChange={handleScoreChange}
              className="fs-5"
            />
            <Form.Check
              type="radio"
              name="result"
              value="0-0"
              label="⏳ No Result"
              onChange={handleScoreChange}
              className="fs-5"
            />
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-top-0 pt-0">
        <Button
          variant="secondary"
          className="px-4 py-2 fs-5"
          onClick={() => setDisplay(false)}
        >
          ❌ Cancel
        </Button>
        <Button
          variant="success"
          className="px-4 py-2 fs-5"
          onClick={handleResult}
        >
          ✅ Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameResult;