import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Button, Card, Spinner, Modal, Row, Col } from 'react-bootstrap';
import { ArrowRight, Download, Shuffle } from "lucide-react"; // Icons

/* Local imports */
import { firstPairing, otherRoundsPairing } from "../../scripts/swiss/swiss";
import RankingTable from "../../components/RankingTable";
import PairingTable from "../../components/PairingTable";
import { PlayersContext } from "../../App";
import Footer from "../../components/Footer";
import TournamentDetails from "./TournamentDetails";

const Pairings = () => {
  /* Hooks */
  const location = useLocation();
  const tournamentDetails = location.state?.tournamentDetails || [];
  const { players, setPlayers } = useContext(PlayersContext);

  // State
  const [pairings, setPairings] = useState([]);
  const [pairingTableHeading, setPairingTableHeading] = useState("Round 1 Pairing");
  const [maxRounds, setMaxRounds] = useState(Number(tournamentDetails.rounds));
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Generate initial pairings
  useEffect(() => {
    if (players.length > 0) {
      const generatedPairings = firstPairing(players, "white");
      setPairings(generatedPairings);
    }
  }, [players]);

  // Next round pairing
  const nextRoundPairing = () => {
    setIsLoading(true);
    let roundNumber = players[0].roundsPlayed + 1;
    if (roundNumber > maxRounds) {
      alert("All rounds have been played");
      setIsLoading(false);
      return;
    }
    setPairingTableHeading(`Round ${roundNumber} Pairing`);
    let newPairing = otherRoundsPairing(players, roundNumber);
    setPairings(newPairing);
    setIsLoading(false);
  };

  return (
    <Container className="mt-4">
      {/* Header */}
    <TournamentDetails data={tournamentDetails} />

      <Row className="g-4">
        {/* Ranking Table */}
        <Col md={5}>
          <Card className="shadow-sm">
            <Card.Body>
              <RankingTable caption="Player Rankings" />
            </Card.Body>
          </Card>
        </Col>

        {/* Pairing Table */}
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="text-dark">{pairingTableHeading}</h4>
              {isLoading ? (
                <div className="text-center my-4">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <PairingTable pairings={pairings} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Action Buttons */}
      <div className="d-flex justify-content-center gap-3 my-4">
        <Button variant="outline-info">
          <Download size={18} className="me-2" />
          Export Results
        </Button>
        <Button variant="outline-primary">
          <Download size={18} className="me-2" />
          Export Pairings
        </Button>
        <Button variant="success" onClick={() => setShowModal(true)}>
          <Shuffle size={18} className="me-2" />
          Generate Next Round
        </Button>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Next Round</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="fs-5">Are you sure you want to generate the next round pairings?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => { setShowModal(false); nextRoundPairing(); }}>
            <ArrowRight size={18} className="me-2" />
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    =<Footer/>
    </Container>
  );
};

export default Pairings;
